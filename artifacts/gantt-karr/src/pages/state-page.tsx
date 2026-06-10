import { useState } from "react";
import { useParams, Link } from "wouter";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { CheckCircle, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { stateData, allStates, type StateData } from "@/data/states";

function hasNoAnnualFee(state: StateData) {
  const v = state.fees.annualReport.toLowerCase();
  return v.startsWith("none") || v.startsWith("$0");
}

function buildServices(state: StateData) {
  const services: { name: string; note?: string }[] = [
    { name: "LLC Formation" },
    { name: "Corporation Formation (S-Corp / C-Corp)" },
    { name: "DBA / Fictitious Name Registration" },
    { name: "Foreign LLC Qualification" },
    { name: "Name Availability Search" },
    { name: "EIN Assistance" },
    { name: "Federal Trademark Filing" },
    { name: "Domain Registration" },
    { name: "Annual Report Filing", note: hasNoAnnualFee(state) ? "Not required in this state" : undefined },
    { name: "Remote Online Notarization (RON)" },
  ];
  if (state.registeredAgent) {
    services.push({ name: "Registered Agent", note: "Provided directly by GKFG" });
  }
  if (state.mobileNotary) {
    services.push({ name: "Mobile Notary (in-person)", note: "MO & KS Exclusive" });
  }
  if (state.loanSigning) {
    services.push({ name: "Loan Signing Agent", note: "MO & KS Exclusive" });
  }
  return services;
}

function buildFaqs(state: StateData) {
  const noAnnual = hasNoAnnualFee(state);
  const raAnswer = state.registeredAgent
    ? `Yes — every ${state.name} LLC must list a registered agent with a physical in-state address. GKFG provides registered agent service directly in ${state.name}.`
    : `Yes — every ${state.name} LLC must list a registered agent with a physical in-state address. GKFG does not act as registered agent in ${state.name}, but we connect you with a vetted partner who does.`;
  return [
    {
      q: `How long does it take to form an LLC in ${state.name}?`,
      a: `Most ${state.name} LLC filings are processed within a few business days. We prepare and submit your Articles of Organization, then notify you the moment your LLC is active.`,
    },
    {
      q: `Does ${state.name} require an annual report?`,
      a: noAnnual
        ? `No — ${state.name} does not charge an annual LLC report fee. Your LLC stays active as long as your registered agent information is current.`
        : `Yes — ${state.name} requires an annual report (${state.fees.annualReport}). We can file it for you each year so you never fall out of good standing.`,
    },
    {
      q: `Can an out-of-state company form my ${state.name} LLC?`,
      a: `Yes. GKFG prepares and files ${state.name} formations remotely from our Missouri base — you never need to visit a state office. If you're registering an existing out-of-state company, we handle the foreign LLC qualification (${state.fees.foreignLlc}).`,
    },
    {
      q: `What does it cost to form an LLC in ${state.name}?`,
      a: `The ${state.name} state filing fee is ${state.fees.llcFormation}, and our GKFG Starter service is ${state.fees.gkfgStarterFee} — ${state.fees.totalStarter} total to get started. ${noAnnual ? "There is no annual report fee in this state." : `The annual report fee afterward is ${state.fees.annualReport}.`}`,
    },
    {
      q: `Do I need a registered agent in ${state.name}?`,
      a: raAnswer,
    },
  ];
}

const PROCESS_STEPS = [
  { title: "Tell us about your business", body: "Share your details through Anna AI or a quick consultation. We confirm your name, structure, and goals." },
  { title: "We prepare your filing", body: "We draft your Articles of Organization, EIN application, and any supporting documents — accurately, the first time." },
  { title: "We file with the state", body: "We submit everything to the state and pay the filing fee on your behalf, then track it to approval." },
  { title: "You're open for business", body: "We deliver your formed LLC, EIN, and notarized documents — and keep you compliant year after year." },
];

function StatusBadge({ note }: { note?: string }) {
  return (
    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold text-sm justify-end">
      <span>✅</span>
      {note && <span className="text-xs text-gray-400 font-normal">— {note}</span>}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
      >
        <span className="font-semibold text-sm text-foreground">{q}</span>
        {open
          ? <ChevronUp className="h-4 w-4 text-secondary flex-shrink-0" />
          : <ChevronDown className="h-4 w-4 text-secondary flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function StatePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const state = stateData[slug];

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">State not found</h1>
          <Link href="/states" className="text-secondary underline">View all states →</Link>
        </div>
      </div>
    );
  }

  const accent = state.accentColor;
  const services = buildServices(state);
  const faqs = buildFaqs(state);
  const heroCta = `Start My ${state.name} LLC →`;
  const relatedStates = state.neighbors
    .map((n) => allStates.find((s) => s.slug === n))
    .filter((s): s is StateData => Boolean(s));

  const feeRows: { label: string; value: string }[] = [
    { label: "State LLC filing fee", value: state.fees.llcFormation },
    { label: "Annual report", value: state.fees.annualReport },
    { label: "DBA / fictitious name", value: state.fees.dbaFee },
    { label: "Foreign LLC qualification", value: state.fees.foreignLlc },
    { label: "Name reservation (optional)", value: state.fees.nameReservation },
    { label: "GKFG Starter service", value: state.fees.gkfgStarterFee },
  ];

  return (
    <>
      <SEO title={state.seoTitle} description={state.metaDescription} />

      {/* Section 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />
        <div className="container mx-auto px-4 max-w-4xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full border"
            style={{ borderColor: `${accent}60`, color: accent }}
          >
            {state.region}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Form Your {state.name} LLC — Fast, Affordable, Done Right.
          </h1>
          <p className="text-primary-foreground/65 text-lg leading-relaxed mb-10 max-w-2xl">
            {state.heroSubheadline}
          </p>
          <Link href="/how-it-works">
            <span
              className="inline-block font-bold px-8 py-4 rounded-xl text-sm cursor-pointer transition-opacity hover:opacity-90"
              style={{ background: accent, color: accent === "#C9A84C" ? "#1a2f4e" : "#fff" }}
            >
              {heroCta}
            </span>
          </Link>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
              <CheckCircle className="h-3 w-3" style={{ color: accent }} />
              {state.fees.llcFormation} state filing fee
            </span>
            <span className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
              <CheckCircle className="h-3 w-3" style={{ color: accent }} />
              {hasNoAnnualFee(state) ? "No annual report" : `Annual report: ${state.fees.annualReport}`}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
              <CheckCircle className="h-3 w-3" style={{ color: accent }} />
              RON available
            </span>
            <span className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
              <CheckCircle className="h-3 w-3" style={{ color: accent }} />
              {state.fees.totalStarter} to get started
            </span>
          </div>
        </div>
      </section>

      {/* Section 2 — What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>What We Offer</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            Services in {state.name}
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] bg-muted/50 px-5 py-3 border-b border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available</p>
            </div>
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 items-center ${i < services.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "" : "bg-muted/20"}`}
              >
                <p className="font-semibold text-sm" style={{ color: "#1a2f4e" }}>{svc.name}</p>
                <StatusBadge note={svc.note} />
              </div>
            ))}
          </div>
          {state.showMoKsBadge && (
            <p className="mt-4 text-xs text-gray-400">
              <span className="font-bold text-gray-600">MO &amp; KS Exclusive</span> — in-person mobile notary and loan signing are available only to clients in Missouri and Kansas.
            </p>
          )}
        </div>
      </section>

      {/* Section 3 — Filing Fee Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>Transparent Pricing</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1a2f4e" }}>
            {state.name} Filing Fee Breakdown
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden bg-white">
            {feeRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 items-center border-b border-border ${i % 2 === 0 ? "" : "bg-muted/20"}`}
              >
                <p className="text-sm text-gray-600">{row.label}</p>
                <p className="font-semibold text-sm text-right" style={{ color: "#1a2f4e" }}>{row.value}</p>
              </div>
            ))}
            <div
              className="grid grid-cols-[1fr_auto] gap-4 px-5 py-5 items-center"
              style={{ background: `${accent}0d` }}
            >
              <p className="font-bold text-sm" style={{ color: "#1a2f4e" }}>Total to get started</p>
              <p className="font-bold text-lg text-right" style={{ color: accent }}>{state.fees.totalStarter}</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed italic">
            State filing fees are set by {state.name} and passed through at cost. The GKFG Starter service fee covers our document preparation and filing work.
          </p>
        </div>
      </section>

      {/* Section 4 — State-Specific Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>Why {state.name}</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1a2f4e" }}>
            What Makes {state.name} Different
          </h2>
          <div
            className="rounded-2xl border p-6 text-base font-medium leading-relaxed mb-6"
            style={{ borderColor: `${accent}60`, background: `${accent}0d`, color: "#1a2f4e" }}
          >
            {state.keySellingPoint}
          </div>
          <div className="rounded-2xl border border-border p-6 bg-muted/30">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Good to know</p>
            <p className="text-sm text-gray-600 leading-relaxed">{state.specialNote}</p>
          </div>
        </div>
      </section>

      {/* Section 5 — Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl p-6 border border-border">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ background: accent }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1a2f4e" }}>{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Registered Agent + RON */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <MapPin className="h-4 w-4" style={{ color: accent }} />
              <h3 className="font-bold text-sm" style={{ color: "#1a2f4e" }}>Registered Agent</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {state.registeredAgent
                ? `GKFG serves as your registered agent directly in ${state.name}, with a physical in-state address and reliable handling of all official mail.`
                : `Every ${state.name} LLC needs a registered agent. GKFG provides this service directly only in Missouri — for ${state.name}, we connect you with a vetted partner so you stay fully compliant.`}
            </p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <CheckCircle className="h-4 w-4" style={{ color: accent }} />
              <h3 className="font-bold text-sm" style={{ color: "#1a2f4e" }}>Remote Online Notarization</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              RON is available to all {state.name} clients. Your documents are notarized via secure video call and delivered electronically — no office visit required.
              {state.mobileNotary ? " In-person mobile notary is also available across the metro." : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            Common Questions — {state.name}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* Section 8 — CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to form your {state.name} business?
          </h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Anna AI is available 24/7 to start your application or answer questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <span
                className="inline-block font-bold px-8 py-4 rounded-xl text-sm cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: accent, color: accent === "#C9A84C" ? "#1a2f4e" : "#fff" }}
              >
                {heroCta}
              </span>
            </Link>
            <Link href="/pricing">
              <span className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer border border-white/25 text-white hover:bg-white/10 transition-colors">
                View Pricing →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related States */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Related States</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {relatedStates.map((s) => (
              <Link key={s.slug} href={`/states/${s.slug}`}>
                <span className="inline-block text-sm font-semibold px-4 py-2 rounded-xl border border-border hover:border-secondary hover:text-secondary transition-colors cursor-pointer">
                  {s.name} →
                </span>
              </Link>
            ))}
          </div>
          <Link href="/states" className="text-sm font-semibold text-secondary">View all {allStates.length} states →</Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="Gantt Key Formation Group is not a law firm and does not provide legal advice, legal representation, tax advice, or financial advice. State filing fees are separate from our service fees and are passed through at cost. All prices listed are for our document preparation and notary services only." />
        </div>
      </section>
    </>
  );
}
