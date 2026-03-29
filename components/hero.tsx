import Image from "next/image"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="px-4 md:px-6 mx-auto max-w-5xl">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[#404942]/40">
              <Image
                src="/assets/images/avatar.png"
                alt="Bishow B."
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Status badge */}
          <div className="flex justify-center">
            <span className="font-label text-[#96DAAF] border border-[#96DAAF]/30 px-4 py-1.5 rounded-full">
              ● AVAILABLE FOR PROJECTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#e5e1eb]">
            Building systems<br />
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#bfc9c0] text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Full-Stack Developer from Vienna. Focused on APIs, scalable databases, and robust infrastructure.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-2">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#96DAAF] text-[#131319] font-medium text-sm hover:bg-[#b1f7ca] transition-colors"
              style={{ minHeight: "44px" }}
            >
              About Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-2">
            <a
              href="https://github.com/officialbishowb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bishowb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/officialbishowb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors p-2"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
