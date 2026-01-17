import { Factory, Building2, Zap, Anchor, Cog, HardHat } from "lucide-react"

const industries = [
  {
    icon: Factory,
    name: "Oil & Gas",
    description: "Upstream, midstream, and downstream operations",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Commercial and industrial construction projects",
  },
  {
    icon: HardHat,
    name: "Infrastructure",
    description: "Roads, bridges, and public infrastructure",
  },
  {
    icon: Zap,
    name: "Power & Energy",
    description: "Power plants and energy facilities",
  },
  {
    icon: Cog,
    name: "Manufacturing",
    description: "Industrial manufacturing and fabrication",
  },
  {
    icon: Anchor,
    name: "Shipyards",
    description: "Maritime construction and repair",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gold font-medium tracking-wide uppercase text-sm">Industries</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Providing specialized workforce solutions across key industrial sectors worldwide.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{industry.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
