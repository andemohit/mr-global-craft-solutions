import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/industrial-workers-in-ppe-at-construction-site--we.jpg"
          alt="Industrial workers at construction site"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-wide uppercase text-sm mb-4">International Manpower Solutions</p>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Global Manpower Solutions for Skilled Industrial Workforce
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-2xl">
            Supplying Certified & Experienced Blue-Collar Professionals Worldwide. Your trusted partner for reliable,
            skilled, and compliant workforce deployment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild className="font-semibold">
              <Link href="/services" className="flex items-center gap-2">
                Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/workforce">Workforce Categories</Link>
            </Button>
            <Button size="lg" asChild className="bg-gold text-foreground hover:bg-gold/90 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "500+", label: "Workers Deployed" },
              { value: "15+", label: "Countries Served" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
