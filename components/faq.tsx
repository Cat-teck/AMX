"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to set up my website?",
    answer: "Typically 7-14 days, depending on the complexity of your requirements.",
  },
  {
    question: "Is maintenance included?",
    answer: "Yes! We handle all hosting, security, and performance updates.",
  },
  {
    question: "Do you integrate with CRMs?",
    answer: "Absolutely. We support HubSpot, Zapier, GoHighLevel, and more.",
  },
  {
    question: "What if I need changes later?",
    answer: "All plans include updates & optimizations as part of our service.",
  },
  {
    question: "Why should I choose this over a regular website?",
    answer:
      "Because regular websites don't grow your business—this one does. We include AI-powered features, automation, and continuous optimization to actively generate and convert leads.",
  },
]

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

