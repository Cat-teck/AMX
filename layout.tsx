import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "next/font/google"
import "./globals.css"

const geistMono = GeistMono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "High-Performance Business Websites | AI-Powered & Fully Automated",
  description:
    "Get a sleek, high-performance business website with built-in chatbots, automation, and smart lead capture—fully managed for you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={geistMono.className}>{children}</body>
    </html>
  )
}

