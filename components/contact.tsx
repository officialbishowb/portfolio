import { ArrowUpRight } from "lucide-react"

const channels = [
  { label: "Email", value: "contact@officialbishowb.com", href: "mailto:contact@officialbishowb.com" },
  { label: "LinkedIn", value: "in/bishowb", href: "https://www.linkedin.com/in/bishowb/" },
  {
    label: "GitHub",
    value: "Open an issue",
    href: "https://github.com/officialbishowb/portfolio/issues/new?title=Contact+Request&labels=Contact&body=Please+type+your+message+here",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="ds-section">
      <div className="ds-container flex flex-wrap items-start gap-x-16 gap-y-12">
        <div className="flex-[1_1_360px] min-w-0">
          <p className="ds-label-accent mb-4">04 / Contact</p>
          <h2 className="ds-h1 mb-6">Get in touch.</h2>
          <p className="ds-body-lg max-w-[28rem]">
            Have a project in mind or just want to say hi? I&apos;m always open to exciting inquiries and new
            opportunities.
          </p>
        </div>

        <div className="flex flex-[1_1_420px] min-w-0 flex-col border-t border-border">
          {channels.map((c) => {
            const external = c.href.startsWith("http")
            return (
              <a
                key={c.label}
                href={c.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 border-b border-border py-5 text-foreground"
              >
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="ds-label">{c.label}</span>
                  <span className="text-lg font-medium [overflow-wrap:anywhere] group-hover:text-primary transition-colors">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-subtle group-hover:text-primary transition-colors"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
