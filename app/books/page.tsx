"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { BookOpen, BookMarked, ChevronDown } from "lucide-react"

// ─── Config ───────────────────────────────────────────────────────────────────
// To add a new year: push a new entry (newest first) and you're done.

const CURRENTLY_READING_SHELF = {
  widgetId: "1775202260",
  scriptSrc:
    "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%20currently-reading" +
    "?cover_position=left&cover_size=medium&num_books=100&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1775202260&widget_text_color=000000&widget_title_size=medium&widget_width=medium",
}

const YEAR_SHELVES = [
  {
    year: 2026,
    widgetId: "1775202228",
    scriptSrc:
      "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%202026-read" +
      "?cover_position=left&cover_size=medium&num_books=100&order=a&shelf=2026-read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1775202228&widget_text_color=000000&widget_title_size=medium&widget_width=medium",
  },
  {
    year: 2025,
    widgetId: "1775202106",
    scriptSrc:
      "https://www.goodreads.com/review/custom_widget/194986299.Bishow's%20bookshelf:%202025-read" +
      "?cover_position=left&cover_size=medium&num_books=100&order=a&shelf=2025-read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1775202106&widget_text_color=000000&widget_title_size=medium&widget_width=medium",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeShelfCSS(containerId: string, widgetId: string): string {
  return `
#${containerId} #gr_custom_widget_${widgetId} { width: 100%; }
#${containerId} .gr_custom_container_${widgetId}{
  border:0; padding:0; background:transparent; color:inherit; width:100%;
  display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.5rem;
}
#${containerId} .gr_custom_each_container_${widgetId}{
  width:auto; clear:none; margin:0; overflow:visible; padding:20px;
  border:1px solid hsl(var(--border)); border-radius:var(--radius);
  background: var(--card-bg, hsl(var(--card))); color:hsl(var(--card-foreground));
  display:flex; gap:16px; align-items:flex-start;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1);
}
#${containerId} .gr_custom_each_container_${widgetId}:hover{
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);
  border-color: hsl(var(--primary) / 0.3);
}
#${containerId} .gr_custom_book_container_${widgetId}{
  float:none; width:98px; height:160px; margin:0; overflow:hidden; border-radius:var(--radius-sm); flex-shrink:0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);
}
#${containerId} .gr_custom_book_container_${widgetId} img{
  width:98px; height:160px; object-fit:cover; display:block; transition: transform 0.2s ease;
}
#${containerId} .gr_custom_each_container_${widgetId}:hover .gr_custom_book_container_${widgetId} img{
  transform: scale(1.05);
}
#${containerId} .gr_custom_title_${widgetId} a{
  color:inherit; text-decoration:none; font-weight:700; display:block; margin-bottom:6px;
  word-break:break-word; font-size:0.95rem; line-height:1.4; transition: color 0.2s ease;
}
#${containerId} .gr_custom_each_container_${widgetId}:hover .gr_custom_title_${widgetId} a{
  color: hsl(var(--primary));
}
#${containerId} .gr_custom_author_${widgetId}{ font-size:0.8125rem; opacity:.75; line-height:1.4; }
#${containerId} .gr_custom_header_${widgetId},
#${containerId} .gr_custom_tags_${widgetId},
#${containerId} .gr_custom_rating_${widgetId}{ display:none !important; }
#${containerId} .gr_custom_each_container_${widgetId}{ border-bottom:none; }
  `
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

type SectionKey = string

function useSectionPrefs(keys: string[]) {
  const defaultState = Object.fromEntries(keys.map((k) => [k, true]))
  const [collapsed, setCollapsed] = useState<Record<SectionKey, boolean>>(defaultState)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("books-sections-collapsed")
      if (raw) setCollapsed((prev) => ({ ...prev, ...JSON.parse(raw) }))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("books-sections-collapsed", JSON.stringify(collapsed))
    } catch {}
  }, [collapsed])

  return { collapsed, setCollapsed }
}

