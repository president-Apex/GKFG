import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { CheckCircle } from "lucide-react";
import { allStates } from "@/data/states";

export default function StatesHub() {
  const stateNames = allStates.map((s) => s.name).join(", ");
  return (
    <>
      <SEO
        title={`Business Formation & Notary Services — ${allStates.length} States | Gantt Key Formation Group`}
        description={`GKFG serves entrepreneurs in ${allStates.length} states with LLC formation, corporation filing, EIN assistance, registered agent, and remote online notarization. Transparent, flat-rate pricing.`}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Where We Serve</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            {allStates.length} States. One Team. One Standard of Excellence.
          </h1>
          <p className="text-primary-foreground/65 text-lg leading-relaxed">
            From Kansas City to Phoenix, Nashville to Atlanta, Austin to Miami — GKFG delivers founder-led formation and notary services you can trust, with remote online notarization available in every state.
          </p>
        </div>
      </section>

      {/* State Cards Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allStates.map((state) => {
              const highlights = [
                `${state.fees.llcFormation} filing fee`,
                state.fees.annualReport.toLowerCase().startsWith("none") || state.fees.annualReport.startsWith("$0")
                  ? "No annual report"
                  : `Annual: ${state.fees.annualReport}`,
                state.registeredAgent ? "Registered Agent + RON" : "RON available",
              ];
              return (
                <Link key={state.slug} href={`/states/${state.slug}`}>
                  <div className="group rounded-2xl border border-border hover:border-secondary/50 hover:shadow-md transition-all cursor-pointer p-6 h-full flex flex-col bg-white">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: state.accentColor }} />
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{state.region}</p>
                    </div>

                    <h2 className="font-serif text-xl font-bold mb-4 group-hover:text-secondary transition-colors" style={{ color: "#1a2f4e" }}>
                      {state.name}
                    </h2>

                    <ul className="space-y-1.5 flex-grow mb-5">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 flex-shrink-0" style={{ color: state.accentColor }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs font-semibold group-hover:text-secondary transition-colors mt-auto" style={{ color: state.accentColor }}>
                      View {state.name} →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="sr-only">States served: {stateNames}.</p>
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
