import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PlanCardProps {
  title: string
  description: string
  features: string[]
  featured?: boolean
}

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cy7Iq2Hk4Yzqj_dl05oz_Q8BzBchYVgIBw70Lc1fZmr7uXe07gy-i9zg3Z4XDYXnG6mFok--P"

export function PlanCard({ title, description, features, featured }: PlanCardProps) {
  return (
    <Card
      className={`p-6 h-full flex flex-col ${
        featured ? "bg-gradient-to-b from-sky-400/10 to-black border-sky-400" : "bg-black/50 border-sky-400/30"
      } backdrop-blur`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-sky-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          featured
            ? "bg-gradient-to-r from-sky-400 to-yellow-300 text-black hover:opacity-90"
            : "bg-sky-400 hover:bg-sky-400/90 text-black"
        }`}
        onClick={() => window.open(CALENDAR_URL, "_blank")}
      >
        Book a Call
      </Button>
    </Card>
  )
}

