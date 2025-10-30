"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

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
      }
    })
    mo.observe(container, { childList: true, subtree: true })

    const timeout = window.setTimeout(() => {
      if (!loadedRef.current) {
        const cached = localStorage.getItem(cacheKey)
        if (cached) container.innerHTML = cached
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
        }}
      />
    </>
  )
}

export default function BooksPage() {
  const { collapsed, setCollapsed } = useSectionPrefs()

  const setFromDetails = (key: SectionKey) => (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const open = (e.currentTarget as HTMLDetailsElement).open
    setCollapsed((s) => ({ ...s, [key]: !open })) // collapsed = !open
  }

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-5">Books</h1>
          <p className="mt-2 text-sm text-muted-foreground">Pulled live from my Goodreads shelves.</p>
        </header>

        {/* Accordion item: Currently Reading (DESC) — on top */}
        <details
          open={!collapsed.current}
          onToggle={setFromDetails("current")}
          className="mb-6 rounded-lg border"
        >
          <summary
            className="group flex items-center justify-between cursor-pointer select-none px-4 py-3 [&::-webkit-details-marker]:hidden"
            aria-expanded={!collapsed.current}
          >
            <span className="text-lg font-semibold">Currently reading</span>
            <svg
              className={`h-4 w-4 transition-transform ${collapsed.current ? "" : "rotate-180"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
            </svg>
          </summary>
          <div className="px-4 pb-4 pt-2">
            {/* Wrapper used by CSS scoping below */}
            <div id="goodreads-current">
              <GoodreadsWidget
                widgetId="1761805457"
                cacheKey="gr-cache-1761805457"
                scriptSrc={
                  "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%20currently-reading" +
                  "?cover_position=left&cover_size=small&num_books=100&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_read&widget_bg_color=1C1917&widget_bg_transparent=true&widget_border_width=1&widget_id=1761805457&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
                }
                css={`
#goodreads-current #gr_custom_widget_1761805457 { width: 100%; }
#goodreads-current .gr_custom_container_1761805457{
  border:0; padding:0; background:transparent; color:inherit; width:100%;
  display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1.5rem;
}
#goodreads-current .gr_custom_each_container_1761805457{
  width:auto; clear:none; margin:0; overflow:visible; padding:16px;
  border:1px solid hsl(var(--border)); border-radius:0.75rem;
  background: var(--card-bg, hsl(var(--card))); color:hsl(var(--card-foreground));
  display:flex; gap:12px; align-items:flex-start;
}
#goodreads-current .gr_custom_book_container_1761805457{
  float:none; width:64px; height:96px; margin:0; overflow:hidden; border-radius:.5rem; flex-shrink:0;
}
#goodreads-current .gr_custom_book_container_1761805457 img{ width:64px; height:96px; object-fit:cover; display:block; }
#goodreads-current .gr_custom_title_1761805457 a{ color:inherit; text-decoration:none; font-weight:700; display:block; margin-bottom:4px; word-break:break-word; }
#goodreads-current .gr_custom_author_1761805457{ font-size:12px; opacity:.8; }
#goodreads-current .gr_custom_header_1761805457,
#goodreads-current .gr_custom_tags_1761805457,
#goodreads-current .gr_custom_rating_1761805457{ display:none !important; }
#goodreads-current .gr_custom_each_container_1761805457{ border-bottom:none; }
                `}
              />
            </div>
          </div>
        </details>

        {/* Accordion item: Read (DESC) */}
        <details
          open={!collapsed.read}
          onToggle={setFromDetails("read")}
          className="rounded-lg border"
        >
          <summary
            className="group flex items-center justify-between cursor-pointer select-none px-4 py-3 [&::-webkit-details-marker]:hidden"
            aria-expanded={!collapsed.read}
          >
            <span className="text-lg font-semibold">Read</span>
            <svg
              className={`h-4 w-4 transition-transform ${collapsed.read ? "" : "rotate-180"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
            </svg>
          </summary>
          <div className="px-4 pb-4 pt-2">
            <div id="goodreads-read">
              <GoodreadsWidget
                widgetId="1761805285"
                cacheKey="gr-cache-1761805285"
                scriptSrc={
                  "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%20read" +
                  "?cover_position=left&cover_size=small&num_books=100&order=d&shelf=read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_read&widget_bg_color=1C1917&widget_bg_transparent=true&widget_border_width=1&widget_id=1761805285&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
                }
                css={`
#goodreads-read #gr_custom_widget_1761805285 { width: 100%; }
#goodreads-read .gr_custom_container_1761805285{
  border:0; padding:0; background:transparent; color:inherit; width:100%;
  display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:1.5rem;
}
#goodreads-read .gr_custom_each_container_1761805285{
  width:auto; clear:none; margin:0; overflow:visible; padding:16px;
  border:1px solid hsl(var(--border)); border-radius:0.75rem;
  background: var(--card-bg, hsl(var(--card))); color:hsl(var(--card-foreground));
  display:flex; gap:12px; align-items:flex-start;
}
#goodreads-read .gr_custom_book_container_1761805285{
  float:none; width:64px; height:96px; margin:0; overflow:hidden; border-radius:.5rem; flex-shrink:0;
}
#goodreads-read .gr_custom_book_container_1761805285 img{ width:64px; height:96px; object-fit:cover; display:block; }
#goodreads-read .gr_custom_title_1761805285 a{ color:inherit; text-decoration:none; font-weight:700; display:block; margin-bottom:4px; word-break:break-word; }
#goodreads-read .gr_custom_author_1761805285{ font-size:12px; opacity:.8; }
#goodreads-read .gr_custom_header_1761805285,
#goodreads-read .gr_custom_tags_1761805285,
#goodreads-read .gr_custom_rating_1761805285{ display:none !important; }
#goodreads-read .gr_custom_each_container_1761805285{ border-bottom:none; }
                `}
              />
            </div>
          </div>
        </details>
      </div>
    </main>
  )
}