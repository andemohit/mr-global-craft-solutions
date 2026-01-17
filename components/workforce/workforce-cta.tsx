import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function WorkforceCTA() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">Need Specific Workforce Categories?</h2>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
          Don't see the exact skill set you need? Contact us to discuss your specific workforce requirements. We can
          source specialized talent for your project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Submit Requirement</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="tel:+1234567890" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Us Directly
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
