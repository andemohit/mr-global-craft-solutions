import { Shield, Users, Globe, Award, Clock, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our operations and relationships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every placement and every client interaction.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships based on trust, transparency, and mutual success.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We embrace diversity and understand the nuances of international workforce deployment.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our commitments with consistent quality and on-time mobilization.",
  },
  {
    icon: Heart,
    title: "Worker Welfare",
    description: "We prioritize the well-being and fair treatment of all workers we deploy.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-gold font-medium tracking-wide uppercase text-sm">Our Values</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Principles That Guide Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our core values define who we are and how we conduct business with clients, workers, and partners around the
            world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
