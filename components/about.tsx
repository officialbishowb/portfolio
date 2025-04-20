import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import Image from "next/image"
export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="aspect-[3/4] max-w-[400px] md:max-w-none bg-muted rounded-2xl overflow-hidden mx-auto">
              <Image src="/assets/images/avatar.png" alt="About Me" className="object-cover" width={500} height={500} />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 md:p-6 rounded-2xl shadow-lg">
              <p className="text-2xl md:text-4xl font-bold">Fullstack Developer</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                My name is Bishow, and I'm a tech enthusiast with a passion for backend development — APIs, databases,
                and scalable systems are my main focus.
              </p>
              <p>
                I'm also keen on cybersecurity, which was also the big reason I got interested in general IT and
                programming.
              </p>
              <p>
                You can check out some of my projects on <Link href="https://github.com/officialbishowb/" className="text-link">GitHub</Link>. They include small !useful projects, I did and probably
                did not finished 😅. Outside of coding, I enjoy staying active and working on my fitness.
              </p>
              <p>Well that's enough about me :)</p>
            </div>
            <Button asChild className="rounded-full">
              <a href="#contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
