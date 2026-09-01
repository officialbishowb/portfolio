import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "zeitt.io",
      description: "The auto-scheduler for people juggling work, study, and side projects.",
      tags: ["Next.js", "NestJS", "TypeScript"],
      url: "https://zeitt.io",
      label: "In Progress",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32" style={{ backgroundColor: "#1C1B22" }}>
      <div className="px-4 md:px-6 mx-auto max-w-5xl">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-[#96DAAF] bg-[#96DAAF]/10 border border-[#96DAAF]/30 px-3 py-1.5 rounded-full inline-block mb-4">PROJECTS</span>
          <h2 className="font-headline text-[#e5e1eb]">Selected Works.</h2>
        </div>

        {/* Horizontal list */}
        <div className="divide-y divide-[#404942]/40">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-8 px-4 -mx-4 rounded-xl hover:bg-[#201f26] transition-colors"
            >
              {/* Project name */}
              <div className="flex items-center gap-2 md:w-48 shrink-0">
                <h3
                  className="text-[#e5e1eb] font-semibold text-base group-hover:text-[#96DAAF] transition-colors"
                >
                  {project.title}
                </h3>
                {project.label && (
                  <span className="font-label text-[#E8B65A] bg-[#E8B65A]/10 border border-[#E8B65A]/30 px-2 py-0.5 rounded-full shrink-0">
                    {project.label}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-[#bfc9c0] text-sm leading-relaxed flex-1"
              >
                {project.description}
              </p>

              {/* Tags + arrow */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-label text-[#bfc9c0] border border-[#404942]/40 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#bfc9c0] group-hover:text-[#96DAAF] transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
