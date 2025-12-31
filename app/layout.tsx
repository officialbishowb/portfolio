import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import SpecialEffects from "@/components/special-effects/special-effects"
import Loading from "./loading"
import { cn } from "@/lib/utils"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Bishow",
  description: "Personal portfolio showcasing my projects and skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
      {/* Privacy-friendly analytics by Plausible */}
        <Script
          async
          src="https://plausible.io/js/pa-k0IybX3RWkEpqSLDZSEaH.js"
          strategy="afterInteractive"
        />
        <Script
          id="plausible-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}}; plausible.init()`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <SpecialEffects />
          <Suspense fallback={<Loading />}>
            <main className="min-h-screen">{children}</main>
          </Suspense>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
