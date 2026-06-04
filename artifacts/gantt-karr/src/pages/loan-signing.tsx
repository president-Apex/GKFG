import { useState } from "react";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, DollarSign, Home } from "lucide-react";
import { Link } from "wouter";

const pricingRows = [
  { service: "Purchase Closing", price: "$150", notes: "Within 20 miles", surcharge: false },
  { service: "Refinance Signing", price: "$125", notes: "Within 20 miles", surcharge: false },
  { service: "Reverse Mortgage", price: "$175", notes: "Complex package", surcharge: false },
  { service: "HELOC / Home Equity", price: "$125", notes: "", surcharge: false },
  { service: "Seller's Package", price: "$100", notes: "", surcharge: false },
  { service: "Construction Loan Closing", price: "$175", notes: "", surcharge: false },
  { service: "Hybrid eClosing", price: "$150", notes: "", surcharge: false },
  { service: "Distance surcharge — 21–40 miles", price: "+$35", notes: "", surcharge: true },
  { service: "Distance surcharge — 41–60 miles", price: "+$60", notes: "", surcharge: true },
  { service: "After-hours (6pm–9pm)", price: "+$40", notes: "", surcharge: true },
  { service: "Weekend / Holiday", price: "+$50", notes: "", surcharge: true },
  { service: "Same-day Rush (under 4 hrs)", price: "+$75", notes: "", surcharge: true },
  { service: "Scanback", price: "+$25", notes: "", surcharge: true },
  { service: "No-Show / Cancel under 2 hrs", price: "$50 flat", notes: "Non-refundable", surcharge: true },
];

const titleCompanies = [
  "Secured Title of Kansas City",
  "Origin Title KC",
  "Continental Title",
  "Alpha Title Guaranty",
  "Old Republic Title KC",
  "First American Title",
  "Stewart Title KC",
  "Platinum Title KC",
  "Coffelt Land Title",
  "Chicago Title KC",
];

const platforms = [
  "Snapdocs",
  "SigningOrder",
  "NotaryDash",
  "ZigSig",
  "Amrock",
  "ServiceLink",
  "Proof",
  "NotaryCafe",
  "NotaryRotary",
  "123Notary",
  "SigningAgent.com",
];

const credentials = [
  "NNA Certified Notary Signing Agent",
  "Missouri Notary Commission — Active",
  "Kansas Notary Commission — Active",
  "Errors & Omissions Insurance — $25,000 minimum",
  "NNA Background Check — Current",
  "Electronic journal — compliant with MO and KS law",
  "Dual laser printer + scanner",
  "FedEx/UPS same-day drop-off available",
];

const moCounties = ["Jackson", "Clay", "Platte", "Cass", "Ray"];
const ksCounties = ["Johnson", "Wyandotte", "Leavenworth", "Miami"];

const cities = [
  "Kansas City MO", "Liberty", "Independence", "Lee's Summit",
  "Blue Springs", "Raytown", "Gladstone",
  "Overland Park", "Shawnee", "Olathe", "Lenexa", "Leawood",
  "Prairie Village", "Merriam",
];

type FormState = "idle" | "submitting" | "success";

