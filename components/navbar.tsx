"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cy7Iq2Hk4Yzqj_dl05oz_Q8BzBchYVgIBw70Lc1fZmr7uXe07gy-i9zg3Z4XDYXnG6mFok--P"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-sky-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-yellow-300 text-transparent bg-clip-text"
            >
              AdimediaX
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              Plans
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              FAQs
            </button>
            <Button
              className="bg-gradient-to-r from-sky-400 to-yellow-300 text-black hover:opacity-90 transition-opacity"
              onClick={() => window.open(CALENDAR_URL, "_blank")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-sky-400 transition-colors"
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-sky-400 transition-colors"
                onClick={() => scrollToSection("plans")}
              >
                Plans
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-sky-400 transition-colors"
                onClick={() => scrollToSection("faq")}
              >
                FAQs
              </button>
              <Button
                className="w-full bg-gradient-to-r from-sky-400 to-yellow-300 text-black hover:opacity-90 transition-opacity"
                onClick={() => window.open(CALENDAR_URL, "_blank")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

