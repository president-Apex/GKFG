import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { CheckCircle } from "lucide-react";
import { allStates } from "@/data/states";

const stateDetails: Record<string, { cities: string[]; services: string[] }> = {
  missouri: {
    cities: ["Kansas City", "Liberty", "Lee's Summit"],
    services: ["LLC + Mobile Notary", "RON", "Registered Agent"],
  },
  kansas: {
    cities: ["Overland Park", "Shawnee", "Olathe"],
    services: ["LLC + Mobile Notary", "RON", "Loan Signing"],
  },
  arizona: {
    cities: ["Phoenix", "Scottsdale", "Chandler"],
    services: ["LLC Formation", "RON", "Mobile Coming 2026"],
  },
  tennessee: {
    cities: ["Nashville", "Franklin", "Murfreesboro"],
    services: ["LLC Formation", "RON"],
  },
  "north-carolina": {
    cities: ["Charlotte", "Concord", "Huntersville"],
    services: ["LLC Formation", "RON"],
  },
  georgia: {
    cities: ["Atlanta", "Alpharetta", "Marietta"],
    services: ["LLC Formation", "RON (via MO commission)"],
  },
  montana: {
    cities: ["Missoula", "Bozeman", "Billings"],
    services: ["LLC Formation", "RON", "RIN — nationwide"],
  },
};

export default function StatesHub() {
  return (
    <>
      <SEO
        title="Business Formation & Notary Services — 7 States | Gantt Key Formation Group"
        description="GKFG serves entrepreneurs in Missouri, Kansas, Arizona, Tennessee, North Carolina, Georgia, and Montana with LLC formation, EIN assistance, notary services, and more."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Where We Serve</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            7 States. One Team. One Standard of Excellence.
          </h1>
          <p className="text-primary-foreground/65 text-lg leading-relaxed">
            From Kansas City to Phoenix, Nashville to Atlanta — GKFG delivers founder-led formation and notary services you can trust.
          </p>
        </div>
      </section>

      {/* State Cards Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allStates.map((state) => {
              const details = stateDetails[state.slug];
              return (
                <Link key={state.slug} href={`/states/${state.slug}`}>
                  <div className="group rounded-2xl border border-border hover:border-secondary/50 hover:shadow-md transition-all cursor-pointer p-6 h-full flex flex-col bg-white">
                    {/* State accent dot */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: state.accentColor }} />
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{state.region}</p>
                    </div>

                    <h2 className="font-serif text-xl font-bold mb-3 group-hover:text-secondary transition-colors" style={{ color: "#1a2f4e" }}>
                      {state.name}
                    </h2>

                    {/* Cities */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {details?.cities.map((city) => (
                        <span key={city} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {city}
                        </span>
                      ))}
                    </div>

                    {/* Services */}
                    <ul className="space-y-1.5 flex-grow mb-5">
                      {details?.services.map((svc) => (
                        <li key={svc} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 flex-shrink-0" style={{ color: state.accentColor }} />
                          {svc}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs font-semibold group-hover:text-secondary transition-colors mt-auto" style={{ color: state.accentColor }}>
                      Learn More →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RON note */}
      <section className="py-14 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Don't see your state?</strong> RON notarization through our Missouri commission is available to clients in all 50 states for documents that can be notarized remotely. Contact Anna AI to find out if we can help.
          </p>
          <Link href="/how-it-works">
            <span className="inline-block mt-6 font-semibold px-7 py-3 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: "#C9A84C", color: "#1a2f4e" }}>
              Talk to Anna AI →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
