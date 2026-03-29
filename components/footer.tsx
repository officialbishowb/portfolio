import { Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "#1C1B22" }} className="py-12 mt-16">
      <div className="px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Image
            src="assets/images/bishowb_logo_dark.png"
            alt="Bishow's Logo"
            width={120}
            height={30}
            className="mb-4 md:mb-0"
          />

          {/* Copyright */}
          <p className="font-label text-[#bfc9c0]">
            &copy; {currentYear} officialbishowb.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/officialbishowb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/bishowb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/officialbishowb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfc9c0] hover:text-[#96DAAF] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
