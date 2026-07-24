import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, ArrowRight, CheckCircle2, Scale, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const pitchStats = [
  { label: "Turnaround — Standard",    val: "1–3 attempts, 3–5 days",     green: false },
  { label: "Rush / Same-Day KC",       val: "✓ Available",                green: true  },
  { label: "Rural Coverage",           val: "✓ Clay & Clinton County",    green: true  },
  { label: "Notarized Proof of Service", val: "✓ Every serve",            green: true  },
  { label: "Court affidavit filing",   val: "✓ Included",                 green: true  },
  { label: "Real-time status updates", val: "✓ Call or text",             green: true  },
  { label: "16th Circuit Approved",    val: "✓ Jackson County",           green: true  },
  { label: "Bulk / monthly billing",   val: "✓ Available for firms",      green: false },
];

const reasons = [
  {
    icon: "⚡",
    title: "We Answer When You Call",
    desc: "No ticket system. No call center. Loresa picks up the phone — especially when you have a filing deadline and need confirmation now.",
  },
  {
    icon: "🗺️",
    title: "Metro + Rural Coverage",
    desc: "Most KC servers won't cross the county line. We cover the full KC metro and extend into Kearney, Smithville, Plattsburg, and Lathrop — areas most competitors skip.",
  },
  {
    icon: "📋",
    title: "Court-Ready Paperwork",
    desc: "Every serve includes a notarized Proof of Service affidavit filed with the court within 30 days. No chasing down documentation after the fact.",
  },
  {
    icon: "🔄",
    title: "Status Without Asking",
    desc: "You'll know when service is attempted, completed, or when a subject is proving evasive — without having to follow up. We update you proactively.",
  },
  {
    icon: "💼",
    title: "Bulk & Monthly Billing",
    desc: "For firms with regular volume, we offer consolidated monthly invoicing so your team isn't processing a separate payment for every single serve.",
  },
  {
    icon: "🛡️",
    title: "Notary On Staff",
    desc: "Loresa is a commissioned Missouri notary — which means your Proof of Service is notarized on the spot, not days later waiting for a third party.",
  },
];

const tiers = [
  {
    name: "Standard Serve",
    price: "$75",
    note: "KC Metro flat rate",
    featured: false,
    features: [
      "Up to 3 attempts",
      "Notarized Proof of Service",
      "Court affidavit filed",
      "3–5 business day window",
      "Status updates included",
    ],
  },
  {
    name: "Rush / Same-Day",
    price: "$125–$150",
    note: "KC Metro · Priority queue",
    featured: true,
    features: [
      "Same-day when ordered by noon",
      "Up to 3 attempts same day",
      "Notarized Proof of Service",
      "Court affidavit filed",
      "Real-time confirmation call",
    ],
  },
  {
    name: "Rural Serve",
    price: "$50 + miles",
    note: "Clay & Clinton County · $0.85/mi",
    featured: false,
    features: [
      "Kearney, Smithville, Plattsburg, Lathrop",
      "Prepayment: base + est. mileage",
      "Wait time: $40/hr after 15 min",
      "Notarized Proof of Service",
      "Court affidavit filed",
    ],
  },
];

const timeline = [
  {
    n: "1",
    title: "Submit Your Serve Request",
    desc: "Call, text, or email Loresa with the documents, subject name, address, and your deadline. Rush orders accepted until noon for same-day.",
  },
  {
    n: "2",
    title: "Confirm & Invoice",
    desc: "Loresa confirms the serve details and sends a quick invoice. Rural serves require prepayment of base + estimated mileage before departure.",
  },
  {
    n: "3",
    title: "Service Attempted",
    desc: "Up to 3 attempts on standard serves. If a subject is evasive, Loresa flags it immediately so you can advise on next steps (substitute service, posting, etc.).",
  },
  {
    n: "4",
    title: "Notarized Proof of Service",
    desc: "Upon successful service, Loresa completes and notarizes the Return of Service affidavit on the spot — no waiting for a separate notary.",
  },
  {
    n: "5",
    title: "Filed & Delivered to Your Firm",
    desc: "The completed affidavit is filed with the court clerk within 30 days and a copy is delivered directly to your firm. Case closed, paperwork done.",
  },
];

