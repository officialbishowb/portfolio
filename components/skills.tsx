import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Lock, Server, Terminal } from "lucide-react"

interface Skill {
  title: string
  description: string
  icon: React.ReactNode
  technologies: string[]
}

export default function Skills() {
  const skills: Skill[] = [
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly interfaces.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Bootstrap"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Flask", "REST APIs"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database systems.",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "ORM"],
    },
    {
      title: "Cybersecurity",
      description: "Implementing secure systems and best practices.",
      icon: <Lock className="h-10 w-10 text-primary" />,
      technologies: ["Authentication", "Authorization", "Encryption"],
    },
    {
      title: "DevOps",
      description: "Streamlining development and deployment processes.",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      technologies: ["Docker", "CI/CD", "Linux", "Shell Scripting"],
    },
    {
      title: "API Development",
      description: "Creating scalable and efficient APIs.",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["RESTful APIs",  "Swagger", "API Security"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills & Expertise</h2>
          <p className="text-lg text-foreground/80">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-foreground/80 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-background px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