function useBookCount(wrapperId: string, widgetId: string): number | null {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const selector = `.gr_custom_each_container_${widgetId}`

    const countBooks = () => {
      const container = document.getElementById(wrapperId)
      if (!container) return
      setCount(container.querySelectorAll(selector).length)
    }

    countBooks()

    const container = document.getElementById(wrapperId)
    if (!container) return

    const observer = new MutationObserver(countBooks)
    observer.observe(container, { childList: true, subtree: true })

    const interval = setInterval(countBooks, 1000)
    const timeout = setTimeout(() => clearInterval(interval), 10000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [wrapperId, widgetId])

  return count
}

// ─── GoodreadsWidget ──────────────────────────────────────────────────────────

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
      <div className="mb-6">
        {loading ? (
          <div role="status" aria-live="polite" className="flex items-center justify-center gap-3 py-8">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
            <span className="ds-label">Loading library…</span>
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

// ─── ShelfSection ─────────────────────────────────────────────────────────────

function ShelfSection({
  title,
  icon,
  widgetId,
  scriptSrc,
  wrapperId,
  collapsed,
  onToggle,
  isLast,
}: {
  title: string
  icon: React.ReactNode
  widgetId: string
  scriptSrc: string
  wrapperId: string
  collapsed: boolean
  onToggle: (e: React.SyntheticEvent<HTMLDetailsElement>) => void
  isLast: boolean
}) {
  const bookCount = useBookCount(wrapperId, widgetId)
  const css = makeShelfCSS(wrapperId, widgetId)

  return (
    <details
      open={!collapsed}
      onToggle={onToggle}
      className={`${isLast ? "" : "mb-6"} ds-card overflow-hidden`}
    >
      <summary
        className="group flex min-h-16 items-center justify-between cursor-pointer select-none px-6 py-4 hover:bg-secondary transition-colors [&::-webkit-details-marker]:hidden"
        aria-expanded={!collapsed}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-primary/10">
            {icon}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-foreground">
              {title}
            </span>
            {bookCount !== null && bookCount > 0 && (
              <span className="ds-chip border-primary/40 text-primary">
                {bookCount}
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${collapsed ? "" : "rotate-180"}`}
          aria-hidden="true"
        />
      </summary>
      <div className="px-6 pb-6 pt-4">
        <div id={wrapperId}>
          <GoodreadsWidget
            widgetId={widgetId}
            cacheKey={`gr-cache-${widgetId}`}
            scriptSrc={scriptSrc}
            css={css}
          />
        </div>
      </div>
    </details>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BooksPage() {
  const allKeys = ["current", ...YEAR_SHELVES.map((s) => `year-${s.year}`)]
  const { collapsed, setCollapsed } = useSectionPrefs(allKeys)

  const makeToggle = (key: string) => (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const open = (e.currentTarget as HTMLDetailsElement).open
    setCollapsed((s) => ({ ...s, [key]: !open }))
  }

  const allSections = [
    {
      key: "current",
      title: "Currently Reading",
      icon: <BookMarked className="w-5 h-5 text-primary" />,
      wrapperId: "goodreads-current",
      widgetId: CURRENTLY_READING_SHELF.widgetId,
      scriptSrc: CURRENTLY_READING_SHELF.scriptSrc,
    },
    ...YEAR_SHELVES.map((shelf) => ({
      key: `year-${shelf.year}`,
      title: `${shelf.year} Reads`,
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      wrapperId: `goodreads-year-${shelf.year}`,
      widgetId: shelf.widgetId,
      scriptSrc: shelf.scriptSrc,
    })),
  ]

  return (
    <main className="py-20 md:py-28">
      <div className="ds-container">
        <header className="mb-12">
          <p className="ds-label-accent mb-4">Books</p>
          <h1 className="ds-h1 mb-4">
            My Library
          </h1>
          <p className="ds-body-lg max-w-2xl">
            Reading is how I learn outside of code. These are the books I&apos;m reading and have read, pulled live from my Goodreads shelves.
          </p>
        </header>

        {allSections.map((section, i) => (
          <ShelfSection
            key={section.key}
            title={section.title}
            icon={section.icon}
            widgetId={section.widgetId}
            scriptSrc={section.scriptSrc}
            wrapperId={section.wrapperId}
            collapsed={collapsed[section.key] ?? false}
            onToggle={makeToggle(section.key)}
            isLast={i === allSections.length - 1}
          />
        ))}
      </div>
    </main>
  )
}
