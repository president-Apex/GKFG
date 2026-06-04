import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Link } from "wouter";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { breadcrumbSchema } from "@/lib/schema";

// ─── Badge components ─────────────────────────────────────────────────────
function BadgeMostPopular() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5" style={{ background: "#C9A84C", color: "#1a2f4e" }}>
      Most Popular
    </span>
  );
}
function BadgeBestValue() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 text-white" style={{ background: "#4CAF7C" }}>
      Best Value
    </span>
  );
}
function BadgeMoKs() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 border" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>
      MO &amp; KS Exclusive
    </span>
  );
}
function BadgeComingSoon() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 border border-gray-300 text-gray-400">
      Coming Soon
    </span>
  );
}

// ─── Pricing table row ────────────────────────────────────────────────────
function PricingRow({
  service, price, note, addon, alt,
}: {
  service: string;
  price: string;
  note?: string;
  addon?: boolean;
  alt?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 sm:gap-4 px-5 py-4 rounded-xl ${alt ? "" : "bg-[#FAFAFA]"} border border-gray-100`}>
      <p className={`font-semibold text-sm leading-snug ${addon ? "pl-3 text-gray-600 font-normal text-xs" : ""}`} style={addon ? {} : { color: "#1a2f4e" }}>
        {addon ? `+ ${service}` : service}
      </p>
      <p className="font-bold text-sm whitespace-nowrap" style={{ color: "#C9A84C" }}>{price}</p>
      {note && <p className="text-xs text-gray-400 leading-snug">{note}</p>}
    </div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-sm text-foreground">{q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-secondary flex-shrink-0" /> : <ChevronDown className="h-4 w-4 text-secondary flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

const faqs = [
  { q: "Are there any hidden fees?", a: "Never. We disclose every fee before your appointment begins — it's our compliance promise and it's the law. What you see here is what you pay." },
  { q: "Are state filing fees included?", a: "No — state fees are separate and passed through at cost. For example, Missouri LLC filing is $50. We'll always tell you the exact state fee before you commit." },
  { q: "Do you charge extra for same-day service?", a: "Yes — rush fees apply for appointments booked with less than 4 hours notice. All rush fees are listed above." },
  { q: "Can I book online without calling anyone?", a: "Yes. Anna AI handles all bookings 24/7. You don't have to talk to a person to get started." },
  { q: "Do you come to me, or do I come to you?", a: "We come to you (mobile) or meet you online (RON). There is no in-person office." },
  { q: "Do you serve all 7 states equally?", a: "Mobile services are currently available in Missouri and Kansas. RON serves all 7 states. Loan signing is available in MO and KS. Additional states coming as commissions are added." },
  { q: "What forms of payment do you accept?", a: "All major credit/debit cards, Zelle, and Venmo Business. Payment is collected at time of booking for RON and at appointment for mobile." },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Business Formation & Notary Services"
        description="Full transparent pricing for Gantt Key Formation Group — LLC formation from $297, RON notarization from $25, mobile notary, loan signing, and startup bundles. No hidden fees."
        schema={[breadcrumbSchema([{ name: "Pricing", href: "/pricing" }])]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-white">
            Every service. Every price. No surprises.
          </h1>
          <p className="text-primary-foreground/65 text-lg mb-10 leading-relaxed">
            We disclose all fees before we start — always. Book via Anna AI 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
            {["No hidden fees", "Disclosed before every appointment", "Anna AI books 24/7", "7 states served"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-secondary" />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Business Formation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Form Your Business</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>Formation & Startup Services</h2>

          <div className="space-y-2 mb-10">
            {[
              { service: "LLC Formation Assistance", price: "$297", note: "State filing coordination + document support. State filing fees separate." },
              { service: "Corporation (S-Corp or C-Corp) Filing", price: "$347", note: "Articles of incorporation + coordination", alt: true },
              { service: "EIN Application Assistance", price: "$75", note: "Federal Tax ID — required for banking and hiring" },
              { service: "Operating Agreement (notarized)", price: "$125", note: "Drafted to your state + notarized by GKFG", alt: true },
              { service: "DBA / Assumed Name Filing", price: "$97", note: "+ state filing fees" },
              { service: "BOI Reporting Assistance", price: "$97", note: "Beneficial Ownership Information document support", alt: true },
              { service: "Missouri Registered Agent Service", price: "$149/yr", note: "Missouri & Kansas clients" },
              { service: "Business Name Search + Availability Report", price: "$49", note: "Prior to filing — save time and money", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>

          {/* Bundle callout */}
          <div className="rounded-2xl border-2 p-7" style={{ borderColor: "#C9A84C", background: "#FFFDF7" }}>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <div className="mb-2"><BadgeMostPopular /></div>
                <h3 className="font-serif text-xl font-bold" style={{ color: "#1a2f4e" }}>LLC Launch Complete Package</h3>
              </div>
              <p className="text-3xl font-bold" style={{ color: "#C9A84C" }}>$397</p>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "LLC filing coordination",
                "EIN application assistance",
                "Operating agreement (notarized)",
                "Missouri Registered Agent — 1st year included",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mb-5">Save $249 vs. purchasing separately.</p>
            <Link href="/services/anna-ai-intake">
              <span className="inline-block font-semibold px-7 py-3 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: "#C9A84C", color: "#1a2f4e" }}>
                Get Started →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Notary Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Notary Services</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{ color: "#1a2f4e" }}>Mobile · Online · Loan Signing</h2>
          <p className="text-gray-500 text-sm mb-14">Serving MO, KS, AZ, TN, NC, GA, and MT. All appointments scheduled in advance via Anna AI.</p>

          {/* 2A — RON */}
          <div className="mb-14">
            <h3 className="font-bold text-lg mb-6" style={{ color: "#1a2f4e" }}>Remote Online Notarization (RON)</h3>
            <div className="space-y-2 mb-6">
              {[
                { service: "Single document (1 signature)", price: "$25", note: "Via secure video call. Signer can be anywhere." },
                { service: "Additional signatures (same session)", price: "$15 each", note: "", alt: true },
                { service: "Multi-party session (2+ signers)", price: "$25 + $15/additional", note: "" },
                { service: "Expedited (under 2 hours)", price: "+$25", note: "Same-day rush", addon: true, alt: true },
                { service: "After hours (6pm–9pm)", price: "+$20", note: "", addon: true },
                { service: "Weekend", price: "+$25", note: "", addon: true, alt: true },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4 text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Georgia clients:</strong> RON is performed under our Missouri commission and is valid in Georgia under interstate recognition law.
            </div>
          </div>

          {/* 2B — Mobile Notary */}
          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="font-bold text-lg" style={{ color: "#1a2f4e" }}>Mobile Notary</h3>
              <BadgeMoKs />
            </div>
            <div className="space-y-2">
              {[
                { service: "0–10 miles", price: "$65", note: "Includes up to 3 signatures" },
                { service: "11–25 miles", price: "$85", note: "Includes up to 3 signatures", alt: true },
                { service: "26–40 miles", price: "$110", note: "" },
                { service: "40+ miles", price: "Custom quote", note: "Book via Anna AI", alt: true },
                { service: "Additional signatures (after first 3)", price: "$10 each", note: "", addon: true },
                { service: "After-hours (6pm–9pm)", price: "+$30", note: "", addon: true, alt: true },
                { service: "Weekend / Holiday", price: "+$40", note: "", addon: true },
                { service: "Same-day / Rush (under 4 hrs notice)", price: "+$50", note: "", addon: true, alt: true },
                { service: "Hospital / Care Facility", price: "+$25", note: "", addon: true },
                { service: "Correctional Facility", price: "+$50", note: "Advance coordination required", addon: true, alt: true },
                { service: "Document printing (per page)", price: "$0.25/page", note: "", addon: true },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
          </div>

          {/* 2C — Loan Signing */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="font-bold text-lg" style={{ color: "#1a2f4e" }}>Loan Signing Agent</h3>
              <BadgeMoKs />
            </div>
            <div className="space-y-2">
              {[
                { service: "Purchase Closing", price: "$150", note: "Within 20-mile radius" },
                { service: "Refinance Signing", price: "$125", note: "Within 20-mile radius", alt: true },
                { service: "Reverse Mortgage", price: "$175", note: "Complex package" },
                { service: "HELOC / Home Equity", price: "$125", note: "", alt: true },
                { service: "Seller's Package Only", price: "$100", note: "" },
                { service: "Hybrid eClosing", price: "$150", note: "", alt: true },
                { service: "Construction Loan Closing", price: "$175", note: "" },
                { service: "Distance surcharge (21–40 miles)", price: "+$35", note: "", addon: true, alt: true },
                { service: "Distance surcharge (41–60 miles)", price: "+$60", note: "", addon: true },
                { service: "After-hours", price: "+$40", note: "", addon: true, alt: true },
                { service: "Weekend / Holiday", price: "+$50", note: "", addon: true },
                { service: "Same-day Rush (under 4 hrs)", price: "+$75", note: "", addon: true, alt: true },
                { service: "Scanback", price: "+$25", note: "Scan + email complete package", addon: true },
                { service: "Second signer (same location)", price: "+$25", note: "", addon: true, alt: true },
                { service: "No-Show / Late Cancel (under 2 hrs)", price: "$50 flat", note: "Non-refundable" },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Specialty Notary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Specialty Services</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>Specialized Notarizations</h2>
          <div className="space-y-2">
            {[
              { service: "Power of Attorney (notarization)", price: "$45", note: "Includes document walkthrough" },
              { service: "Healthcare Directive / Living Will", price: "$45", note: "Handled with care", alt: true },
              { service: "Trust Document Notarization", price: "$65", note: "Multi-page, complex" },
              { service: "Apostille Coordination", price: "$75 + state fees", note: "For international document use", alt: true },
              { service: "I-9 Employment Verification", price: "$35/employee", note: "For small business HR" },
              { service: "Vehicle Title Notarization", price: "$25", note: "", alt: true },
              { service: "Affidavit Notarization", price: "$25", note: "" },
              { service: "Promissory Note Notarization", price: "$35", note: "", alt: true },
              { service: "Immigration Document Notarization", price: "$45", note: "" },
              { service: "Certified Copy (per page)", price: "$5/page", note: "State minimum $3", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
        </div>
      </section>

      {/* Section 4 — Bundles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Bundles — Save More</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-12" style={{ color: "#1a2f4e" }}>Everything Your Business Needs to Launch Right.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bundle 1 — Most Popular */}
            <div className="rounded-2xl border-2 p-7 bg-white" style={{ borderColor: "#C9A84C" }}>
              <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
                <BadgeMostPopular />
                <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>$147</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: "#1a2f4e" }}>Business Launch Notary Bundle</h3>
              <ul className="space-y-2">
                {[
                  "Notarization of up to 3 business documents",
                  "Operating agreement, EIN letter, bank resolution",
                  "RON or scheduled mobile",
                  "30-day follow-up discount (15% off next notarization)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bundle 2 */}
            <div className="rounded-2xl border border-border p-7 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-transparent">—</span>
                <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>$397</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: "#1a2f4e" }}>LLC Formation + Notary Complete</h3>
              <ul className="space-y-2">
                {[
                  "LLC state filing coordination",
                  "EIN application assistance",
                  "Operating agreement notarization",
                  "Bank resolution letter notarization",
                  "Missouri Registered Agent (1st year)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bundle 3 */}
            <div className="rounded-2xl border border-border p-7 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-transparent">—</span>
                <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>$297</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: "#1a2f4e" }}>Corporate Closing Package</h3>
              <ul className="space-y-2">
                {[
                  "Articles of dissolution notarization",
                  "Transfer of ownership document notarization",
                  "Up to 5 signature notarizations",
                  "RON available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bundle 4 — Best Value */}
            <div className="rounded-2xl border-2 p-7 bg-white" style={{ borderColor: "#4CAF7C" }}>
              <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
                <BadgeBestValue />
                <p className="text-2xl font-bold" style={{ color: "#C9A84C" }}>$497/yr</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: "#1a2f4e" }}>Annual Notary Retainer</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Up to 20 notarizations per year",
                  "RON or mobile",
                  "Priority same-day scheduling",
                  "10% off all loan signings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#4CAF7C" }} />{item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400">Ideal for: Real estate investors, landlords, active LLCs</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services/anna-ai-intake">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: "#C9A84C", color: "#1a2f4e" }}>
                Book via Anna AI →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">More Ways We Help</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>Additional Business Services</h2>
          <div className="space-y-2">
            <PricingRow service="Startup Consultation (30 min)" price="FREE" note="Book via Anna AI" />
            <PricingRow service="Business Structure Review" price="$97" note="LLC vs S-Corp + entity analysis" alt />
            <PricingRow service="Annual Report Reminder + Filing Coordination" price="$75/yr" note="Never miss a deadline" />
            <PricingRow service="Operating Agreement Update / Amendment" price="$97" note="For existing LLCs" alt />
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 sm:gap-4 px-5 py-4 rounded-xl border border-gray-100 bg-[#FAFAFA]">
              <p className="font-semibold text-sm leading-snug" style={{ color: "#1a2f4e" }}>Registered Agent — AZ / TN / NC / GA / MT</p>
              <div><BadgeComingSoon /></div>
              <p className="text-xs text-gray-400 leading-snug">Other states launching soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1a2f4e" }}>
            Pricing Questions? We've Got Answers.
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* Section 7 — Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/65 text-lg mb-10 leading-relaxed">
            Anna AI is available 24/7 to book your appointment or start your formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/how-it-works">
              <span className="inline-block font-bold px-8 py-4 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: "#C9A84C", color: "#1a2f4e" }}>
                Start My Business Setup →
              </span>
            </Link>
            <Link href="/services/anna-ai-intake">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer border border-white/25 text-white hover:bg-white/10 transition-colors">
                Book a Notary Appointment →
              </span>
            </Link>
          </div>
          <p className="text-primary-foreground/35 text-xs max-w-lg mx-auto leading-relaxed">
            Gantt Key Formation Group is not a law firm and does not provide legal advice. We are a document preparation and notary services company. State filing fees are separate from our service fees and are passed through at cost.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="Gantt Key Formation Group is not a law firm and does not provide legal advice, legal representation, tax advice, or financial advice. Notarization does not constitute legal review of document contents. State filing fees are separate from our service fees and are passed through at cost. All prices listed are for our document preparation and notary services only." />
        </div>
      </section>
    </>
  );
}
