import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Proven 5+ Years Track Record",
    description: "Established reputation for reliable workforce supply with consistent client satisfaction.",
  },
  {
    title: "Global Deployment Capability",
    description: "Expertise in international mobilization with proper documentation and compliance.",
  },
  {
    title: "Skilled & Verified Workforce",
    description: "All workers undergo rigorous skill assessment and credential verification.",
  },
  {
    title: "Compliance-Oriented Process",
    description: "Full adherence to international labor laws and industry regulations.",
  },
  {
    title: "On-Time Mobilization",
    description: "Commitment to meeting project timelines with rapid deployment capabilities.",
  },
  {
    title: "Client-Centric Approach",
    description: "Dedicated support and customized solutions for every client requirement.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-gold font-medium tracking-wide uppercase text-sm">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose MR Global Craft Solutions</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              We are committed to delivering excellence in workforce solutions. Our team ensures every deployment meets
              the highest standards of quality, compliance, and professionalism.
            </p>

            <div className="mt-10 relative aspect-[16/10] rounded-lg overflow-hidden">
              <img
                src="/team-of-industrial-professionals-in-safety-gear-at.jpg"
                alt="Professional industrial team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
                    <CheckCircle className="h-5 w-5 text-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">{reason.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
