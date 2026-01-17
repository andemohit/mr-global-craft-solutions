import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const categories = [
  {
    title: "Fitter",
    image: "/industrial-pipe-fitter-working-with-metal-pipes-pr.jpg",
    description:
      "Experienced pipe fitters, structural fitters, and mechanical fitters for industrial assembly and fabrication work.",
    skills: [
      "Pipe fitting and alignment",
      "Blueprint reading",
      "Structural assembly",
      "Equipment installation",
      "Precision measurement",
    ],
    industries: ["Oil & Gas", "Construction", "Power Plants", "Manufacturing"],
  },
  {
    title: "Welder",
    image: "/professional-welder-welding-sparks-industrial-work.jpg",
    description:
      "Certified welders proficient in TIG, MIG, SMAW, and other welding processes for various industrial applications.",
    skills: ["TIG/GTAW welding", "MIG/GMAW welding", "SMAW/Stick welding", "Pipe welding", "Structural welding"],
    industries: ["Oil & Gas", "Shipyards", "Construction", "Heavy Engineering"],
  },
  {
    title: "NDT Technician",
    image: "/ndt-technician-ultrasonic-testing-industrial-inspe.jpg",
    description:
      "Certified Non-Destructive Testing technicians for quality assurance, inspection, and testing services.",
    skills: [
      "Ultrasonic Testing (UT)",
      "Radiographic Testing (RT)",
      "Magnetic Particle Testing (MT)",
      "Penetrant Testing (PT)",
      "Visual Inspection",
    ],
    industries: ["Oil & Gas", "Aerospace", "Power Plants", "Manufacturing"],
  },
  {
    title: "NDT Assistant",
    image: "/ndt-assistant-helping-with-testing-equipment-indus.jpg",
    description:
      "Supporting NDT operations with equipment preparation, documentation, and assisting certified technicians.",
    skills: [
      "Equipment handling",
      "Documentation support",
      "Surface preparation",
      "Test area setup",
      "Report assistance",
    ],
    industries: ["Oil & Gas", "Construction", "Manufacturing", "Heavy Engineering"],
  },
  {
    title: "Helper",
    image: "/construction-helpers-workers-industrial-site-teamw.jpg",
    description:
      "Trained helpers providing essential support for skilled workers across various industrial operations.",
    skills: ["Material handling", "Tool management", "Site cleanup", "Equipment support", "Safety compliance"],
    industries: ["Construction", "Manufacturing", "Infrastructure", "All Industries"],
  },
  {
    title: "Industrial Support Staff",
    image: "/industrial-rigger-scaffolder-working-height-safety.jpg",
    description: "Specialized support personnel including riggers, scaffolders, and other industrial technicians.",
    skills: [
      "Rigging operations",
      "Scaffolding erection",
      "Load handling",
      "Safety equipment",
      "Height work certified",
    ],
    industries: ["Construction", "Oil & Gas", "Shipyards", "Infrastructure"],
  },
]

export function WorkforceCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{category.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{category.description}</p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Skills</h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Industry Relevance</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {category.industries.map((industry) => (
                      <span
                        key={industry}
                        className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="mt-8 bg-primary hover:bg-navy-light" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Request {category.title}s
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
