import SectionHeading from "./section-heading"

interface Skill {
  title: string
  description: string
  technologies: string[]
}

const skills: Skill[] = [
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs.",
    technologies: ["Node.js", "Express", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Designing and optimizing database systems.",
    technologies: ["PostgreSQL", "MySQL", "Prisma", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    description: "Streamlining development and deployment processes.",
    technologies: ["Docker", "CI/CD", "Linux"],
  },
  {
    title: "Full-Stack Solutions",
    description: "Seamless integration of complex backends into modern frontends.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
  },
  {
    title: "Cybersecurity",
    description: "Implementing secure systems and best practices.",
    technologies: ["Authentication", "Authorization", "Encryption"],
  },
  {
    title: "API Development",
    description: "Creating scalable and efficient APIs.",
    technologies: ["RESTful APIs", "Swagger", "API Security"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="ds-section">
      <div className="ds-container">
        <SectionHeading index="03" label="Skills" title="What I bring to the table." />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
          {skills.map((skill, index) => (
            <article key={skill.title} className="ds-card flex flex-col gap-3 p-7">
              <p className="ds-label">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="ds-h3">{skill.title}</h3>
              <p className="mb-2">{skill.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="ds-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
