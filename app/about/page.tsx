import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"

export const metadata: Metadata = {
  title: "About Us | MR Global Craft Solutions",
  description:
    "Learn about MR Global Craft Solutions - 5+ years of excellence in international manpower supply with ethical recruitment practices and global deployment capabilities.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
    </>
  )
}
