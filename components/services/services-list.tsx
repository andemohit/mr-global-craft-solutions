import { Users, Briefcase, Clock, Calendar, Wrench, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Skilled Manpower Supply",
    description:
      "We provide highly skilled professionals including welders, fitters, NDT technicians, and specialized industrial workers. All personnel undergo rigorous skill assessment and verification to ensure they meet international industry standards.",
    industries: ["Oil & Gas", "Construction", "Power Plants", "Manufacturing"],
    benefits: [
      "Certified and verified professionals",
      "Trade-tested workforce",
      "Industry-specific expertise",
      "Ready for immediate deployment",
    ],
  },
  {
    icon: Briefcase,
    title: "Semi-Skilled Manpower Supply",
    description:
      "Our semi-skilled workforce includes helpers, assistants, and support staff trained to work alongside skilled professionals. They provide essential support for industrial operations while maintaining safety and quality standards.",
    industries: ["Construction", "Infrastructure", "Manufacturing", "Shipyards"],
    benefits: [
      "Trained support personnel",
      "Safety-conscious workforce",
      "Flexible deployment options",
      "Cost-effective solutions",
    ],
  },
  {
    icon: Clock,
    title: "Project-Based Workforce Deployment",
    description:
      "Tailored workforce solutions for specific project requirements. We mobilize teams quickly to meet project timelines and scale resources based on project phases and milestones.",
    industries: ["Oil & Gas", "Heavy Engineering", "Infrastructure", "Power & Energy"],
    benefits: [
      "Rapid mobilization capability",
      "Scalable team sizes",
      "Project-specific skill matching",
      "Dedicated project coordination",
    ],
  },
  {
    icon: Calendar,
    title: "Long-Term & Short-Term Contracts",
    description:
      "Flexible contract options to suit your operational needs. Whether you need workforce for a few months or several years, we provide reliable staffing with consistent quality and support.",
    industries: ["All Industries"],
    benefits: [
      "Flexible contract durations",
      "Consistent workforce quality",
      "Renewal and extension options",
      "Dedicated account management",
    ],
  },
  {
    icon: Wrench,
    title: "Shutdown & Maintenance Workforce",
    description:
      "Specialized teams for plant shutdowns, turnarounds, and scheduled maintenance activities. We provide experienced personnel who understand the urgency and precision required for maintenance operations.",
    industries: ["Oil & Gas", "Power Plants", "Petrochemical", "Manufacturing"],
    benefits: [
      "Experienced shutdown teams",
      "24/7 availability",
      "Multi-trade capabilities",
      "Rapid response deployment",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Documentation Support",
    description:
      "Complete documentation and compliance support for international workforce deployment. We handle visa processing, trade certifications, medical clearances, and all regulatory requirements.",
    industries: ["All Industries"],
    benefits: [
      "Visa and immigration support",
      "Certification verification",
      "Medical and safety clearances",
      "Regulatory compliance",
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Industries Served</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {service.industries.map((industry) => (
                      <span
                        key={industry}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Benefits</h3>
                  <ul className="mt-3 space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 mt-2 rounded-full bg-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="mt-8 bg-primary hover:bg-navy-light" asChild>
                  <Link href="/contact">Request This Service</Link>
                </Button>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={`/.jpg?height=500&width=700&query=${encodeURIComponent(
                    service.title + " industrial workers professional",
                  )}`}
                  alt={service.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
