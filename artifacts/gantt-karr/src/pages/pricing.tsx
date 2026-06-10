import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Link } from "wouter";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { breadcrumbSchema } from "@/lib/schema";

const NAVY = "#1a2f4e";
const GOLD = "#C9A84C";
const GREEN = "#4CAF7C";

function BadgeMostPopular() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5" style={{ background: GOLD, color: NAVY }}>
      Most Popular
    </span>
  );
}
function BadgeBestValue() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 text-white" style={{ background: GREEN }}>
      Best Value
    </span>
  );
}
function BadgeMoKs() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 border" style={{ borderColor: GOLD, color: GOLD }}>
      MO &amp; KS Only
    </span>
  );
}

function PricingRow({
  service, price, note, addon, alt,
}: {
  service: string; price: string; note?: string; addon?: boolean; alt?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 sm:gap-4 px-5 py-4 rounded-xl ${alt ? "" : "bg-[#FAFAFA]"} border border-gray-100`}>
      <p className={`font-semibold text-sm leading-snug ${addon ? "pl-3 text-gray-600 font-normal text-xs" : ""}`} style={addon ? {} : { color: NAVY }}>
        {addon ? `+ ${service}` : service}
      </p>
      <p className="font-bold text-sm whitespace-nowrap" style={{ color: GOLD }}>{price}</p>
      {note && <p className="text-xs text-gray-400 leading-snug">{note}</p>}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>{eyebrow}</p>
      <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-2">{subtitle}</p>}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors">
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
  { q: "Are there any hidden fees?", a: "Never. We disclose every fee before your service begins — it's our commitment and it's the law. What you see here is what you pay." },
  { q: "Are state filing fees included in formation prices?", a: "No — state fees are separate and passed through at cost. For example, Missouri LLC filing is $50. We will always tell you the exact state fee before you commit." },
  { q: "Do you charge extra for same-day service?", a: "Yes — rush fees apply for appointments booked with less than 4 hours notice. All rush fees are clearly listed on this page." },
  { q: "Can I book online without calling anyone?", a: "Yes. Anna AI handles all bookings 24/7. You don't have to talk to a person to get started." },
  { q: "What's included in the Registered Agent service?", a: "You get a professional address for state correspondence, immediate forwarding of official notices, and compliance reminders based on your plan tier." },
  { q: "What is BOI Compliance Watch?", a: "As of 2026, BOI reporting is NOT currently required for US-formed companies. Our BOI Compliance Watch monitors FinCEN rule changes and notifies you immediately if it becomes required. If filing becomes required, we file for you at no additional charge." },
  { q: "Do you serve all 7 states equally?", a: "Mobile notary is Missouri and Kansas only. RON serves 20 states. Business formation services are available in all 7 states and beyond. Loan signing is MO and KS." },
  { q: "What forms of payment do you accept?", a: "All major credit/debit cards, Zelle, and Venmo Business. Payment is collected at time of booking for RON and at appointment for mobile." },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Business Formation & Notary Services"
        description="Full transparent pricing for Gantt Key Formation Group — LLC formation from $597, RON from $35, mobile notary, loan signing, dissolution, amendments, and startup bundles. No hidden fees."
        schema={[breadcrumbSchema([{ name: "Pricing", href: "/pricing" }])]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Transparent Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-white">
            Every service. Every price. No surprises.
          </h1>
          <p className="text-primary-foreground/65 text-lg mb-10 leading-relaxed">
            All fees disclosed before we start — always. Book via Anna AI 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
            {["No hidden fees", "State fees disclosed upfront", "Anna AI books 24/7", "Formation · Notary · Compliance"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5" style={{ color: GOLD }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1. FORMATION ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Form Your Business" title="Formation Services" subtitle="All prices include document preparation, filing coordination, and delivery. State filing fees are separate." />
          <div className="space-y-2 mb-10">
            {[
              { service: "LLC Formation (single state)", price: "$597", note: "Articles of Organization, Operating Agreement, EIN guidance, registered agent coordination, document delivery" },
              { service: "LLC Formation Package", price: "$797", note: "Everything above + DBA registration + compliance calendar", alt: true },
              { service: "S-Corp Election (Form 2553)", price: "$297", note: "Form preparation, filing guidance, confirmation tracking" },
              { service: "Corporation Formation (C-Corp or S-Corp)", price: "$797", note: "Articles of Incorporation, bylaws template, EIN guidance, registered agent", alt: true },
              { service: "Non-Profit Formation", price: "$997", note: "Articles of Incorporation, bylaws, EIN, initial 1023 prep guidance" },
              { service: "Series LLC Formation", price: "$897", note: "Master LLC + first series setup, operating agreement, EIN guidance", alt: true },
              { service: "Multi-Member LLC Formation", price: "$697", note: "Articles of Organization, multi-member operating agreement, EIN guidance" },
              { service: "Foreign Entity Registration (expand to new state)", price: "$397 + state fee", note: "Certificate of Authority filing, registered agent in new state", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>

          {/* Starter Bundle callout */}
          <div className="rounded-2xl border-2 p-7" style={{ borderColor: GOLD, background: "#FFFDF7" }}>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div>
                <div className="mb-2"><BadgeMostPopular /></div>
                <h3 className="font-serif text-xl font-bold" style={{ color: NAVY }}>Starter Business Package</h3>
              </div>
              <p className="text-3xl font-bold" style={{ color: GOLD }}>$797</p>
            </div>
            <ul className="space-y-2 mb-6">
              {["LLC formation", "EIN application", "Operating Agreement", "Registered Agent — 1st year included"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />{item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mb-5">State filing fees separate. See full packages below.</p>
            <Link href="/formation-questionnaire">
              <span className="inline-block font-semibold px-7 py-3 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: GOLD, color: NAVY }}>
                Start My Formation →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. DISSOLUTION ──────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Close Your Business" title="Dissolution Services" subtitle="State fees are separate and passed through at cost." />
          <div className="space-y-2">
            {[
              { service: "Articles of Dissolution (single state)", price: "$197 + state fee", note: "Document preparation, state filing coordination, confirmation delivery" },
              { service: "Dissolution + Final Annual Report", price: "$297 + state fee", note: "Everything above + final annual report filing", alt: true },
              { service: "Multi-Entity Dissolution Package (up to 3 entities)", price: "$497 + state fees", note: "All documentation handled" },
              { service: "Voluntary Dissolution with Wind-Down Checklist", price: "$397", note: "Dissolution filing + EIN closure, bank account closure, contract termination, license cancellation checklist", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
        </div>
      </section>

      {/* ── 3. AMENDMENTS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Update Your Business" title="Amendment Services" subtitle="Need to change your name, address, members, or agent? We handle it." />
          <div className="space-y-2">
            {[
              { service: "Articles of Amendment (name change, address, member change)", price: "$197 + state fee", note: "" },
              { service: "Operating Agreement Amendment", price: "$147", note: "", alt: true },
              { service: "Ownership Transfer / Member Change", price: "$297 + state fee", note: "Amendment filing + updated operating agreement" },
              { service: "Registered Agent Change", price: "$97 + state fee", note: "", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
        </div>
      </section>

      {/* ── 4. ANNUAL COMPLIANCE ────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Stay Compliant" title="Annual Compliance Services" subtitle="Keep your business in good standing year after year." />
          <div className="space-y-2">
            {[
              { service: "Registered Agent Service", price: "$99/entity/year", note: "Professional state correspondence address" },
              { service: "Registered Agent + Compliance Reminders", price: "$149/entity/year", note: "Agent service + proactive deadline alerts", alt: true },
              { service: "Registered Agent + Annual Report Filing", price: "$197/entity/year", note: "Full-service annual compliance" },
              { service: "Annual Report Filing (standalone)", price: "$147/entity + state fee", note: "", alt: true },
              { service: "Compliance Calendar Setup", price: "$147 one-time", note: "Custom deadlines mapped to your entities and states" },
              { service: "BOI Compliance Watch", price: "$47/entity/year", note: "Monitors FinCEN rule changes — if filing becomes required, we file at no additional charge. NOT currently required (2026).", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
          <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50/60 px-5 py-4 text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-800">BOI Reporting Note:</strong> As of 2026, Beneficial Ownership Information (BOI) reporting is <strong>not currently required</strong> for US-formed companies following a federal court ruling. Our Compliance Watch keeps you informed and handles filing the moment it becomes required.
          </div>
        </div>
      </section>

      {/* ── 5. DOCUMENT SERVICES ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Documents & Paperwork" title="Document Services" subtitle="Individual documents, agreements, and filings prepared professionally." />
          <div className="space-y-2">
            {[
              { service: "Operating Agreement (standalone)", price: "$125", note: "" },
              { service: "Custom Operating Agreement", price: "$247", note: "Tailored to your entity structure and state", alt: true },
              { service: "Corporate Bylaws", price: "$197", note: "" },
              { service: "Partnership Agreement", price: "$247", note: "", alt: true },
              { service: "Non-Disclosure Agreement (NDA)", price: "$97", note: "" },
              { service: "Independent Contractor Agreement", price: "$97", note: "", alt: true },
              { service: "Service Agreement / Client Contract", price: "$147", note: "" },
              { service: "EIN Application Service", price: "$97", note: "Federal Tax ID — required for banking and hiring", alt: true },
              { service: "Seller's Permit Application", price: "$97 + state fee", note: "" },
              { service: "State Tax ID Application", price: "$97", note: "", alt: true },
              { service: "Business License Research (by state/city)", price: "$147", note: "" },
              { service: "Business Name Availability Search (3 states)", price: "$47", note: "Before you file — save time and money", alt: true },
              { service: "Certified Copy of Articles", price: "$47", note: "" },
              { service: "Digital Document Vault (1 year)", price: "$97", note: "Secure storage for all your business documents", alt: true },
              { service: "Annual Compliance Review Call (30 min)", price: "$97", note: "" },
              { service: "Rush Document Preparation", price: "+$75", note: "Add to any service", addon: true, alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
        </div>
      </section>

      {/* ── 6. DBA SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Doing Business As" title="DBA Services" subtitle="Register, renew, or expand your trade names across states." />
          <div className="space-y-2">
            {[
              { service: "DBA Registration (single state)", price: "$197 + state fee", note: "" },
              { service: "DBA + Operating Agreement Amendment", price: "$297 + state fee", note: "", alt: true },
              { service: "DBA Renewal", price: "$97 + state fee", note: "" },
              { service: "Multi-DBA Package (3 DBAs)", price: "$497 + state fees", note: "Best value for multiple brand names", alt: true },
            ].map((row) => <PricingRow key={row.service} {...row} />)}
          </div>
        </div>
      </section>

      {/* ── 7. PACKAGES ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeader eyebrow="Bundles — Save More" title="Complete Business Packages" subtitle="Everything your business needs — formation, compliance, and launch — bundled at one price." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Starter */}
            <div className="rounded-2xl border-2 p-7 bg-white" style={{ borderColor: GOLD }}>
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <BadgeMostPopular />
                <p className="text-2xl font-bold" style={{ color: GOLD }}>$797</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 mt-2" style={{ color: NAVY }}>Starter Business Package</h3>
              <ul className="space-y-2">
                {["LLC formation", "EIN application", "Operating Agreement", "Registered Agent — 1st year"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Builder */}
            <div className="rounded-2xl border border-border p-7 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: NAVY }}>Business Builder</span>
                <p className="text-2xl font-bold" style={{ color: GOLD }}>$1,197</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 mt-2" style={{ color: NAVY }}>Business Builder Package</h3>
              <ul className="space-y-2">
                {["Everything in Starter", "DBA registration", "S-Corp election filing"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Launch */}
            <div className="rounded-2xl border-2 p-7 bg-white" style={{ borderColor: GREEN }}>
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <BadgeBestValue />
                <p className="text-2xl font-bold" style={{ color: GOLD }}>$1,597</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 mt-2" style={{ color: NAVY }}>Full Launch Package</h3>
              <ul className="space-y-2">
                {[
                  "Everything in Business Builder",
                  "Annual report filing",
                  "Compliance calendar setup",
                  "BOI Compliance Watch — 1st year",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Entity Cleanup */}
            <div className="rounded-2xl border border-border p-7 bg-white">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: NAVY }}>Cleanup &amp; Repair</span>
                <p className="text-2xl font-bold" style={{ color: GOLD }}>$997</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 mt-2" style={{ color: NAVY }}>Entity Cleanup Package</h3>
              <ul className="space-y-2">
                {[
                  "Amendment filing",
                  "Operating Agreement update",
                  "Registered agent update",
                  "Compliance review",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Multi-Entity */}
            <div className="rounded-2xl border border-border p-7 bg-white md:col-span-2">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: NAVY }}>Multiple Entities</span>
                <p className="text-2xl font-bold" style={{ color: GOLD }}>$1,497</p>
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 mt-2" style={{ color: NAVY }}>Multi-Entity Package — 3 Entities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["3 LLC formations", "3 EIN applications", "3 Operating Agreements", "3 Registered Agent services — 1st year each", "Ideal for investors and holding structures", ""].map((item, i) => item ? (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 list-none">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />{item}
                  </li>
                ) : null)}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/formation-questionnaire">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: GOLD, color: NAVY }}>
                Start My Formation →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. NOTARY — MOBILE ──────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeader eyebrow="Notary Services" title="Mobile · Online · Loan Signing" subtitle="All appointments scheduled via Anna AI. Attorney disclaimer applies." />

          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="font-bold text-lg" style={{ color: NAVY }}>Mobile Notary</h3>
              <BadgeMoKs />
            </div>
            <div className="space-y-2">
              {[
                { service: "General Mobile Notary — flat rate", price: "$75", note: "Includes first signature" },
                { service: "Per additional signature", price: "$5/signature", note: "Missouri state maximum", alt: true, addon: true },
                { service: "Travel beyond 20 miles", price: "$0.67/mile", note: "Round-trip mileage beyond 20-mile radius", addon: true },
                { service: "After-hours / Weekend", price: "+$50", note: "Standard rate + surcharge", addon: true, alt: true },
                { service: "Rush / Same-Day (under 4 hrs notice)", price: "+$75", note: "", addon: true },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
          </div>

          {/* RON */}
          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-bold text-lg" style={{ color: NAVY }}>Remote Online Notarization (RON)</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">Serving all 20 RON-authorized states. Performed from Missouri. 100% legal and valid. Real credentialed notary — not an automated queue.</p>
            <div className="space-y-2">
              {[
                { service: "Single Document RON", price: "$35/document", note: "Secure video session, electronic notarization, digital delivery" },
                { service: "After-hours / Weekend", price: "+$50", note: "Surcharge on top of standard rate", addon: true, alt: true },
                { service: "Rush / Same-Day", price: "+$75", note: "", addon: true },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-4 text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Note:</strong> RON is performed under our Missouri commission and is valid in all 20 states under interstate recognition law. Signer can be located anywhere within those states.
            </div>
          </div>

          {/* Loan Signing */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="font-bold text-lg" style={{ color: NAVY }}>Loan Signing Agent</h3>
              <BadgeMoKs />
            </div>
            <div className="space-y-2">
              {[
                { service: "Loan Signing (standard)", price: "$125–$150", note: "Full loan package signing, lender coordination, same-day scan back" },
                { service: "After-hours / Weekend", price: "+$50", note: "Surcharge on top of standard rate", addon: true, alt: true },
                { service: "Rush / Same-Day (under 4 hrs)", price: "+$75", note: "", addon: true },
              ].map((row) => <PricingRow key={row.service} {...row} />)}
            </div>
            <p className="text-xs text-gray-400 mt-4">For detailed loan signing pricing by package type, visit the <Link href="/loan-signing"><span className="underline cursor-pointer">Loan Signing page</span></Link>.</p>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: NAVY }}>
            Pricing Questions? We've Got Answers.
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-primary-foreground/65 text-lg mb-10 leading-relaxed">
            Anna AI is available 24/7 to book your appointment or start your formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/formation-questionnaire">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: GOLD, color: NAVY }}>
                Start My Formation →
              </span>
            </Link>
            <Link href="/consultation">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer text-white border border-white/30 hover:bg-white/10 transition-colors">
                Book Free Consultation
              </span>
            </Link>
          </div>
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
