import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import SectionHeading from "./section-heading"

// ─── Edit your projects here ─────────────────────────────────────────────────
// `why` is the personal part: one honest sentence on why you built it.
// Leave `link` empty to hide the button.

interface Project {
  name: string
  year: string
  why: ReactNode
  description: string
  stack: string[]
  link?: string
}

const projects: Project[] = [
  {
    name: "Tally",
    year: "2026",
    why: (
      <>
        I wanted my own workout tracker, with the features I need and no subscription. Inspired by{" "}
        <a href="https://www.hevyapp.com" target="_blank" rel="noopener noreferrer" className="ds-link">
          Hevy
        </a>
        .
      </>
    ),
    description: "A gym app to log workouts, sets and progress.",
    stack: ["Flutter", "PocketBase", "Docker"],
  },
  {
    name: "LifeOS",
    year: "2026",
    why: "One place for the things I actually want to keep track of.",
    description:
      "A personal dashboard for my finances and goals. Two modules for now, built to grow. No AI: my (financial) data stays with me.",
    stack: ["SvelteKit", "FastAPI", "SQLite", "No AI"],
  },
  {
    name: "Learnpfad",
    year: "2026",
    why: "Like Duolingo, but I pick the topics myself.",
    description:
      "Turns roadmap.sh and other free resources into AI-assisted lessons and quizzes, with spaced repetition.",
    stack: ["SvelteKit", "SQLite", "Drizzle"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="ds-section">
      <div className="ds-container">
        <SectionHeading
          index="01"
          label="Projects"
          title="Things I build after hours."
          intro={
            <>
              These are side projects. Nobody asked for them; I built them because I needed them, or because I
              wanted to understand how something works. Some are finished, most are{" "}
              <span className="text-foreground">still evolving</span>.
            </>
          }
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
         {projects.map((p, i) => (
  <article key={`${i}-${p.name}`} className="ds-card flex flex-col gap-4 p-7">
              <p className="ds-label">{p.year} · Private · Self-hosted</p>
              <h3 className="ds-h3">{p.name}</h3>
              <p className="text-foreground">
                <span className="ds-label-accent mr-2">Why</span>
                {p.why}
              </p>
              <p>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t, i) => (
                  <span key={i} className="ds-chip">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center gap-2 pt-3 font-medium text-primary hover:text-primary-hover"
                >
                  View project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="mt-10">
          More on{" "}
          <a href="https://github.com/officialbishowb" target="_blank" rel="noopener noreferrer" className="ds-link">
            GitHub
          </a>
          , including the small ones I probably never finished.
        </p>
      </div>
    </section>
  )
}
