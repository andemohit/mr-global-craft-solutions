import { Target, Eye } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MR Global Craft Solutions was founded with a clear mission: to bridge the gap between skilled industrial
              workers and global opportunities. Over the past 5+ years, we have grown from a small recruitment firm to a
              trusted international manpower partner serving clients across multiple countries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our journey has been defined by our commitment to quality, ethical practices, and client satisfaction. We
              understand the critical importance of having the right workforce for industrial projects, and we take
              pride in delivering professionals who exceed expectations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we work with leading EPC contractors, oil & gas companies, construction firms, and industrial
              enterprises worldwide, providing them with certified and experienced blue-collar professionals ready for
              immediate deployment.
            </p>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="MR Global Craft Solutions team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="p-8 rounded-xl bg-primary text-primary-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              To be the most trusted and preferred international manpower partner, recognized for delivering excellence
              in workforce solutions across global industries. We envision a world where skilled workers find meaningful
              opportunities and businesses find reliable talent without barriers.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-secondary">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To provide reliable, skilled, and certified manpower to industrial clients worldwide through ethical
              recruitment practices, rigorous quality standards, and a commitment to building long-term partnerships
              that create value for all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
