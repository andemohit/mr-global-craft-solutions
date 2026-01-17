import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | MR Global Craft Solutions",
  description:
    "Get in touch with MR Global Craft Solutions for your manpower requirements. Submit an inquiry or contact us directly via phone, email, or WhatsApp.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
