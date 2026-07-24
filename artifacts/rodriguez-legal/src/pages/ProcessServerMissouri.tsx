import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cities } from "@/data/cities";
import { Phone, ArrowRight, CheckCircle2, Scale, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const included = [
  "Court-compliant document delivery",
  "Up to 3 service attempts (metro)",
  "Status updates throughout the process",
  "Notarized Affidavit of Service",
  "Filing-ready documentation",
  "Court affidavit filing included",
];

const kcPricing = [
  { label: "Standard Service (3 attempts)", val: "$75" },
  { label: "Rush Service (1–2 days)",        val: "$125" },
  { label: "Same-Day Attempt",               val: "$150" },
  { label: "Additional Address / Person",    val: "+ $25" },
  { label: "Difficult Serve (evasive, gated, etc.)", val: "+ $25–$40" },
];

const ruralPricing = [
  { label: "Base Service Fee",              val: "$50" },
  { label: "Mileage (round trip)",          val: "$0.85 / mile" },
  { label: "Rush Service",                  val: "$100 + mileage" },
  { label: "Wait Time (after 15 min)",      val: "$40 / hour" },
  { label: "Additional Person (same loc.)", val: "+ $35" },
];

const targets = [
  { icon: "⚖️", label: "Attorneys & Law Firms" },
  { icon: "🏠", label: "Landlords Filing Evictions" },
  { icon: "👤", label: "Individuals in Civil Suits" },
  { icon: "🏢", label: "Businesses Collecting Debts" },
  { icon: "📑", label: "Property Managers" },
  { icon: "💼", label: "Debt Collection Agencies" },
];

export default function ProcessServerMissouri() {
  const scrollToContact = () => {
    window.location.href = `${BASE}/#contact`;
  };

  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Hero */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-2/3 bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                ⚖️ Missouri Supreme Court Rule 54.13 Compliant
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Process Server in{" "}
                <span className="text-accent italic font-medium">Missouri</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Fast, compliant, and reliable process serving across Kansas City metro and rural Missouri.
                Notarized Affidavit of Service included on every job.
              </p>
              <p className="text-accent/80 font-medium text-base mb-10">
                Serving Kansas City with fast, flat-rate service — and rural Missouri with fair, distance-based pricing so you only pay for what's required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 font-semibold" onClick={scrollToContact}>
                  Request Service of Process <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-14 px-8"
                  onClick={() => (window.location.href = "tel:8165530595")}>
                  <Phone className="mr-2 w-5 h-5" /> (816) 553-0595
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-white/8 divide-x divide-white/8">
              {[
                { num: "3", label: "Attempts per standard serve" },
                { num: "24hr", label: "Rush same-day available" },
                { num: "100%", label: "Notarized proof of service" },
                { num: "2", label: "Counties covered — KC + rural" },
              ].map((item, i) => (
                <div key={i} className="py-8 text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">{item.num}</div>
                  <div className="text-xs text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 border-b border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold tracking-widest uppercase text-accent mb-8">What's Included on Every Job</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {included.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-5 py-4">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-white/85">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tables */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">Transparent Pricing</h2>
              <p className="text-white/75">No surprises. Know what you'll pay before we begin.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* KC Metro */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="bg-white/5 border border-accent/20 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div className="text-xs font-bold tracking-widest uppercase text-accent">Kansas City Metro — Flat Rate</div>
                </div>
                <p className="text-xs text-white/70 mb-6">Best for speed + convenience</p>
                <div className="space-y-0">
                  {kcPricing.map(r => (
                    <div key={r.label} className="flex justify-between items-center py-3 border-b border-white/6 last:border-0">
                      <span className="text-sm text-white/85">{r.label}</span>
                      <span className="text-accent font-semibold whitespace-nowrap ml-4">{r.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Rural */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <div className="text-xs font-bold tracking-widest uppercase text-accent">Rural Missouri — Base + Mileage</div>
                </div>
                <p className="text-xs text-white/70 mb-6">Best for distance-based jobs — prepayment required</p>
                <div className="space-y-0">
                  {ruralPricing.map(r => (
                    <div key={r.label} className="flex justify-between items-center py-3 border-b border-white/6 last:border-0">
                      <span className="text-sm text-white/85">{r.label}</span>
                      <span className="text-accent font-semibold whitespace-nowrap ml-4">{r.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Comparison */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="border border-accent/20 rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <div className="grid grid-cols-3 bg-white/8 border-b border-accent/20">
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-white/70">Service Type</div>
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-white/70 text-center">KC Metro</div>
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-accent text-center">Rural Areas</div>
              </div>
              {[
                { type: "Standard", kc: "$75", rural: "$50 + mileage" },
                { type: "Rush",     kc: "$125", rural: "$100 + mileage" },
                { type: "2nd Person (same address)", kc: "+ $25", rural: "+ $35" },
              ].map((r, i) => (
                <div key={i} className={`grid grid-cols-3 border-b border-white/4 last:border-0 ${i % 2 === 0 ? "bg-white/3" : ""}`}>
                  <div className="px-6 py-4 text-sm text-white/85">{r.type}</div>
                  <div className="px-6 py-4 text-sm text-white/85 text-center">{r.kc}</div>
                  <div className="px-6 py-4 text-sm text-accent/80 font-medium text-center">{r.rural}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold tracking-widest uppercase text-accent mb-8">Who Uses This Service</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
              {targets.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white/4 border border-white/8 rounded-xl p-4 text-center text-xs text-white/80 leading-relaxed">
                  <span className="block text-xl mb-2">{t.icon}</span>
                  {t.label}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 max-w-2xl mx-auto text-center">
              <p className="text-accent/80 font-semibold text-sm italic">
                "Faster than the Sheriff. More reliable than random servers. Real-time updates included."
              </p>
            </div>
          </div>
        </section>

        {/* Documents we serve */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xs font-bold tracking-widest uppercase text-accent mb-8">Documents We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { icon: "⚖️", label: "Summons & Complaints" },
                { icon: "📜", label: "Subpoenas" },
                { icon: "🏠", label: "Eviction Notices" },
                { icon: "📑", label: "Court Orders" },
                { icon: "💰", label: "Garnishment Notices" },
                { icon: "👨‍👩‍👧", label: "Family Law Documents" },
                { icon: "🏢", label: "Restraining Orders" },
                { icon: "📋", label: "Demand Letters" },
              ].map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-white/4 border border-white/8 rounded-xl px-4 py-5 text-center text-xs text-white/80 leading-relaxed">
                  <span className="block text-2xl mb-2">{d.icon}</span>
                  {d.label}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog + Law firms links */}
        <section className="py-12 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <FileText className="w-10 h-10 text-accent shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-1">From the Blog</div>
                <h3 className="text-white font-heading font-bold text-lg mb-1">What Happens If Someone Avoids Being Served in Missouri?</h3>
                <p className="text-white/75 text-sm">Avoiding a process server doesn't stop the clock — it just changes the strategy. Learn what options you have.</p>
              </div>
              <Link href={`${BASE}/blog/avoiding-service-missouri`}>
                <Button className="bg-accent text-primary hover:bg-accent/90 shrink-0 font-semibold">Read Post</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-accent/6 border border-accent/20 rounded-2xl p-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <span className="text-4xl shrink-0">⚖️</span>
              <div className="flex-1">
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-1">For Law Firms &amp; Attorneys</div>
                <h3 className="text-white font-heading font-bold text-lg mb-1">Process Serving for KC Law Firms</h3>
                <p className="text-white/75 text-sm">Bulk billing, same-day availability, 16th Circuit approved. Set up a firm account — no contracts, no paperwork.</p>
              </div>
              <Link href={`${BASE}/process-server-law-firms`}>
                <Button className="bg-accent text-primary hover:bg-accent/90 shrink-0 font-semibold">View Firm Info</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* City pages */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">Service Areas</h2>
              <p className="text-white/75 text-sm">Click your city for local pricing and service details</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {cities.map((city, i) => (
                <motion.div key={city.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Link href={`${BASE}/process-server-${city.slug}-mo`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="font-heading font-semibold text-white text-sm">{city.name}</span>
                      </div>
                      <div className="text-xs text-white/70 mb-3">{city.county}</div>
                      <div className="text-xs text-accent/70 font-medium">View local pricing →</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white/3 border border-white/8 rounded-xl p-6 flex gap-4 items-start">
              <Scale className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                Process serving is performed in accordance with Missouri Supreme Court Rule 54.13. Gantts Key Formation Group is not a law firm and does not provide legal advice. We act only as a neutral third party for delivery of legal documents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Request Service of Process?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Call or text Loresa directly, or fill out the request form. Most jobs are confirmed same day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 font-semibold" onClick={scrollToContact}>
                Request Service of Process <ArrowRight className="ml-2 w-5 h-5" />
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
