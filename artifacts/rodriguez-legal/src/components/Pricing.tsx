import { motion } from "framer-motion";
import { CheckCircle2, Clock, Star, Car, MonitorSmartphone, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const packages = [
  {
    tier: "Starter Launch",
    tagline: "For entrepreneurs who want a confident, guided start",
    price: 499,
    highlight: false,
    badge: null,
    features: [
      { text: "Business formation (LLC/Corporation)", highlight: true },
      { text: "EIN application", highlight: true },
      { text: "Operating agreement", highlight: false },
      { text: "Business name search", highlight: false },
    ],
    cta: "Start Your Business",
  },
  {
    tier: "Growth",
    tagline: "Everything you need to operate from day one",
    price: 899,
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Everything in Starter Launch", highlight: false },
      { text: "Registered Agent (Year 1)", highlight: true },
      { text: "IRS Form 2553 (S-Corp Election)", highlight: true },
      { text: "Compliance Calendar (1 year)", highlight: false },
    ],
    cta: "Schedule Consultation",
  },
  {
    tier: "Concierge",
    tagline: "White-glove support with complete records & consulting",
    price: 1499,
    highlight: false,
    badge: null,
    features: [
      { text: "Everything in Growth", highlight: false },
      { text: "Corporate Bylaws", highlight: true },
      { text: "Complete corporate records package", highlight: false },
      { text: "Business license research", highlight: false },
      { text: "Two 1-hour business structure consulting sessions", highlight: true },
    ],
    cta: "Apply Now",
  },
];

const addons = [
  { name: "LLC / Corporation Formation", desc: "Entity formation filed correctly from day one.", price: "$249 + state fee" },
  { name: "PLLC Formation", desc: "Professional LLC formation for licensed professionals.", price: "$299 + state fee" },
  { name: "EIN Application", desc: "Federal business tax ID — free in all packages.", price: "$75" },
  { name: "IRS Form 2553 (S-Corp Election)", desc: "S Corporation election filing assistance.", price: "$175" },
  { name: "LLC-to-S-Corp Election", desc: "Convert your LLC's tax treatment to S Corporation.", price: "$225" },
  { name: "Operating Agreement", desc: "Drafting and organizing your operating agreement.", price: "$175" },
  { name: "Corporate Bylaws", desc: "Bylaws prepared for your corporation.", price: "$200" },
  { name: "DBA / Fictitious Name Registration", desc: "Register your trade name.", price: "$99" },
  { name: "Foreign LLC/Corp Registration", desc: "Register your entity in additional states.", price: "$249 / state" },
  { name: "Business Reinstatement", desc: "Bring your entity back into good standing.", price: "$299" },
  { name: "LLC / Corporation Dissolution", desc: "Properly close your entity.", price: "$199" },
  { name: "Nonprofit / 501(c)(3) Formation", desc: "Nonprofit formation with federal exemption filing assistance.", price: "$999" },
  { name: "Registered Agent Service (Missouri)", desc: "$99 first year bundled with formation. Missouri, expanding to additional states.", price: "$149/year" },
  { name: "Annual Report Assistance", desc: "Stay compliant with annual state filings.", price: "$75 + state fee" },
  { name: "State Compliance Monitoring", desc: "Ongoing monitoring of your state compliance status.", price: "$29/mo or $299/yr" },
  { name: "Business License Research", desc: "Research of required licenses for your business.", price: "$175 / state" },
  { name: "Certificate of Good Standing", desc: "Obtain your certificate from the state.", price: "$50 + state fee" },
  { name: "Articles of Amendment", desc: "Update your formation documents.", price: "$150 + state fee" },
  { name: "Trademark & Copyright Filing Assistance", desc: "USPTO preparation and filing assistance. Not legal advice.", price: "$299" },
  { name: "Business Structure Consulting", desc: "Credited toward any package.", price: "$150/hour" },
  { name: "Business Name Availability Search", desc: "Free with any formation.", price: "$25" },
  { name: "Responsible Party Update", desc: "Update your IRS responsible party on file.", price: "$95" },
  { name: "Registered Agent Changes", desc: "Update your registered agent with the state.", price: "$75 + state fee" },
  { name: "Articles of Correction", desc: "Correct errors in filed documents.", price: "$125 + state fee" },
  { name: "Compliance Calendar", desc: "Annual deadline tracking — free with RA service.", price: "$99/year" },
  { name: "Franchise Tax Monitoring & Filing", desc: "Stay ahead of franchise tax deadlines.", price: "$199/year" },
  { name: "RA Virtual Mailbox Add-On", desc: "Bundles with registered agent service.", price: "$15/month" },
  { name: "Corporate Record Maintenance", desc: "Keep your corporate records current.", price: "$99/year" },
  { name: "Certified Document Retrieval", desc: "Certified copies retrieved from the state.", price: "$50 + state fee" },
  { name: "Notary/Business-Owner Training Courses", desc: "Training for notaries and business owners.", price: "$197" },
];

