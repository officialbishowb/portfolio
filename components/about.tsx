import Link from "next/link"
import Image from "next/image"
import SectionHeading from "./section-heading"

export default function About() {
  return (
    <section id="about" className="ds-section">
      <div className="ds-container flex flex-wrap items-start gap-16">
        <div className="flex-[999_1_520px] min-w-0">
          <SectionHeading index="02" label="About" title="About me." />

          <div className="ds-body-lg max-w-[42rem] space-y-5">
            <p>
              My name is Bishow, and I&apos;m a tech enthusiast and a fullstack developer with a passion for the
              backend - APIs, databases, and the system design decisions behind scalable applications are what I
              enjoy most.
            </p>
            <p>
              Cybersecurity was the reason I became interested in IT and programming in the first place, and it is
              still very much a passion of mine, so much so that I am pursuing a degree in IT security.
            </p>
            <p>
              You can check out some of my projects on{" "}
              <Link href="https://github.com/officialbishowb/" className="ds-link">
                GitHub
              </Link>
              . They include small but !useful projects that I did and probably did not finish. Outside of coding,
              I enjoy staying active by going to the gym and{" "}
              <Link href="/books" className="ds-link">
                reading books
              </Link>{" "}
              to expand my knowledge.
            </p>
          </div>

          <a href="#contact" className="ds-btn ds-btn-secondary mt-9">
            Get in touch
          </a>
        </div>

        <figure className="relative m-0 w-full max-w-[340px] flex-[1_1_280px]">
          <div className="ds-card aspect-[3/4] overflow-hidden">
            <Image
              src="/assets/images/avatar.png"
              alt="Portrait of Bishow"
              width={680}
              height={907}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="ds-label-accent absolute -bottom-4 left-4 rounded-md border border-border bg-background px-3 py-2">
            Software developer · Vienna
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
