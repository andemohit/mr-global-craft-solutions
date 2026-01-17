import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Fitters",
    description: "Pipe fitters, structural fitters, and mechanical fitters for industrial projects",
    image: "/industrial-pipe-fitter-working-on-metal-pipes-prof.jpg",
  },
  {
    title: "Welders",
    description: "Certified welders for TIG, MIG, and arc welding across various industries",
    image: "/professional-welder-with-sparks-industrial-welding.jpg",
  },
  {
    title: "NDT Technicians",
    description: "Non-Destructive Testing specialists for quality assurance and inspection",
    image: "/ndt-technician-using-ultrasonic-testing-equipment-.jpg",
  },
  {
    title: "NDT Assistants",
    description: "Supporting NDT operations with equipment handling and documentation",
    image: "/industrial-quality-control-assistant-inspection-eq.jpg",
  },
  {
    title: "Helpers",
    description: "Skilled helpers and general labor for construction and industrial support",
    image: "/construction-workers-helpers-industrial-site-teamw.jpg",
  },
  {
    title: "Industrial Support Staff",
    description: "Riggers, scaffolders, and specialized industrial support personnel",
    image: "/scaffolding-workers-riggers-industrial-constructio.jpg",
  },
]

export function WorkforceCategories() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-gold font-medium tracking-wide uppercase text-sm">Our Workforce</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core Workforce Categories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Skilled and semi-skilled professionals ready for deployment across global projects.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/workforce" className="flex items-center gap-2">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/workforce"
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Request Manpower
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
