import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cities, CityData } from "@/data/cities";
import { Phone, ArrowRight, CheckCircle2, Scale, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const kcSlugs = ["kansas-city", "liberty", "independence", "lees-summit", "blue-springs", "smithville", "kearney", "gladstone", "parkville"];

function isKCMetro(slug: string) {
  return kcSlugs.includes(slug);
}

export default function ProcessServerCity({ city }: { city: CityData }) {
  const metro = isKCMetro(city.slug);

  const scrollToContact = () => {
    window.location.href = `${BASE}/#contact`;
  };

  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Link href={`${BASE}/process-server-missouri`}><span className="hover:text-accent transition-colors cursor-pointer">Missouri Process Serving</span></Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/85">{city.name}, MO</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-2/3 bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                <MapPin className="w-3 h-3" /> {city.county} · {metro ? "KC Metro Flat Rate" : "Rural Base + Mileage"}
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-5">
                Process Server in{" "}
                <span className="text-accent italic font-medium">{city.name}, Missouri</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{city.description}.</p>
              <p className="text-white/75 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">{city.localNote}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 font-semibold" onClick={scrollToContact}>
                  Request Service in {city.name} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-14 px-8"
                  onClick={() => (window.location.href = "tel:8165530595")}>
                  <Phone className="mr-2 w-5 h-5" /> Call Loresa
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  {metro ? "KC Metro Flat-Rate Pricing" : "Rural Missouri Pricing"} for {city.name}
                </h2>
                <p className="text-white/70 text-sm">
                  {metro
                    ? "Flat pricing — no mileage surprises. You know the cost before we begin."
                    : "Base fee + mileage model — you only pay for the distance required. Prepayment required."}
                </p>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white/5 border border-accent/20 rounded-2xl p-8">
                {metro ? (
                  <div className="space-y-0">
                    {[
                      { label: "Standard Service (3 attempts)", val: "$75" },
                      { label: "Rush Service (1–2 days)",        val: "$125" },
                      { label: "Same-Day Attempt",               val: "$150" },
                      { label: "Additional Address / Person",    val: "+ $25" },
                      { label: "Difficult Serve (evasive)",      val: "+ $25–$40" },
                      { label: "Notarized Affidavit of Service", val: "✓ Included" },
                      { label: "Court Filing Ready",             val: "✓ Included" },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between items-center py-3.5 border-b border-white/6 last:border-0">
                        <span className="text-sm text-white/85">{r.label}</span>
                        <span className="text-accent font-semibold whitespace-nowrap ml-4">{r.val}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-0">
                    {[
                      { label: "Base Service Fee",              val: "$50" },
                      { label: "Mileage (round trip)",          val: "$0.85 / mile" },
                      { label: "Rush Service",                  val: "$100 + mileage" },
                      { label: "Wait Time (after 15 min)",      val: "$40 / hour" },
                      { label: "Additional Person (same loc.)", val: "+ $35" },
                      { label: "Prepayment Required",           val: "Base + est. mileage" },
                      { label: "Notarized Affidavit of Service",val: "✓ Included" },
                    ].map(r => (
                      <div key={r.label} className="flex justify-between items-center py-3.5 border-b border-white/6 last:border-0">
                        <span className="text-sm text-white/85">{r.label}</span>
                        <span className="text-accent font-semibold whitespace-nowrap ml-4">{r.val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold tracking-widest uppercase text-accent mb-8">What's Included on Every Job</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Court-compliant document delivery",
                metro ? "Up to 3 service attempts" : "Documented attempt record",
                "Real-time status updates",
                "Notarized Affidavit of Service",
                "Filing-ready documentation",
                `Serving ${city.courthouse}`,
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-5 py-4">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-white/85">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other cities */}
        <section className="py-14 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold tracking-widest uppercase text-accent mb-6">Other Service Areas</h2>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {cities.filter(c => c.slug !== city.slug).map(c => (
                <Link key={c.slug} href={`${BASE}/process-server-${c.slug}-mo`}>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/80 hover:border-accent/40 hover:text-white transition-all cursor-pointer">
                    <MapPin className="w-3 h-3 text-accent" />{c.name}
                  </span>
                </Link>
              ))}
              <Link href={`${BASE}/process-server-missouri`}>
                <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs text-accent hover:bg-accent/20 transition-all cursor-pointer">
                  All Missouri Cities →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white/3 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <Scale className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                Process serving is performed in accordance with Missouri Supreme Court Rule 54.13. Gantts Key Formation Group is not a law firm and does not provide legal advice. We act only as a neutral third party for delivery of legal documents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Need a Process Server in {city.name}?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
              {metro
                ? `Flat-rate pricing, up to 3 attempts, and a notarized affidavit on every job. Serving ${city.county} fast.`
                : `Rural Missouri pricing with mileage-based transparency. Serving ${city.county} with the same professionalism as the metro.`}
            </p>
            <p className="text-white/70 text-xs mb-8">Dealing with a difficult serve in {city.county}?{" "}
              <span className="text-accent cursor-pointer" onClick={scrollToContact}>Click here to get a fast quote.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 font-semibold" onClick={scrollToContact}>
                Request Service in {city.name} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-14 px-8"
                onClick={() => (window.location.href = "tel:8165530595")}>
                <Phone className="mr-2 w-5 h-5" /> Call (816) 553-0595
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