export default function LoanSigning() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    counties: "",
    contact: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 900);
  }

  return (
    <>
      <SEO
        title="Loan Signing Agent Kansas City | MO & KS | Same Day | GKFG"
        description="Certified notary signing agent serving title companies, mortgage lenders, and real estate investors across the KC metro in Missouri and Kansas. Same-day and after-hours available."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full border border-secondary/50 text-secondary">
            LOAN SIGNING AGENT · MO &amp; KS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your KC Metro Signing Agent —<br className="hidden md:block" /> Both Sides of the State Line.
          </h1>
          <p className="text-primary-foreground/65 text-lg leading-relaxed mb-10 max-w-2xl">
            Certified notary signing agent serving title companies, mortgage lenders, and real estate investors across Missouri and Kansas. Available same day, evenings, and weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/how-it-works">
              <Button className="bg-secondary text-primary font-bold hover:bg-secondary/90 px-8 py-6 text-sm h-auto rounded-xl">
                Request a Signing →
              </Button>
            </Link>
            <a href="#rotation-form">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-sm h-auto rounded-xl">
                Add Me to Your Signing Rotation →
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
            {["NNA Certified", "MO & KS Commissioned", "E&O Insured", "Background Checked", "Same-Day Available"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-medium">
                <CheckCircle className="h-3 w-3 text-secondary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 text-center">Who We Work With</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-12 text-primary text-center">
            Built for the Professionals Who Close Deals.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 className="h-6 w-6" />,
                title: "Title Companies",
                body: "We work directly with title companies for purchase closings, refinances, and seller packages. We understand your timelines, return docs same day, and never miss a signature.",
              },
              {
                icon: <DollarSign className="h-6 w-6" />,
                title: "Mortgage Lenders & Brokers",
                body: "Need a reliable signing agent for your borrowers? We serve the entire KC metro in both MO and KS. Add us to your notary rotation — we're available until 9pm.",
              },
              {
                icon: <Home className="h-6 w-6" />,
                title: "Real Estate Investors",
                body: "Fix and flip? Wholesale? Hard money closing? We close fast. Same-day assignments accepted. Text or call for urgent signings — we pick up.",
              },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl border border-border p-7 bg-muted/20">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary mb-5">
                  {col.icon}
                </div>
                <h3 className="font-bold text-base text-primary mb-3">{col.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Signing Services &amp; Pricing</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-primary">
            Transparent Flat-Rate Pricing
          </h2>
          <p className="text-sm text-muted-foreground mb-10">All prices quoted before assignment. No surprises.</p>
          <div className="rounded-2xl border border-border overflow-hidden bg-white">
            <div className="grid grid-cols-[1fr_100px_120px] bg-muted/50 px-5 py-3 border-b border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Price</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Notes</p>
            </div>
            {pricingRows.map((row, i) => (
              <div
                key={row.service}
                className={`grid grid-cols-[1fr_100px_120px] gap-2 px-5 py-3.5 items-center ${i < pricingRows.length - 1 ? "border-b border-border" : ""} ${row.surcharge ? "bg-amber-50/60" : i % 2 === 0 ? "" : "bg-muted/10"}`}
              >
                <p className={`text-sm font-medium ${row.surcharge ? "text-amber-800" : "text-foreground"}`}>{row.service}</p>
                <p className={`text-sm font-bold text-right ${row.surcharge ? "text-amber-700" : "text-primary"}`}>{row.price}</p>
                <p className="text-xs text-muted-foreground text-right">{row.notes}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400 italic">Surcharge rows shown in amber. All fees are disclosed before assignment acceptance.</p>
        </div>
      </section>

      {/* Title Companies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">KC Metro Partners</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-primary">
            Title Companies We Serve
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            These companies are doing closings in your backyard right now. One relationship = a steady stream of signings.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {titleCompanies.map((co) => (
              <span
                key={co}
                className="text-sm font-semibold px-4 py-2 rounded-full text-primary border border-primary/25 bg-primary/5"
              >
                {co}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Don't see your company? We work with all title companies in the KC metro.{" "}
            <a href="#rotation-form" className="text-secondary font-semibold underline underline-offset-2">
              Contact us to be added to our roster.
            </a>
          </p>
        </div>
      </section>

      {/* Signing Platforms */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Where to Find Us</p>
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-6 text-primary">
            Signing Platforms We're Listed On
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {platforms.map((p) => (
              <span
                key={p}
                className="text-xs font-bold px-3.5 py-2 rounded-lg bg-white border border-border text-muted-foreground uppercase tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Verified &amp; Insured</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 text-primary">Credentials</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-start gap-3 bg-muted/30 rounded-xl border border-border px-5 py-4">
                <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Service Area</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-primary">
            The Entire KC Metro — Both Sides.
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            We cover the entire KC metro on both sides of the state line.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Missouri Counties</p>
              <div className="flex flex-wrap gap-2">
                {moCounties.map((c) => (
                  <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Kansas Counties</p>
              <div className="flex flex-wrap gap-2">
                {ksCounties.map((c) => (
                  <span key={c} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Cities Served</p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span key={city} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border text-gray-600">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Rotation Form */}
      <section id="rotation-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Title Companies &amp; Lenders</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-primary">
            Add GKFG to Your Signing Roster
          </h2>
          <p className="text-sm text-muted-foreground mb-10">
            Fill out the form below and we'll reach out within one business day with our credentials packet.
          </p>

          {formState === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-10 text-center">
              <CheckCircle className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl text-emerald-900 mb-2">You're on our list.</h3>
              <p className="text-sm text-emerald-700">
                We'll send our credentials packet within one business day. We look forward to working with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="Secured Title KC"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="Jane Smith"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Title / Role
                  </label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="Closing Coordinator"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="jane@titleco.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="(816) 555-0100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Counties You Cover Most
                  </label>
                  <input
                    type="text"
                    value={form.counties}
                    onChange={(e) => setForm({ ...form, counties: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    placeholder="Jackson, Johnson, Clay"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Preferred Contact Method
                </label>
                <select
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 bg-white"
                >
                  <option value="">Select one</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                  <option value="platform">Platform (Snapdocs / SigningOrder / other)</option>
                </select>
              </div>
              <Button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 py-6 h-auto rounded-xl text-sm"
              >
                {formState === "submitting" ? "Submitting…" : "Add Me to Your Roster →"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Investor Callout */}
      <section className="py-16 bg-stone-50 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 md:p-10">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-5">
              For Real Estate Investors
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-primary">
              Need a Fast Close? We're Ready.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hard money loans, wholesale deals, and fix-and-flip closings move fast. We accept same-day assignments, work evenings, and serve both MO and KS. If your deal is closing tonight, call us.
            </p>
            <a href="tel:+18165550100">
              <Button className="bg-secondary text-primary font-bold hover:bg-secondary/90 px-8 py-5 h-auto rounded-xl text-sm">
                Text or Call for Same-Day Signing →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Whether you're requesting a signing or adding us to your rotation — we're ready when you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button className="bg-secondary text-primary font-bold hover:bg-secondary/90 px-8 py-6 h-auto rounded-xl text-sm">
                Request a Signing Appointment →
              </Button>
            </Link>
            <a href="#rotation-form">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 h-auto rounded-xl text-sm">
                Add Me to Your Rotation →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="Gantt Key Formation Group is a notary signing agent service — not a title company, law firm, or escrow company. We do not provide legal or escrow services. All pricing is quoted in advance and subject to a written fee agreement. Prices are subject to change without notice." />
        </div>
      </section>
    </>
  );
}
