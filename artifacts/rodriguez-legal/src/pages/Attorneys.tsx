import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { attorneys, markets, Attorney } from "@/data/attorneys";
import { Phone, Mail, Globe, MapPin, Search, Scale, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const marketIcons: Record<string, string> = {
  "Kansas City": "🏙️",
  "Montana":     "🏔️",
  "Atlanta":     "🌳",
  "Charlotte":   "🏛️",
  "Phoenix":     "🌵",
};

function AttorneyCard({ attorney, index }: { attorney: Attorney; index: number }) {
  const initials = attorney.name
    .replace(/["]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const location = [attorney.city, attorney.state].filter(Boolean).join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 pb-5 flex items-start gap-4 border-b border-white/6">
        {attorney.image ? (
          <img
            src={attorney.image}
            alt={attorney.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-accent/20 shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/8 border-2 border-accent/20 flex items-center justify-center shrink-0">
            <span className="text-accent font-heading font-bold text-base">{initials}</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-heading font-bold text-base leading-snug mb-0.5">{attorney.name}</h3>
          <div className="text-accent text-xs font-semibold mb-1.5">{attorney.firm}</div>
          {location && (
            <div className="flex items-center gap-1 text-[11px] text-white/70">
              <MapPin className="w-3 h-3 text-accent/60 shrink-0" />
              {location}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Practice areas */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {attorney.practiceArea.map((area) => (
            <span
              key={area}
              className="bg-accent/10 border border-accent/15 rounded-full px-2.5 py-0.5 text-[11px] text-accent/80 font-medium"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-white/75 leading-relaxed flex-1 mb-5">{attorney.description}</p>

        {/* Contact row */}
        {(attorney.phone || attorney.email || attorney.website) && (
          <div className="space-y-2 mb-5 border-t border-white/6 pt-4">
            {attorney.phone && (
              <a href={`tel:${attorney.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-xs text-white/80 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent/60 shrink-0" /> {attorney.phone}
              </a>
            )}
            {attorney.email && (
              <a href={`mailto:${attorney.email}`}
                className="flex items-center gap-2 text-xs text-white/80 hover:text-accent transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-accent/60 shrink-0" /> {attorney.email}
              </a>
            )}
            {attorney.website && (
              <a href={attorney.website} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-accent transition-colors break-all">
                <Globe className="w-3.5 h-3.5 text-accent/60 shrink-0" />
                {attorney.website.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex gap-2 flex-wrap mt-auto">
          {attorney.email ? (
            <Button size="sm"
              className="bg-accent text-primary hover:bg-accent/90 font-semibold text-xs h-8 px-4"
              onClick={() => (window.location.href = `mailto:${attorney.email}`)}>
              Contact <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          ) : attorney.phone ? (
            <Button size="sm"
              className="bg-accent text-primary hover:bg-accent/90 font-semibold text-xs h-8 px-4"
              onClick={() => (window.location.href = `tel:${attorney.phone.replace(/\D/g, "")}`)}>
              Contact <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          ) : null}
          {attorney.website && (
            <Button size="sm"
              className="bg-transparent border border-white/15 text-white/85 hover:bg-white/10 hover:text-white font-medium text-xs h-8 px-4"
              onClick={() => window.open(attorney.website, "_blank")}>
              Learn More
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Attorneys() {
  const [query, setQuery] = useState("");
  const [activeMarket, setActiveMarket] = useState<string | null>(null);
  const marketRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return attorneys.filter((a) => {
      const matchesMarket = !activeMarket || a.market === activeMarket;
      if (!q) return matchesMarket;
      const haystack = [
        a.name, a.firm, a.city, a.state, a.market, ...a.practiceArea
      ].join(" ").toLowerCase();
      return matchesMarket && haystack.includes(q);
    });
  }, [query, activeMarket]);

  const groupedByMarket = useMemo(() => {
    return markets.map((m) => ({
      ...m,
      attorneys: filtered.filter((a) => a.market === m.key),
    })).filter((g) => g.attorneys.length > 0);
  }, [filtered]);

  const scrollToMarket = (key: string) => {
    setActiveMarket(null);
    setTimeout(() => {
      marketRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Hero */}
        <section className="py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                ⚖️ Attorney Network
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Trusted Attorneys <span className="text-accent italic font-medium">by Market</span>
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-3">
                Explore attorneys in our active service markets who support business formation, legal structure, compliance, contracts, and related business needs.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Gantts Key Formation Group helps clients get their businesses set up the right way. For matters requiring legal counsel, this attorney network page is designed to help users explore attorneys by market and practice alignment.
              </p>
              <Button
                className="bg-accent text-primary hover:bg-accent/90 font-semibold h-11 px-7"
                onClick={() => (window.location.href = `${BASE}/#contact`)}
              >
                Speak With a Formation Specialist <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Sticky filter bar */}
        <div className="sticky top-[72px] z-30 bg-primary/95 backdrop-blur-md border-y border-white/8 py-3">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, firm, city, or practice…"
                  className="w-full bg-white/8 border border-white/12 rounded-xl pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-accent/40 focus:bg-white/10 transition-all"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Market filter pills */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setActiveMarket(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    !activeMarket
                      ? "bg-accent text-primary border-accent"
                      : "bg-white/6 text-white/80 border-white/10 hover:border-accent/30 hover:text-white"
                  }`}
                >
                  All Markets
                </button>
                {markets.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setActiveMarket(activeMarket === m.key ? null : m.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      activeMarket === m.key
                        ? "bg-accent text-primary border-accent"
                        : "bg-white/6 text-white/80 border-white/10 hover:border-accent/30 hover:text-white"
                    }`}
                  >
                    {marketIcons[m.key]} {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Jump links */}
        {!query && !activeMarket && (
          <div className="border-b border-white/6 py-3">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex gap-2 flex-wrap items-center">
                <span className="text-xs text-white/60 font-medium mr-1">Jump to:</span>
                {markets.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => scrollToMarket(m.key)}
                    className="text-xs text-white/75 hover:text-accent transition-colors underline underline-offset-2"
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Attorney groups */}
        <section className="py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {groupedByMarket.length === 0 ? (
              <div className="text-center py-24 text-white/65 text-sm">
                No attorneys match your search. Try a different name, firm, or practice area.
              </div>
            ) : (
              <div className="space-y-16 max-w-6xl mx-auto">
                {groupedByMarket.map((group) => (
                  <div
                    key={group.key}
                    id={`market-${group.key.toLowerCase().replace(/\s+/g, "-")}`}
                    ref={(el) => { marketRefs.current[group.key] = el; }}
                    className="scroll-mt-40"
                  >
                    {/* Region header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{marketIcons[group.key]}</span>
                        <div>
                          <h2 className="text-xl font-heading font-bold text-white leading-none">{group.label}</h2>
                          <div className="text-xs text-white/65 mt-0.5">{group.state}</div>
                        </div>
                      </div>
                      <div className="flex-1 h-px bg-accent/15" />
                      <span className="text-xs text-white/65 shrink-0">
                        {group.attorneys.length} {group.attorneys.length === 1 ? "attorney" : "attorneys"}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
                      {group.attorneys.map((attorney, i) => (
                        <AttorneyCard key={attorney.id} attorney={attorney} index={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white/3 border border-white/8 rounded-xl p-6 flex gap-4 items-start">
              <Scale className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                This directory is provided for informational and referral-network purposes only. Users should independently evaluate legal counsel for their specific legal needs. Gantts Key Formation Group is not a law firm and does not provide legal advice. The attorneys listed here are independent professionals and are not employees or agents of Gantts Key Formation Group.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-3">Need a Referral?</h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Not sure which attorney is the right fit? Call Loresa directly — she can point you toward the right resource for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-12 px-8 font-semibold"
                onClick={() => (window.location.href = "tel:8165530595")}>
                <Phone className="mr-2 w-4 h-4" /> (816) 553-0595
              </Button>
              <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-12 px-8 font-semibold"
                onClick={() => (window.location.href = `${BASE}/#contact`)}>
                Send a Message
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
