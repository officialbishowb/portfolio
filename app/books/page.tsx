"use client"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Book = {
  title: string
  author: string
  year: number
  finished: string // e.g. "2025-02-21" or "reading"
  cover?: string // url or local /public path
}

const books: Book[] = [
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 2024,
    finished: "April 30,2024",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 2024,
    finished: "May 30, 2024",
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 2024,
    finished: "June 30, 2024",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2024,
    finished: "July 31, 2024",
  },
  {
    title: "Never Split the Difference",
    author: "Chris Voss, Tahl Raz",
    year: 2024,
    finished: "August 29, 2024",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    year: 2024,
    finished: "November 18, 2024",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    year: 2024,
    finished: "December 25, 2024",
  },
  {
    title: "12 Rules for Life",
    author: "Jordan Peterson",
    year: 2025,
    finished: "January 25, 2025",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 2025,
    finished: "Feb 17, 2025",
  },
  {
    title: "Das einzige Buch, das du über Finanzen brauchst",
    author: "Thomas Kehl, Mona Linke",
    year: 2025,
    finished: "Feb 28, 2025",
  },
  {
    title: "Feel Good Productivity",
    author: "Ali Abdaal",
    year: 2025,
    finished: "March 31, 2025",
  },
  {
    title: "Menschen lesen",
    author: "Joe Navarro",
    year: 2025,
    finished: "April 27, 2025",
  },
  {
    title: "Crucial Conversations",
    author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
    year: 2025,
    finished: "May 30, 2025",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2025,
    finished: "June 28, 2025",
  },
  {
    title: "The 5 Types of Wealth",
    author: "Sahil Bloom",
    year: 2025,
    finished: "August 18, 2025",
  },
  {
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    year: 2025,
    finished: "September 30, 2025",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    year: 2025,
    finished: "October 5, 2025",
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    year: 2025,
    finished: "reading",
  },
  {
    title: "The 5 AM Club: Own Your Morning, Elevate Your Life",
    author: "Robin Sharma",
    year: 2025,
    finished: "reading",
  },
]

function groupByYear(items: Book[]) {
  const map = new Map<number, Book[]>()
  items.forEach((b) => {
    const arr = map.get(b.year) ?? []
    arr.push(b)
    map.set(b.year, arr)
  })

  const finishedScore = (finished: string) => {
    if (!finished) return 0
    const t = finished.trim()
    if (/reading/i.test(t)) return Number.POSITIVE_INFINITY
    const parsed = Date.parse(t)
    return isNaN(parsed) ? 0 : parsed
  }

  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, list]) => ({
      year,
      books: list.sort((x, y) => finishedScore(y.finished) - finishedScore(x.finished)),
    }))
}

function formatFinished(finished: string) {
  if (!finished) return ""
  const trimmed = finished.trim()
  if (/reading/i.test(trimmed)) return "Reading"

  const parsed = Date.parse(trimmed)
  if (!isNaN(parsed)) {
    return new Date(parsed).toLocaleDateString()
  }

  return trimmed
}

function isReading(finished: string) {
  return !!finished && /reading/i.test(finished.trim())
}

export default function BooksPage() {
  const byYear = groupByYear(books)

  // track collapsed years (true = collapsed/hidden)
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({})

  const toggleYear = (year: number) =>
    setCollapsed((s) => ({ ...s, [year]: !s[year] }))

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-5">Books I've read</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            A curated list of books I finished, organized by year.
          </p>
        </header>

        <section className="space-y-12">
          {byYear.map(({ year, books }) => {
            const isCollapsed = !!collapsed[year]
            return (
              <div key={year}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">{year}</h2>
                  <button
                    type="button"
                    aria-expanded={!isCollapsed}
                    onClick={() => toggleYear(year)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border hover:bg-muted/20 transition"
                  >
                    {isCollapsed ? "Show" : "Hide"}
                  </button>
                </div>

                {!isCollapsed && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {books.map((b) => {
                      const reading = isReading(b.finished)
                      return (
                        <Card
                          key={`${b.title}-${b.finished}`}
                          className={
                            "border-2 transition-all duration-300 " +
                            (reading
                              ? "border-accent hover:border-accent"
                              : "border text-card-foreground")
                          }
                          style={
                            reading
                              ? undefined
                              : { backgroundColor: "var(--card-bg, hsl(var(--card)))" }
                          }
                        >
                          <CardContent className="pt-6">
                            <div className="mb-2">
                              <h3 className="text-xl font-bold mb-1 break-words" title={b.title}>
                                {b.title}
                              </h3>
                              <p className="text-sm text-foreground/70">{b.author}</p>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                              <div className="text-xs text-muted-foreground">
                                {reading ? (
                                  <span
                                    className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                                    style={{
                                      backgroundColor: "var(--accent-color)",
                                      color: "var(--accent-foreground, rgba(0,0,0,0.9))",
                                    }}
                                  >
                                    Reading
                                  </span>
                                ) : (
                                  <span>{formatFinished(b.finished)}</span>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </section>
      </div>
    </main>
  )
}