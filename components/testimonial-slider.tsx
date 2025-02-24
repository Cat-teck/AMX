"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    text: "My website went from a dead space to a lead-gen powerhouse!",
    author: "James, Local Business Owner",
  },
  {
    text: "The automation saved me 10+ hours a week and increased conversions.",
    author: "Sophia, E-commerce Store Owner",
  },
  {
    text: "Best investment I've made in my business.",
    author: "David, Consultant",
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden h-64">
      <div
        className="transition-transform duration-500 ease-in-out flex h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-black/50 border-sky-400/30 backdrop-blur"
            style={{ left: `${index * 100}%` }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <p className="text-xl mb-4 text-center">{testimonial.text}</p>
            <p className="text-sky-400">{testimonial.author}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

