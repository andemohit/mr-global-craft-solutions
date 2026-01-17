import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "123 Business District, Industrial Zone, City 12345",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@mrglobalcraft.com",
    href: "mailto:info@mrglobalcraft.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM (GMT)",
    href: null,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
        <p className="mt-2 text-muted-foreground">Reach out to us through any of the following channels.</p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
              <detail.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
              {detail.href ? (
                <a href={detail.href} className="text-foreground hover:text-primary transition-colors">
                  {detail.value}
                </a>
              ) : (
                <p className="text-foreground">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-6 rounded-xl bg-secondary">
        <h3 className="font-semibold text-foreground">Quick Actions</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Need an immediate response? Use these quick contact options.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <Button className="w-full bg-primary hover:bg-navy-light" asChild>
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-full border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            asChild
          >
            <a
              href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20manpower%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Chat
            </a>
          </Button>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Office location map"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
