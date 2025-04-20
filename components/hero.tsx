import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center md:text-left">
              Hi, I'm <span className="text-primary">Bishow</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-md text-center md:text-left">
              Backend Developer specializing in APIs, databases, and scalable systems with a passion for cybersecurity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <a href="#about">
                  About Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* <Button variant="outline" size="lg" className="rounded-full">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button> */}
            </div>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://github.com/officialbishowb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bishowb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/officialbishowb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulsate"></div>
            <div className="absolute inset-4 bg-primary/30 rounded-full animate-pulsate [animation-delay:1s]"></div>
            <div className="absolute inset-8 bg-primary/40 rounded-full animate-pulsate [animation-delay:2s]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
