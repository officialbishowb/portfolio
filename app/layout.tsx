import React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Loading from "./loading"
import { cn } from "@/lib/utils"
import { Suspense } from "react"
import Script from "next/script"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

const chatbrands = localFont({
  src: [
    {
      path: "../public/assets/fonts/league_spartan/LeagueSpartan-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/league_spartan/LeagueSpartan-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/league_spartan/LeagueSpartan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chatbrands",
  display: "swap",
})

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
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          instrumentSerif.variable,
          plusJakartaSans.variable,
          chatbrands.variable,
          plusJakartaSans.className,
        )}
      >
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
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
