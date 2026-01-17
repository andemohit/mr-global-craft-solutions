import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Need a Custom Workforce Solution?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Every project is unique. Contact us to discuss your specific requirements and let us create a tailored
          manpower solution for your needs.
        </p>
        <Button size="lg" className="mt-8 bg-primary hover:bg-navy-light" asChild>
          <Link href="/contact" className="flex items-center gap-2">
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
