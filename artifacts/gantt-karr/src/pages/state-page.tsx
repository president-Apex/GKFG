import { useState } from "react";
import { useParams, Link } from "wouter";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { CheckCircle, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { stateData, allStates } from "@/data/states";

function StatusBadge({ status, note }: { status: string; note?: string }) {
  if (status === "available") {
    return (
      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold text-sm">
        <span>✅</span>
        {note && <span className="text-xs text-gray-400 font-normal">— {note}</span>}
      </span>
    );
  }
  if (status === "coming-soon") {
    return (
      <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 border border-gray-300 text-gray-400">
        Coming Soon
      </span>
    );
  }
  if (status === "late-2026") {
    return (
      <span className="inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 border border-amber-300 text-amber-600">
        Late 2026
      </span>
    );
  }
  if (status === "by-request") {
    return (
      <span className="text-xs text-gray-500 italic">
        By Request{note ? ` — ${note}` : ""}
      </span>
    );
  }
  return null;
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

  const otherStates = allStates.filter((s) => s.slug !== slug);
  const accent = state.accentColor;

  return (
    <>
      <SEO title={state.seoTitle} description={state.metaDescription} />

      {/* Section 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 relative overflow-hidden">
        {/* Accent strip */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />
        <div className="container mx-auto px-4 max-w-4xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full border"
            style={{ borderColor: `${accent}60`, color: accent }}
          >
            {state.heroLabel}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {state.heroHeadline}
          </h1>
          <p className="text-primary-foreground/65 text-lg leading-relaxed mb-10 max-w-2xl">
            {state.heroSubheadline}
          </p>
          <Link href="/how-it-works">
            <span
              className="inline-block font-bold px-8 py-4 rounded-xl text-sm cursor-pointer transition-opacity hover:opacity-90"
              style={{ background: accent, color: accent === "#C9A84C" ? "#1a2f4e" : "#fff" }}
            >
              {state.heroCta}
            </span>
          </Link>
          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {state.trustBar.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
                <CheckCircle className="h-3 w-3" style={{ color: accent }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Cities We Serve */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2.5 mb-6">
            <MapPin className="h-4 w-4" style={{ color: accent }} />
            <h2 className="font-bold text-base" style={{ color: "#1a2f4e" }}>Cities We Serve</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {state.cities.map((city) => (
              <span
                key={city}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{ borderColor: `${accent}50`, color: accent, background: `${accent}12` }}
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed italic">{state.citiesNote}</p>
        </div>
      </section>

      {/* Section 3 — Services Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>Services Available</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            Services in {state.name}
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto] bg-muted/50 px-5 py-3 border-b border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Available</p>
            </div>
            {state.services.map((svc, i) => (
              <div
                key={svc.name}
                className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto] gap-4 px-5 py-4 items-center ${i < state.services.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "" : "bg-muted/20"}`}
              >
                <p className="font-semibold text-sm" style={{ color: "#1a2f4e" }}>{svc.name}</p>
                <div className="text-right">
                  <StatusBadge status={svc.status} note={svc.status === "available" ? svc.note : undefined} />
                  {svc.status !== "available" && svc.note && svc.status !== "by-request" && (
                    <p className="text-xs text-gray-400 mt-0.5">{svc.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {state.showMoKsBadge && (
            <p className="mt-4 text-xs text-gray-400">
              <span className="font-bold text-gray-600">MO & KS Exclusive</span> — services available only to clients in Missouri and Kansas.
            </p>
          )}
        </div>
      </section>

      {/* Section 4 — Filing Facts + Callout */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>State-Specific Facts</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8" style={{ color: "#1a2f4e" }}>
            {state.name} Filing Facts
          </h2>
          <ul className="space-y-3 mb-10">
            {state.filingFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="mt-0.5 text-base leading-none flex-shrink-0" style={{ color: accent }}>–</span>
                {fact}
              </li>
            ))}
          </ul>
          <div
            className="rounded-2xl border p-6 text-sm font-medium leading-relaxed"
            style={{ borderColor: `${accent}60`, background: `${accent}0d`, color: "#1a2f4e" }}
          >
            {state.callout}
          </div>
        </div>
      </section>

      {/* Section 5 — Why GKFG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            Why Gantt Key for {state.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {state.reasons.map((r, i) => (
              <div key={i} className="bg-muted/30 rounded-2xl p-6 border border-border">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ background: accent }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1a2f4e" }}>"{r.title}"</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonial */}
      <section className="py-16" style={{ background: "#1a2f4e" }}>
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-5">
            "{state.testimonial.quote}"
          </p>
          <p className="text-sm font-semibold" style={{ color: accent }}>— {state.testimonial.attribution}</p>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10" style={{ color: "#1a2f4e" }}>
            Common Questions — {state.name}
          </h2>
          <div className="space-y-3">
            {state.faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
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
                {state.heroCta}
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

      {/* Also Serving */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Also Serving</p>
          <div className="flex flex-wrap gap-3">
            {otherStates.map((s) => (
              <Link key={s.slug} href={`/states/${s.slug}`}>
                <span className="inline-block text-sm font-semibold px-4 py-2 rounded-xl border border-border hover:border-secondary hover:text-secondary transition-colors cursor-pointer">
                  {s.name} →
                </span>
              </Link>
            ))}
          </div>
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
