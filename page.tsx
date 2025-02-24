import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StarfieldCanvas } from "./components/starfield"
import { GridOverlay } from "./components/grid-overlay"
import { HeroScene } from "./components/hero-scene"
import { PlanCard } from "./components/plan-card"
import { TestimonialSlider } from "./components/testimonial-slider"
import { Faq } from "./components/faq"
import { ChevronRight, Zap, Bot, Link2, Target, Rocket, MessageSquare } from "lucide-react"
import { Navbar } from "./components/navbar"
import { WhySection } from "./components/why-section"

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1cy7Iq2Hk4Yzqj_dl05oz_Q8BzBchYVgIBw70Lc1fZmr7uXe07gy-i9zg3Z4XDYXnG6mFok--P"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      {/* Background Effects */}
      <StarfieldCanvas />
      <GridOverlay />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-400 to-yellow-300 text-transparent bg-clip-text mb-6">
            Turn Clicks Into Customers with an AI-Powered Website
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a sleek, high-performance business website with built-in chatbots, automation, and smart lead
            capture—fully managed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-yellow-300 text-black hover:opacity-90 transition-opacity"
              onClick={() => window.open(CALENDAR_URL, "_blank")}
            >
              Book a Free Strategy Call
              <ChevronRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sky-400 text-sky-400 hover:bg-sky-400/10"
              onClick={() => window.open(CALENDAR_URL, "_blank")}
            >
              See It In Action
            </Button>
          </div>
        </div>
      </section>

      {/* 3D Scene */}
      <div className="h-[40vh] w-full">
        <HeroScene />
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">More Than Just a Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <Zap className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Blazing Fast Performance</h3>
              <p className="text-gray-400">Built for speed, SEO, and mobile optimization.</p>
            </Card>
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <Bot className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Chatbots</h3>
              <p className="text-gray-400">Automatically engage visitors & capture leads.</p>
            </Card>
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <Link2 className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Webhooks & Integrations</h3>
              <p className="text-gray-400">Connects to CRMs, email tools & automation workflows.</p>
            </Card>
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <Target className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversion-Focused UI</h3>
              <p className="text-gray-400">Designed to maximize leads & sales.</p>
            </Card>
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <Rocket className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Managed Maintenance</h3>
              <p className="text-gray-400">Hosting, security, and performance updates.</p>
            </Card>
            <Card className="p-6 bg-black/50 border-sky-400/30 backdrop-blur">
              <MessageSquare className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Lead Capture</h3>
              <p className="text-gray-400">Automatically collects & organizes leads for better conversions.</p>
            </Card>
          </div>
        </div>
      </section>

      <WhySection />

      {/* Plans Section */}
      <section id="plans" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PlanCard
              title="Growth Plan"
              description="For businesses that need a high-performance website"
              features={[
                "Fast, modern website",
                "Mobile-optimized & SEO-ready",
                "Lead capture form",
                "Secure hosting & automatic updates",
              ]}
            />
            <PlanCard
              title="AI-Powered Plan"
              description="For businesses that want automation & engagement"
              features={[
                "Everything in Growth Plan",
                "AI Chatbot",
                "Webhooks & CRM Integration",
                "Email & SMS automation",
                "Analytics dashboard",
              ]}
              featured
            />
            <PlanCard
              title="Ultimate Plan"
              description="For businesses that want full automation & growth at scale"
              features={[
                "Everything in AI-Powered Plan",
                "Full-scale automation",
                "Deep integrations",
                "Conversion optimization",
                "Premium UI/UX enhancements",
                "Priority support",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Success Stories</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <Faq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Your Website Should Work for You, Not Against You</h2>
          <p className="text-xl text-gray-300 mb-8">
            Most websites just sit there. Ours work 24/7 to grow your business.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-400 to-yellow-300 text-black hover:opacity-90 transition-opacity"
            onClick={() => window.open(CALENDAR_URL, "_blank")}
          >
            Book Your Free Strategy Call
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

