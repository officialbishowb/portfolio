"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { BookOpen, BookMarked, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type SectionKey = "current" | "read"

function useSectionPrefs() {
  const [collapsed, setCollapsed] = useState<Record<SectionKey, boolean>>({
    current: false,
    read: false,
  })
  // load persisted
  useEffect(() => {
    try {
      const raw = localStorage.getItem("books-sections-collapsed")
      if (raw) setCollapsed(JSON.parse(raw))
    } catch {}
  }, [])
  // persist on change
  useEffect(() => {
    try {
      localStorage.setItem("books-sections-collapsed", JSON.stringify(collapsed))
    } catch {}
  }, [collapsed])
  return { collapsed, setCollapsed }
}

function GoodreadsWidget({
  widgetId,
  scriptSrc,
  css,
  cacheKey,
}: {
  widgetId: string
  scriptSrc: string
  css: string
  cacheKey: string
}) {
  const containerId = `gr_custom_widget_${widgetId}`
  const loadedRef = useRef(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    const saveCache = () => {
      try {
        localStorage.setItem(cacheKey, container.innerHTML)
      } catch {}
    }

    const mo = new MutationObserver(() => {
      if (container.childElementCount > 0) {
        loadedRef.current = true
        saveCache()
        setLoading(false)
      }
    })
    mo.observe(container, { childList: true, subtree: true })

    const timeout = window.setTimeout(() => {
      if (!loadedRef.current) {
        const cached = localStorage.getItem(cacheKey)
        if (cached) {
          container.innerHTML = cached
          setLoading(false)
        } else {
          // If nothing at all, stop spinner after a short wait
          setLoading(false)
        }
      }
    }, 4000)

    return () => {
      mo.disconnect()
      clearTimeout(timeout)
    }
  }, [cacheKey, containerId])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {/* Loading status */}
      <div className="mb-6">
        {loading ? (
          <div role="status" aria-live="polite" className="flex items-center justify-center gap-3 py-8">
            <div className="relative">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Loading your library…</span>
          </div>
        ) : null}
      </div>

      <div id={containerId}>
        <noscript>
          <div className="text-sm text-muted-foreground">Enable JavaScript to load Goodreads.</div>
        </noscript>
      </div>
      <Script
        id={`goodreads-widget-${widgetId}`}
        src={scriptSrc}
        strategy="afterInteractive"
        onError={() => {
          const el = document.getElementById(containerId)
          if (!el) return
          const cached = localStorage.getItem(cacheKey)
          if (cached) el.innerHTML = cached
          setLoading(false)
        }}
      />
    </>
  )
}

