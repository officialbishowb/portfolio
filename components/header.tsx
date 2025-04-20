"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "https://blog.officialbishowb.com" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-xl font-bold">
          <Image 
            src={theme === "dark" ? "/assets/images/bishowb_logo_dark.png" : "/assets/images/bishowb_logo_light.png"} 
            alt="Logo" 
            width={150} 
            height={150}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center">
              {link.href.startsWith("https") ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <Link href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.href.startsWith("https") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
