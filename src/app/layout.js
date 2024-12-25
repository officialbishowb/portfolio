import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bishow - Portfolio",
  description: "Bishow's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
