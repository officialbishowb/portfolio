interface Skill {
  title: string
  description: string
  technologies: string[]
}

export default function Skills() {
  const skills: Skill[] = [
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      technologies: ["Node.js", "Express", "Flask", "REST APIs","Laravel","..."],
    },
    {
      title: "Databases",
      description: "Designing and optimizing database systems.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "ORM","Redis","..."],
    },
    {
      title: "DevOps & Cloud",
      description: "Streamlining development and deployment processes.",
      technologies: ["Docker", "CI/CD", "Linux", "..."],
    },
    {
      title: "Full-Stack Solutions",
      description: "Seamless integration of complex backends into modern frontends.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "..."],
    },
    {
      title: "Cybersecurity",
      description: "Implementing secure systems and best practices.",
      technologies: ["Authentication", "Authorization", "Encryption"],
    },
    {
      title: "API Development",
      description: "Creating scalable and efficient APIs.",
      technologies: ["RESTful APIs", "Swagger", "API Security", "..."],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32" style={{ backgroundColor: "#131319" }}>
      <div className="px-4 md:px-6 mx-auto max-w-5xl">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-[#96DAAF] bg-[#96DAAF]/10 border border-[#96DAAF]/30 px-3 py-1.5 rounded-full inline-block mb-4">SKILLS</span>
          <h2 className="font-headline text-[#e5e1eb]">What I bring to the table.</h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-xl p-6 space-y-3"
              style={{ backgroundColor: "#201f26" }}
            >
              <p className="font-label text-[#96DAAF]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className="text-[#e5e1eb] font-semibold text-base tracking-wider"
              >
                {skill.title}
              </h3>
              <p
                className="text-[#bfc9c0] text-sm leading-relaxed"
              >
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="font-label text-[#bfc9c0] border border-[#404942]/40 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
