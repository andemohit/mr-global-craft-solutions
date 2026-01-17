import { CheckCircle, Globe, Award, Users, Shield, Briefcase } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "5+ Years of Experience",
    description: "Proven track record in international workforce supply",
  },
  {
    icon: Globe,
    title: "International Workforce Supply",
    description: "Deploying skilled professionals across multiple countries",
  },
  {
    icon: Users,
    title: "Skilled & Certified Manpower",
    description: "Verified credentials and industry certifications",
  },
  {
    icon: Briefcase,
    title: "Industry-Focused Recruitment",
    description: "Specialized in Oil & Gas, Construction, and Engineering",
  },
  {
    icon: Shield,
    title: "Ethical & Transparent Operations",
    description: "Compliance-oriented with clear processes",
  },
  {
    icon: CheckCircle,
    title: "On-Time Mobilization",
    description: "Reliable deployment meeting project timelines",
  },
]

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gold font-medium tracking-wide uppercase text-sm">Who We Are</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Trusted Global Workforce Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            MR Global Craft Solutions specializes in providing reliable, skilled, and certified blue-collar manpower for
            industries across the globe.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-8 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
