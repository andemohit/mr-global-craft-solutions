import { Globe } from "lucide-react"

export function GlobalPresence() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src="/world-map-with-connection-lines-global-network-bus.jpg" alt="Global presence map" className="rounded-lg" />
          </div>

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Global Presence & Vision
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Serving clients across multiple countries with a vision to be the most trusted international manpower
              partner for industrial projects worldwide.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-gold" />
                <p className="text-foreground">
                  <span className="font-semibold">Multi-Country Operations:</span>{" "}
                  <span className="text-muted-foreground">
                    Active workforce deployment across Asia, Middle East, Africa, and Europe
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-gold" />
                <p className="text-foreground">
                  <span className="font-semibold">Long-Term Partnerships:</span>{" "}
                  <span className="text-muted-foreground">
                    Building sustainable relationships with EPC contractors and industrial clients
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-gold" />
                <p className="text-foreground">
                  <span className="font-semibold">Continuous Growth:</span>{" "}
                  <span className="text-muted-foreground">
                    Expanding our network to serve emerging markets and new industries
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
