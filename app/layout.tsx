import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Loading from "./loading"
import { cn } from "@/lib/utils"
import { Suspense } from "react"

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
      
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
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
