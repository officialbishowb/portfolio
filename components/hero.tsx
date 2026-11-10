import { ArrowRight } from "lucide-react"

const facts = [
  { key: "role", value: "Full-Stack Developer" },
  { key: "based_in", value: "Vienna" },
  { key: "focus", value: "APIs, databases, infrastructure" },
  { key: "studying", value: "IT Security" },
]

const socials = [
  { name: "GitHub", href: "https://github.com/officialbishowb" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bishowb/" },
  { name: "Instagram", href: "https://instagram.com/officialbishowb" },
]

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="ds-container flex flex-wrap items-end gap-12">
        <div className="flex-[999_1_520px] min-w-0">
          <p className="ds-label-accent mb-8 flex items-center gap-2.5">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for projects
          </p>

          <h1 className="ds-display mb-7">
            Building systems <span className="text-subtle">that scale.</span>
          </h1>

          <p className="ds-lead mb-10 max-w-[34rem]">
            Hi, I&apos;m Bishow. Full-Stack Developer from Vienna, focused on APIs, scalable databases, and
            robust infrastructure.
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <a href="#projects" className="ds-btn ds-btn-primary">
              View projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#contact" className="ds-btn ds-btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ds-label py-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <dl className="ds-card flex-[1_1_320px] min-w-0 px-6 py-2 font-mono text-[0.8125rem] leading-normal">
          {facts.map((f) => (
            <div key={f.key} className="flex justify-between gap-4 border-b border-border py-3.5">
              <dt className="text-subtle">{f.key}</dt>
              <dd className="text-right text-foreground">{f.value}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 py-3.5">
            <dt className="text-subtle">status</dt>
            <dd className="text-right text-primary">available</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
