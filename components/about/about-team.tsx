import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutTeam() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Our team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-gold font-medium tracking-wide uppercase text-sm">Our Team</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Dedicated Professionals at Your Service
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our team comprises experienced recruitment professionals, industry experts, and dedicated support staff
              who work tirelessly to deliver the best workforce solutions. With deep knowledge of international labor
              markets and industrial requirements, we ensure every placement is a success.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From initial consultation to post-deployment support, our team is committed to providing exceptional
              service at every step of the engagement.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Combined Experience</p>
              </div>
            </div>

            <Button className="mt-8 bg-primary hover:bg-navy-light" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