export default function BooksPage() {
  const { collapsed, setCollapsed } = useSectionPrefs()
  const [currentCount, setCurrentCount] = useState<number | null>(null)
  const [readCount, setReadCount] = useState<number | null>(null)

  const setFromDetails = (key: SectionKey) => (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const open = (e.currentTarget as HTMLDetailsElement).open
    setCollapsed((s) => ({ ...s, [key]: !open })) // collapsed = !open
  }

  // Count books in the "Currently reading" section
  useEffect(() => {
    const countBooks = () => {
      const container = document.getElementById("goodreads-current")
      if (!container) return
      
      const bookElements = container.querySelectorAll(
        ".gr_custom_each_container_1769773692"
      )
      setCurrentCount(bookElements.length)
    }

    // Initial count attempt
    countBooks()

    // Watch for changes in the container
    const container = document.getElementById("goodreads-current")
    if (!container) return

    const observer = new MutationObserver(countBooks)
    observer.observe(container, { childList: true, subtree: true })

    // Also check periodically in case the widget loads later
    const interval = setInterval(countBooks, 1000)
    const timeout = setTimeout(() => clearInterval(interval), 10000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  // Count books in the "Read" section
  useEffect(() => {
    const countBooks = () => {
      const container = document.getElementById("goodreads-read")
      if (!container) return
      
      const bookElements = container.querySelectorAll(
        ".gr_custom_each_container_1769773671"
      )
      setReadCount(bookElements.length)
    }

    // Initial count attempt
    countBooks()

    // Watch for changes in the container
    const container = document.getElementById("goodreads-read")
    if (!container) return

    const observer = new MutationObserver(countBooks)
    observer.observe(container, { childList: true, subtree: true })

    // Also check periodically in case the widget loads later
    const interval = setInterval(countBooks, 1000)
    const timeout = setTimeout(() => clearInterval(interval), 10000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Library
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A curated collection of books I'm reading and have read, pulled live from my Goodreads shelves.
          </p>
        </header>

        {/* Accordion item: Currently Reading (DESC) — on top */}
        <details
          open={!collapsed.current}
          onToggle={setFromDetails("current")}
          className="mb-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        >
          <summary
            className="group flex items-center justify-between cursor-pointer select-none px-6 py-4 bg-gradient-to-r from-primary/5 to-primary/0 hover:from-primary/10 hover:to-primary/5 transition-all [&::-webkit-details-marker]:hidden"
            aria-expanded={!collapsed.current}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <BookMarked className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">Currently Reading</span>
                {currentCount !== null && (
                  <Badge variant="secondary" className="font-medium">
                    {currentCount}
                  </Badge>
                )}
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${collapsed.current ? "" : "rotate-180"}`}
              aria-hidden="true"
            />
          </summary>
          <div className="px-6 pb-6 pt-4">
            {/* Wrapper used by CSS scoping below */}
            <div id="goodreads-current">
              <GoodreadsWidget
                widgetId="1769773692"
                cacheKey="gr-cache-1769773692"
                scriptSrc={
                  "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%20currently-reading" +
                  "?cover_position=left&cover_size=medium&num_books=100&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1769773692&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
                }
                css={`
#goodreads-current #gr_custom_widget_1769773692 { width: 100%; }
#goodreads-current .gr_custom_container_1769773692{
  border:0; padding:0; background:transparent; color:inherit; width:100%;
  display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.5rem;
}
#goodreads-current .gr_custom_each_container_1769773692{
  width:auto; clear:none; margin:0; overflow:visible; padding:20px;
  border:1px solid hsl(var(--border)); border-radius:1rem;
  background: var(--card-bg, hsl(var(--card))); color:hsl(var(--card-foreground));
  display:flex; gap:16px; align-items:flex-start;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
#goodreads-current .gr_custom_each_container_1769773692:hover{
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border-color: hsl(var(--primary) / 0.3);
}
#goodreads-current .gr_custom_book_container_1769773692{
  float:none; width:98px; height:160px; margin:0; overflow:hidden; border-radius:0.625rem; flex-shrink:0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
#goodreads-current .gr_custom_book_container_1769773692 img{ width:98px; height:160px; object-fit:cover; display:block; transition: transform 0.2s ease; }
#goodreads-current .gr_custom_each_container_1769773692:hover .gr_custom_book_container_1769773692 img{ transform: scale(1.05); }
#goodreads-current .gr_custom_title_1769773692 a{ color:inherit; text-decoration:none; font-weight:700; display:block; margin-bottom:6px; word-break:break-word; font-size:0.95rem; line-height:1.4; transition: color 0.2s ease; }
#goodreads-current .gr_custom_each_container_1769773692:hover .gr_custom_title_1769773692 a{ color: hsl(var(--primary)); }
#goodreads-current .gr_custom_author_1769773692{ font-size:0.8125rem; opacity:.75; line-height:1.4; }
#goodreads-current .gr_custom_header_1769773692,
#goodreads-current .gr_custom_tags_1769773692,
#goodreads-current .gr_custom_rating_1769773692{ display:none !important; }
#goodreads-current .gr_custom_each_container_1769773692{ border-bottom:none; }
                `}
              />
            </div>
          </div>
        </details>

        {/* Accordion item: Read (DESC) */}
        <details
          open={!collapsed.read}
          onToggle={setFromDetails("read")}
          className="rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        >
          <summary
            className="group flex items-center justify-between cursor-pointer select-none px-6 py-4 bg-gradient-to-r from-primary/5 to-primary/0 hover:from-primary/10 hover:to-primary/5 transition-all [&::-webkit-details-marker]:hidden"
            aria-expanded={!collapsed.read}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">Read</span>
                {readCount !== null && (
                  <Badge variant="secondary" className="font-medium">
                    {readCount}
                  </Badge>
                )}
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${collapsed.read ? "" : "rotate-180"}`}
              aria-hidden="true"
            />
          </summary>
          <div className="px-6 pb-6 pt-4">
            <div id="goodreads-read">
              <GoodreadsWidget
                widgetId="1769773671"
                cacheKey="gr-cache-1769773671"
                scriptSrc={
                  "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%20read" +
                  "?cover_position=left&cover_size=medium&num_books=100&order=a&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1769773671&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
                }
                css={`
#goodreads-read #gr_custom_widget_1769773671 { width: 100%; }
#goodreads-read .gr_custom_container_1769773671{
  border:0; padding:0; background:transparent; color:inherit; width:100%;
  display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.5rem;
}
#goodreads-read .gr_custom_each_container_1769773671{
  width:auto; clear:none; margin:0; overflow:visible; padding:20px;
  border:1px solid hsl(var(--border)); border-radius:1rem;
  background: var(--card-bg, hsl(var(--card))); color:hsl(var(--card-foreground));
  display:flex; gap:16px; align-items:flex-start;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
#goodreads-read .gr_custom_each_container_1769773671:hover{
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border-color: hsl(var(--primary) / 0.3);
}
#goodreads-read .gr_custom_book_container_1769773671{
  float:none; width:98px; height:160px; margin:0; overflow:hidden; border-radius:0.625rem; flex-shrink:0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
#goodreads-read .gr_custom_book_container_1769773671 img{ width:98px; height:160px; object-fit:cover; display:block; transition: transform 0.2s ease; }
#goodreads-read .gr_custom_each_container_1769773671:hover .gr_custom_book_container_1769773671 img{ transform: scale(1.05); }
#goodreads-read .gr_custom_title_1769773671 a{ color:inherit; text-decoration:none; font-weight:700; display:block; margin-bottom:6px; word-break:break-word; font-size:0.95rem; line-height:1.4; transition: color 0.2s ease; }
#goodreads-read .gr_custom_each_container_1769773671:hover .gr_custom_title_1769773671 a{ color: hsl(var(--primary)); }
#goodreads-read .gr_custom_author_1769773671{ font-size:0.8125rem; opacity:.75; line-height:1.4; }
#goodreads-read .gr_custom_header_1769773671,
#goodreads-read .gr_custom_tags_1769773671,
#goodreads-read .gr_custom_rating_1769773671{ display:none !important; }
#goodreads-read .gr_custom_each_container_1769773671{ border-bottom:none; }
                `}
              />
            </div>
          </div>
        </details>
      </div>
    </main>
  )
}