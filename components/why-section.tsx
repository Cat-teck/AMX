import { Card } from "@/components/ui/card"
import { X, Check } from "lucide-react"

export function WhySection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Why Small Businesses Need High-Performance Websites
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <Card className="p-6 bg-black/50 border-red-400/30 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-red-400">🚨</span> The Problem
            </h3>
            <ul className="space-y-4">
              {[
                "Most websites don't convert – they just sit there.",
                "No automation – potential customers visit, leave, and never return.",
                "No follow-ups – businesses lose revenue due to poor engagement.",
              ].map((problem, index) => (
                <li key={index} className="flex items-center gap-2">
                  <X className="text-red-400 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Solutions */}
          <Card className="p-6 bg-black/50 border-green-400/30 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-green-400">✅</span> The Solution
            </h3>
            <ul className="space-y-4">
              {[
                "An automated, AI-driven website that captures & nurtures leads.",
                "Integrated chatbots & smart follow-ups – no lead gets left behind.",
                "Sleek design that builds trust and converts visitors into paying customers.",
              ].map((solution, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-400 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