const emailBody = `Hi [Attorney First Name],

My name is Loresa Gantt, and I provide professional process serving throughout the Kansas City metro and surrounding rural areas including Clay and Clinton County.

I wanted to reach out because I noticed that [Firm Name] handles [practice area — e.g., civil litigation / family law / landlord-tenant] cases, and I'd like to offer my services as a reliable, fast process server for your firm.

Here's what I offer that most servers in the area don't:

• Same-day service available in KC Metro (order by noon)
• Rural coverage — Kearney, Smithville, Plattsburg, Lathrop, and surrounding areas
• Notarized Proof of Service completed on the spot — I'm a commissioned Missouri notary
• Real-time updates — I call or text you directly, no chasing me down
• 16th Circuit approved (Jackson County) — no per-case motion needed
• Consolidated monthly invoicing for firms with regular volume

Standard metro rates run $75 per serve with up to 3 attempts included. Rush same-day is $125–$150.

I'd be happy to handle your next serve as an introduction — no obligation. If you'd like to set up a firm account or have any questions, feel free to call or text me directly at (816) 553-0595 or reply to this email.

Thanks for your time,

Loresa Gantt
Gantts Key Formation Group
(816) 553-0595
info@ganttformation.com`;

function CopyEmailButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border transition-all ${
        copied
          ? "text-green-400 border-green-400/40 bg-green-400/8"
          : "text-accent border-accent/30 bg-accent/8 hover:bg-accent/15"
      }`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}

export default function ProcessServerLawFirms() {
  const scrollToContact = () => { window.location.href = `${BASE}/#contact`; };

  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-2/3 bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Text */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                  ⚖️ For Law Firms &amp; Attorneys
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
                  Your Reliable Process Server in{" "}
                  <span className="text-accent italic font-medium">KC &amp; Beyond.</span>
                </h1>
                <p className="text-white/80 leading-relaxed mb-8 text-base">
                  Most servers only cover the metro. We cover Kansas City and rural Clay &amp; Clinton County — with same-day availability, notarized proof of service, and a real person you can actually reach when a deadline is on the line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 h-13 px-8 font-semibold shadow-lg shadow-accent/20" onClick={scrollToContact}>
                    Set Up a Firm Account <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" className="bg-transparent border border-white/20 text-white hover:bg-white/10 h-13 px-8"
                    onClick={() => window.location.href = "tel:8165530595"}>
                    <Phone className="mr-2 w-5 h-5" /> (816) 553-0595
                  </Button>
                </div>
              </motion.div>

              {/* Pitch card */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className="bg-white/8 border border-accent/25 rounded-2xl p-7 shadow-2xl shadow-black/30">
                  <div className="text-xs font-bold tracking-widest uppercase text-accent mb-5">Why Firms Choose Gantts Key Formation Group</div>
                  <div className="space-y-0">
                    {pitchStats.map((s, i) => (
                      <div key={i} className={`flex justify-between items-center py-3 border-b border-white/6 last:border-0`}>
                        <span className="text-sm text-white/80">{s.label}</span>
                        <span className={`text-sm font-semibold whitespace-nowrap ml-4 ${s.green ? "text-green-400" : "text-accent/80"}`}>{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why attorneys choose us */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
              <div className="flex-1 h-px bg-accent/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent whitespace-nowrap">Why Attorneys Choose Us</span>
              <div className="flex-1 h-px bg-accent/20" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {reasons.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="bg-white/5 border border-white/8 rounded-xl p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-200">
                  <div className="text-2xl mb-3">{r.icon}</div>
                  <div className="text-sm font-semibold text-white mb-2">{r.title}</div>
                  <div className="text-xs text-white/75 leading-relaxed">{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Firm pricing tiers */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
              <div className="flex-1 h-px bg-accent/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent whitespace-nowrap">Firm Pricing</span>
              <div className="flex-1 h-px bg-accent/20" />
            </div>
            <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-5">
              {tiers.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-7 border ${t.featured ? "border-accent bg-white/8 shadow-xl shadow-black/20" : "border-white/8 bg-white/4"}`}>
                  <div className="font-heading font-bold text-white text-lg mb-1">{t.name}</div>
                  <div className="text-2xl font-heading font-bold text-accent mb-1">{t.price}</div>
                  <div className="text-xs text-white/70 mb-5">{t.note}</div>
                  <ul className="space-y-2.5">
                    {t.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="max-w-5xl mx-auto bg-accent/6 border border-accent/15 rounded-xl p-5 text-xs text-white/75 leading-relaxed">
              💼 <strong className="text-accent/80">Firm accounts:</strong> Consolidated monthly invoicing available for firms with 5+ serves/month. Evasive target surcharge (+$25–$40) applied when subject is actively avoiding service. Second person at same address +$25 metro / +$35 rural.
            </div>
          </div>
        </section>

        {/* How it works + Coverage */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
              <div className="flex-1 h-px bg-accent/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent whitespace-nowrap">How It Works</span>
              <div className="flex-1 h-px bg-accent/20" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

              {/* Timeline */}
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex gap-5 pb-7 relative">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-4 top-10 bottom-0 w-px bg-white/8" />
                    )}
                    <div className="w-8 h-8 bg-accent/15 border border-accent/25 rounded-full flex items-center justify-center text-xs font-bold text-accent shrink-0 mt-0.5 relative z-10">
                      {item.n}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-xs text-white/75 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Coverage */}
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-accent mb-5">Full Service Coverage</div>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="bg-white/5 border border-white/8 rounded-xl p-5">
                    <div className="text-sm font-semibold text-white mb-3">🏙️ KC Metro — Flat Rate</div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Kansas City", "Liberty", "Gladstone", "North KC", "Riverside", "Parkville"].map(c => (
                        <span key={c} className="bg-accent/10 border border-accent/20 rounded-md px-2 py-0.5 text-xs text-accent/80">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/8 rounded-xl p-5">
                    <div className="text-sm font-semibold text-white mb-3">🛣️ Rural — Base + Mileage</div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Kearney", "Smithville", "Plattsburg", "Lathrop", "Clay County", "Clinton County"].map(c => (
                        <span key={c} className="bg-accent/10 border border-accent/20 rounded-md px-2 py-0.5 text-xs text-accent/80">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white/4 border border-white/8 rounded-xl p-4 text-xs text-white/75 leading-relaxed">
                  📌 <strong className="text-accent/80">16th Circuit (Jackson County)</strong> approved process server list — pre-authorized for all Jackson County cases without per-case motion.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Attorney outreach email */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4 max-w-4xl mx-auto">
              <div className="flex-1 h-px bg-accent/20" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent whitespace-nowrap">Attorney Outreach Email — Copy &amp; Send</span>
              <div className="flex-1 h-px bg-accent/20" />
            </div>
            <p className="text-center text-xs text-white/70 mb-8 max-w-2xl mx-auto">
              Use this email to introduce yourself to KC-area law firms. Personalize the <span className="text-accent">[highlighted fields]</span> before sending.
            </p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-white/5 border-b border-white/8 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="text-xs text-white/70 mb-0.5">Subject:</div>
                  <div className="text-sm text-white font-medium">Process Serving for [Firm Name] — KC Metro + Rural Coverage</div>
                </div>
                <CopyEmailButton text={emailBody} />
              </div>
              {/* Body */}
              <pre className="px-7 py-6 text-sm text-white/85 leading-relaxed whitespace-pre-wrap font-sans">
                {emailBody.replace(/\[([^\]]+)\]/g, (match) => `\u25ba${match}\u25c4`).split(/\u25ba([^\u25c4]+)\u25c4/).map((part, i) =>
                  i % 2 === 1 ? (
                    <span key={i} className="text-accent font-semibold">[{part}]</span>
                  ) : (
                    part
                  )
                )}
              </pre>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white/3 border border-white/8 rounded-xl p-5 flex gap-4 items-start">
              <Scale className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed">
                Process serving is performed in accordance with Missouri Supreme Court Rule 54.13. Gantts Key Formation Group is not a law firm and does not provide legal advice. We act only as a neutral third party for delivery of legal documents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white/6 border border-accent/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">Ready to Set Up a Firm Account?</h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                  Call or text Loresa directly. Most firms are onboarded same day — no paperwork, no contracts, just reliable service when you need it.{" "}
                  <a href="tel:8165530595" className="text-accent">(816) 553-0595</a>
                  {" · "}
                  <a href="mailto:info@ganttformation.com" className="text-accent">info@ganttformation.com</a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold px-6 h-12" onClick={() => window.location.href = "tel:8165530595"}>
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </Button>
                <Button className="bg-transparent border border-accent text-accent hover:bg-accent/10 font-semibold px-6 h-12" onClick={scrollToContact}>
                  Submit a Serve Request
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* City links */}
        <section className="py-10 border-t border-white/8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-xs font-bold tracking-widest uppercase text-accent mb-5">Service Areas</div>
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
              {[
                { name: "Kansas City", slug: "kansas-city" },
                { name: "Liberty", slug: "liberty" },
                { name: "Independence", slug: "independence" },
                { name: "Gladstone", slug: "gladstone" },
                { name: "Smithville", slug: "smithville" },
                { name: "Kearney", slug: "kearney" },
                { name: "Plattsburg", slug: "plattsburg" },
                { name: "Lathrop", slug: "lathrop" },
              ].map(c => (
                <Link key={c.slug} href={`${BASE}/process-server-${c.slug}-mo`}>
                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/80 hover:border-accent/40 hover:text-white transition-all cursor-pointer">
                    <MapPin className="w-3 h-3 text-accent" />{c.name}
                  </span>
                </Link>
              ))}
              <Link href={`${BASE}/process-server-missouri`}>
                <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs text-accent hover:bg-accent/20 transition-all cursor-pointer">
                  All Missouri →
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