const onlineNotaryRows = [
  { label: "Remote Online Notarization (RON)", val: "$25" },
  { label: "General / In-Office Notary", val: "$5 per signature" },
  { label: "I-9 Employment Verification", val: "$50" },
  { label: "Apostille Filing Assistance", val: "$150 first doc / $75 each add'l" },
];

const onlineExamples = [
  { label: "RON session", val: "$25" },
  { label: "Loan signing — refinance", val: "$125" },
  { label: "Loan signing — purchase", val: "$150" },
  { label: "Real estate closings", val: "$175–$250" },
];

const mobileNotaryRows = [
  { label: "Base Notarial Fee", val: "$5 per signature" },
  { label: "Travel — 0–20 miles", val: "$40" },
  { label: "Travel — 21–40 miles", val: "$60" },
  { label: "Travel — 41+ miles", val: "$75+" },
];

const mobileExamples = [
  { label: "Hospital / nursing home notary", val: "Travel fee + $25 surcharge" },
  { label: "Jail notary", val: "Travel fee + $50 surcharge" },
];

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-0">
      <div className="flex-1 h-px bg-white/15" />
      <span className="text-xs font-semibold tracking-widest uppercase text-white/80 whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-white/15" />
    </div>
  );
}

export function Pricing() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const [, navigate] = useLocation();

  return (
    <section id="pricing" className="bg-primary py-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-white/2 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/90 mb-6">
            <Scale className="w-3.5 h-3.5" />
            Business Formation Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Simple Business Formation Pricing
          </h2>
          <p className="text-white/85 text-lg leading-relaxed">
            Choose the level of support that fits your business journey. No hidden fees. Real people guiding you every step.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="mb-16">
          <Divider label="Formation Packages" />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "bg-white/12 border-white/50 -translate-y-2 shadow-2xl"
                    : "bg-white/6 border-white/12 hover:border-white/30"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3 h-3" /> {pkg.badge}
                  </div>
                )}

                <div className="text-xs font-bold tracking-widest uppercase text-white/80 mb-1">{pkg.tier}</div>
                <div className="text-sm text-white/75 mb-6 leading-relaxed">{pkg.tagline}</div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-white/90 text-xl font-bold self-start pt-2">$</span>
                  <span className="text-5xl font-heading font-bold text-white leading-none">{pkg.price}</span>
                </div>
                <div className="text-xs text-white/70 mb-6">+ Missouri state fee if applicable</div>

                <div className="h-px bg-white/10 mb-5" />
                <div className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">What's Included</div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, fi) => (
                    <li
                      key={fi}
                      className={`flex items-start gap-3 text-sm leading-snug ${
                        f.highlight ? "text-white font-medium" : "text-white/80"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${f.highlight ? "bg-white/20" : "bg-white/8"}`}>
                        <CheckCircle2 className={`w-3 h-3 ${f.highlight ? "text-white" : "text-white/70"}`} />
                      </div>
                      {f.text}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-11 font-semibold text-sm rounded-xl ${
                    pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-transparent border border-white/25 text-white hover:bg-white/10"
                  }`}
                  onClick={scrollToContact}
                >
                  {pkg.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <Divider label="Additional Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/6 border border-white/10 rounded-xl p-5 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-sm font-semibold text-white mb-1">{addon.name}</div>
                <div className="text-xs text-white/75 leading-relaxed mb-3">{addon.desc}</div>
                <div className="text-lg font-heading font-bold text-white/90">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notary Pricing */}
        <div className="mb-16">
          <Divider label="Online & Mobile Notary Pricing" />
          <p className="text-center text-sm text-white/75 max-w-2xl mx-auto mt-5 mb-8 leading-relaxed">
            Remote Online Notary and mobile notary services are launching soon — all notarial fees are charged in compliance with Missouri law.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Online Notary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/6 border border-white/15 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-1">
                <MonitorSmartphone className="w-5 h-5 text-white/85" />
                <h3 className="text-lg font-heading font-bold text-white">Remote Online Notary (RON)</h3>
                <span className="text-[10px] font-semibold text-white/90 bg-white/10 border border-white/30 rounded-full px-2.5 py-0.5">Coming Soon</span>
              </div>
              <div className="text-xs text-white/70 mb-5">Secure remote session — coming soon, planned expansion to 20 priority states</div>
              <div className="space-y-3 mb-4">
                {onlineNotaryRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/6 last:border-0 text-sm">
                    <span className="text-white/80">{row.label}</span>
                    <span className="text-white/90 font-medium text-right ml-4">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-5">
                <div className="text-xs font-semibold text-white/75 uppercase tracking-wider mb-3">Pricing Examples</div>
                {onlineExamples.map((ex) => (
                  <div key={ex.label} className="flex justify-between items-center py-1.5 text-sm">
                    <span className="text-white/80">{ex.label}</span>
                    <span className="text-white font-semibold">{ex.val}</span>
                  </div>
                ))}
              </div>
              <Button
                className="w-full bg-white text-primary hover:bg-white/90 h-10 text-sm font-semibold rounded-xl"
                onClick={scrollToContact}
              >
                Join the Waitlist
              </Button>
            </motion.div>

            {/* Mobile Notary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/6 border border-white/25 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-1">
                <Car className="w-5 h-5 text-white/85" />
                <h3 className="text-lg font-heading font-bold text-white">Mobile Notary</h3>
                <span className="text-[10px] font-semibold text-white bg-white/10 border border-white/25 rounded-full px-2.5 py-0.5">Coming Soon</span>
              </div>
              <div className="text-xs text-white/70 mb-5">Kansas City Metro — we come to you</div>
              <div className="space-y-3 mb-4">
                {mobileNotaryRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/6 last:border-0 text-sm">
                    <span className="text-white/80">{row.label}</span>
                    <span className="text-white/90 font-medium text-right ml-4">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-4 mb-5">
                <div className="text-xs font-semibold text-white/75 uppercase tracking-wider mb-3">Pricing Examples</div>
                {mobileExamples.map((ex) => (
                  <div key={ex.label} className="flex justify-between items-center py-1.5 text-sm">
                    <span className="text-white/80">{ex.label}</span>
                    <span className="text-white font-semibold">{ex.val}</span>
                  </div>
                ))}
              </div>
              <Button
                className="w-full bg-transparent border border-white/25 text-white hover:bg-white/10 h-10 text-sm font-semibold rounded-xl"
                onClick={() => navigate(`${BASE}/notary-services`)}
              >
                Join the Waitlist
              </Button>
            </motion.div>
          </div>

          {/* Notary disclosure */}
          <div className="max-w-5xl mx-auto mt-5">
            <div className="bg-white/4 border border-white/8 rounded-xl px-5 py-4 flex gap-3 items-start">
              <Scale className="w-4 h-4 text-white/75 shrink-0 mt-0.5" />
              <p className="text-[11px] text-white/70 leading-relaxed">
                Missouri regulates certain notarial fees. Travel, technology, and convenience fees are separate from the notarial act itself and are disclosed before scheduling. Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Not sure which package is right?
          </h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            Most clients choose the Growth package to get everything set up correctly from day one. Book a free call — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-13 px-8 font-semibold rounded-xl"
              onClick={scrollToContact}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border border-white/25 text-white hover:bg-white/10 h-13 px-8 font-semibold rounded-xl"
              onClick={() => (window.location.href = "tel:8165530595")}
            >
              Book a Free Call
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
