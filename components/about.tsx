import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: "#1C1B22" }}>
      <div className="px-4 md:px-6 mx-auto max-w-5xl">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-[#96DAAF] bg-[#96DAAF]/10 border border-[#96DAAF]/30 px-3 py-1.5 rounded-full inline-block mb-4">ABOUT</span>
          <h2 className="font-headline text-[#e5e1eb]">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4 text-[#bfc9c0] text-sm leading-relaxed tracking-wide">
              <p>
                My name is Bishow, and I&apos;m a tech enthusiast and a fullstack developer with a passion for backend
                development (APIs, databases, and scalable systems are my main focus).
              </p>
              <p>
                I am also very interested in cybersecurity, which was the main reason why I became interested in IT and
                programming in general and decided to pursue a degree in IT security, which I started recently.
              </p>
              <p>
                You can check out some of my projects on{" "}
                <Link href="https://github.com/officialbishowb/" className="text-link">
                  GitHub
                </Link>
                . They include small but !useful projects that I did and probably did not finish 😅. Outside of coding,
                I enjoy staying active by going to the gym and{" "}
                <Link href="/books" className="text-link">
                  reading books
                </Link>{" "}
                to expand my knowledge.
              </p>
              <p>Well that&apos;s enough about me :)</p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#404942]/40 text-[#e5e1eb] text-sm hover:border-[#404942]/80 transition-colors mt-2"
              style={{ minHeight: "44px" }}
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Avatar */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-4">
            <div className="relative">
              <div className="w-64 md:w-72 aspect-[3/4] rounded-xl overflow-hidden border border-[#404942]/40">
                <Image
                  src="/assets/images/avatar.png"
                  alt="Bishow B."
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-6">
                <span
                  className="font-label text-[#96DAAF] border border-[#96DAAF]/30 px-3 py-2 rounded-xl bg-[#131319] block"
                >
                  FULLSTACK DEVELOPER
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
