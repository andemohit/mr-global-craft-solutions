import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 sm:px-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Discuss Your Workforce Needs?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Let us help you find the right skilled professionals for your next project. Contact our team today for a
              consultation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="font-semibold">
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="tel:+1234567890" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/10" />
        </div>
      </div>
    </section>
  )
}
