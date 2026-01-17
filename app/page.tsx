import { HeroSection } from "@/components/home/hero-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { WorkforceCategories } from "@/components/home/workforce-categories"
import { IndustriesSection } from "@/components/home/industries-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { GlobalPresence } from "@/components/home/global-presence"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <WorkforceCategories />
      <IndustriesSection />
      <WhyChooseUs />
      <GlobalPresence />
      <CTASection />
    </>
  )
}
