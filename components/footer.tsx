'use client'
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <Link href="/" className="text-xl font-bold">
          {mounted && (
            <Image 
              src={theme === "dark" ? "/assets/images/bishowb_logo_dark.png" : "/assets/images/bishowb_logo_light.png"} 
              alt="Logo" 
              width={150} 
              height={150}
              className="h-8 w-auto"
            />
          )}
             </Link>
           
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/officialbishowb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/bishowb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com/officialbishowb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-foreground/70">
          <p>© {currentYear} official<span className="text-primary">bishowb.</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
