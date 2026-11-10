import React from "react"
import type { Metadata } from "next"
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/400-italic.css"
import "@fontsource/ibm-plex-sans/500.css"
import "@fontsource/ibm-plex-sans/600.css"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Loading from "./loading"
import { Suspense } from "react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Bishow B. | Full-Stack Developer",
  description:
    "Full-Stack Developer from Vienna. Focused on APIs, scalable databases, and robust infrastructure.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
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
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="flex-1">{children}</main>
        </Suspense>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
