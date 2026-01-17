import type { Metadata } from "next"
import { WorkforceHero } from "@/components/workforce/workforce-hero"
import { WorkforceCategories } from "@/components/workforce/workforce-categories"
import { WorkforceCTA } from "@/components/workforce/workforce-cta"

export const metadata: Metadata = {
  title: "Workforce Categories | MR Global Craft Solutions",
  description:
    "Explore our skilled workforce categories including welders, fitters, NDT technicians, and industrial support staff available for global deployment.",
}

export default function WorkforcePage() {
  return (
    <>
      <WorkforceHero />
      <WorkforceCategories />
      <WorkforceCTA />
    </>
  )
}
