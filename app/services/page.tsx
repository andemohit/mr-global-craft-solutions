import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Our Services | MR Global Craft Solutions",
  description:
    "Comprehensive manpower supply services including skilled workforce deployment, project-based staffing, and long-term contracts for industrial sectors worldwide.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  )
}
