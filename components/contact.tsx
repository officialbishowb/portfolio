import { Mail, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: "#131319" }}>
      <div className="px-4 md:px-6 mx-auto max-w-5xl">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-label text-[#96DAAF] bg-[#96DAAF]/10 border border-[#96DAAF]/30 px-3 py-1.5 rounded-full inline-block mb-4">CONTACT</span>
          <h2 className="font-headline text-[#e5e1eb] italic" style={{ fontStyle: "italic" }}>Get in touch.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: intro */}
          <div>
            <p
              className="text-[#bfc9c0] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Have a project in mind or just want to say hi? I&apos;m always open to exciting inquiries and new
              opportunities. Reach out through any of these channels.
            </p>
          </div>

          {/* Right: contact rows — each entire row is a link */}
          <div className="divide-y divide-[#404942]/40">

            <a
              href="mailto:contact@officialbishowb.com"
              className="group flex items-center justify-between py-5 transition-colors"
            >
              <div>
                <p className="font-label text-[#bfc9c0] mb-1">EMAIL</p>
                <span
                  className="text-[#e5e1eb] text-sm group-hover:text-[#96DAAF] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
                >
                  contact@officialbishowb.com
                </span>
              </div>
              <Mail className="h-4 w-4 text-[#bfc9c0] group-hover:text-[#96DAAF] transition-colors shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/bishowb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 transition-colors"
            >
              <div>
                <p className="font-label text-[#bfc9c0] mb-1">LINKEDIN</p>
                <span
                  className="text-[#e5e1eb] text-sm group-hover:text-[#96DAAF] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
                >
                  LinkedIn
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-[#bfc9c0] group-hover:text-[#96DAAF] transition-colors shrink-0" />
            </a>

            <a
              href="https://github.com/officialbishowb/portfolio/issues/new?title=Contact+Request&labels=Contact&body=Please+type+your+message+here"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 transition-colors"
            >
              <div>
                <p className="font-label text-[#bfc9c0] mb-1">GITHUB</p>
                <span
                  className="text-[#e5e1eb] text-sm group-hover:text-[#96DAAF] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
                >
                  GitHub
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-[#bfc9c0] group-hover:text-[#96DAAF] transition-colors shrink-0" />
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}
