import { useState } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import {
  Star, Globe, Megaphone, Users, Handshake, ArrowRight, CheckCircle
} from "lucide-react";

// ─── EDITABLE SPOT COUNTS ───────────────────────────────────────────────────
// Update these numbers as spots are filled.
const SPOTS = {
  cpa: 5,
  insurance: 5,
  banking: 5,
  attorney: 5,
  payroll: 5,
} as const;
// ────────────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: Star,
    title: "Priority Referral Listing",
    body: "Every new GKFG client receives a curated welcome packet with our vetted partner recommendations. You're in that packet — by name, with your contact info and a personal introduction from Loresa.",
  },
  {
    icon: Globe,
    title: "Featured on Our Website",
    body: "Your logo, name, and firm are featured on our dedicated Partners page — visible to every entrepreneur who visits GKFG online. Lifetime placement for Founding Partners.",
  },
  {
    icon: Megaphone,
    title: "Partner Spotlight",
    body: "Each quarter, one Founding Partner is featured in our email newsletter and social content. Your expertise, your story, your firm — introduced to our growing client base.",
  },
  {
    icon: Users,
    title: "Co-Branded Events & Content",
    body: "Joint webinars, LinkedIn Lives, and workshops with your firm and GKFG. Example: 'LLC vs. S-Corp: What Every KC Business Owner Needs to Know.' Both of us get leads.",
  },
  {
    icon: Handshake,
    title: "Direct Client Introductions",
    body: "When a client asks us 'who should I use for taxes / insurance / banking / legal?' — we introduce them to you personally. Not a list. A warm handoff.",
  },
];

const categories = [
  {
    title: "CPAs & Tax Professionals",
    spots: SPOTS.cpa,
    desc: "For CPAs and tax advisors serving small business owners and entrepreneurs.",
  },
  {
    title: "Commercial Insurance Agents",
    spots: SPOTS.insurance,
    desc: "For independent insurance agents serving new and growing businesses.",
  },
  {
    title: "Business Bankers & SBA Lenders",
    spots: SPOTS.banking,
    desc: "For community bankers, credit unions, and SBA lenders working with startups.",
  },
  {
    title: "Business Attorneys",
    spots: SPOTS.attorney,
    desc: "For solo and small-firm attorneys in business law, estate planning, and asset protection.",
  },
  {
    title: "Payroll Providers",
    spots: SPOTS.payroll,
    desc: "For payroll and HR service providers supporting small teams and growing businesses.",
  },
];

const clientTimeline = [
  { week: "Week 1", item: "LLC or Corporation filed", owner: "GKFG", isPartner: false },
  { week: "Week 1", item: "EIN obtained", owner: "GKFG", isPartner: false },
  { week: "Weeks 1–2", item: "Operating agreement notarized", owner: "GKFG", isPartner: false },
  { week: "Week 2", item: "Needs a business bank account", owner: "Banking Partner", isPartner: true },
  { week: "Week 2", item: "Needs a CPA for quarterly taxes", owner: "CPA Partner", isPartner: true },
  { week: "Week 2", item: "Needs general liability insurance", owner: "Insurance Partner", isPartner: true },
  { week: "Week 3", item: "Needs payroll setup", owner: "Payroll Partner", isPartner: true },
  { week: "Month 2+", item: "Needs business attorney for contracts", owner: "Legal Partner", isPartner: true },
];

const eventIdeas = [
  { title: "LLC vs. S-Corp: What Every KC Business Owner Needs to Know", partners: "GKFG + CPA Partner" },
  { title: "Protect Your Business From Day One: Insurance for New Entrepreneurs", partners: "GKFG + Insurance Partner" },
  { title: "How to Get Your Business Bankable in 30 Days", partners: "GKFG + Banking Partner" },
  { title: "Legal Foundations: What Every LLC Owner Should Have in Place", partners: "GKFG + Attorney Partner" },
  { title: "Hire Your First Employee Right: Payroll for New Business Owners", partners: "GKFG + Payroll Partner" },
];

const CATEGORIES = ["CPA / Tax Professional", "Commercial Insurance Agent", "Business Banker / SBA Lender", "Business Attorney", "Payroll Provider"];
const VOLUME_OPTIONS = ["Under 10 per year", "10–25 per year", "25–50 per year", "50+ per year"];

interface FormState {
  name: string;
  firm: string;
  category: string;
  phone: string;
  email: string;
  website: string;
  city: string;
  volume: string;
  note: string;
}

const emptyForm: FormState = {
  name: "", firm: "", category: "", phone: "", email: "",
  website: "", city: "", volume: "", note: "",
};

export default function FoundingPartners() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  }

  return (
    <>
      <SEO
        title="Founding Partner Program | Gantt Key Formation Group"
        description="Join the GKFG Founding Partner Program — limited to 20 vetted professionals across 5 categories. CPAs, insurance agents, business bankers, attorneys, and payroll providers. Apply today."
      />

      {/* Section 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary">
            Founding Partner Program
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Become a Founding Partner of the KC Metro's Premier Business Formation Hub.
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-3 max-w-2xl mx-auto">
            We help entrepreneurs form their business. Then we hand them directly to you.
          </p>
          <p className="text-primary-foreground/50 text-sm mb-10">
            Limited to 20 founding partners. 5 spots per category.
          </p>
          <a href="#apply">
            <button
              className="inline-block font-semibold px-8 py-4 rounded-xl text-sm cursor-pointer transition-colors"
              style={{ background: "#C9A84C", color: "#1a2f4e" }}
            >
              Apply for Founding Partner Status →
            </button>
          </a>
          <p className="text-primary-foreground/40 text-xs mt-4">No fees. No commissions. Just referrals.</p>
        </div>
      </section>

      {/* Section 2 — What Is The Program? */}
      <section className="py-24" style={{ background: "#F5F3EF" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>The Concept</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: "#1a2f4e" }}>
            You send us entrepreneurs. We send you clients.
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-5 leading-relaxed">
            <p>
              Gantt Key Formation Group exists to help entrepreneurs launch with confidence — LLC formation,
              EIN assistance, notary services, registered agent, and more. But our job doesn't stop at the paperwork.
            </p>
            <p>
              Every business we form needs a CPA, an insurance agent, a banker, an attorney, and a payroll provider.
              Rather than sending clients to random online directories, we send them directly to our vetted Founding Partners.
            </p>
            <p className="font-semibold" style={{ color: "#1a2f4e" }}>
              That means every entrepreneur who comes through our doors becomes a warm introduction to you —
              not a cold lead, a personal referral from a trusted formation partner.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Benefits */}
      <section className="py-24" style={{ background: "#F0EEE9" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a2f4e" }}>
              What You Get as a Founding Partner
            </h2>
            <p className="text-gray-500">This is what it means to be part of the GKFG ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "#C9A84C22" }}
                >
                  <b.icon className="h-5 w-5" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#1a2f4e" }}>{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Categories + Spots */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">Limited Availability</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Only 20 Founding Partners. 5 Per Category.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 flex flex-col">
                <h3 className="font-bold text-white text-sm mb-3 leading-snug">{c.title}</h3>
                <p className="text-primary-foreground/55 text-xs leading-relaxed flex-grow mb-5">{c.desc}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-1">Spots Available</p>
                  <p className="text-secondary font-bold text-lg">{c.spots} of 5</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-primary-foreground/40 text-xs mt-10 max-w-xl mx-auto">
            Once all 5 spots in a category are filled, that category closes. Standard partner status will be available after launch.
          </p>
        </div>
      </section>

      {/* Section 5 — What We Offer Clients */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a2f4e" }}>
            Every Client We Form Needs Your Services.
          </h2>
          <p className="text-gray-500 mb-14">Here's what a typical GKFG client looks like when they come through our doors:</p>

          <div className="space-y-0">
            {clientTimeline.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-5 py-5 ${i < clientTimeline.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {/* Week label */}
                <div className="w-24 flex-shrink-0 pt-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.week}</span>
                </div>

                {/* Arrow / check */}
                <div className="flex-shrink-0 pt-0.5">
                  {item.isPartner ? (
                    <ArrowRight className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  ) : (
                    <CheckCircle className="h-4 w-4" style={{ color: "#1a2f4e" }} />
                  )}
                </div>

                {/* Item */}
                <div className="flex-1">
                  <p className={`text-sm font-semibold leading-snug ${item.isPartner ? "" : ""}`} style={{ color: "#1a2f4e" }}>
                    {item.item}
                  </p>
                </div>

                {/* Owner badge */}
                <div className="flex-shrink-0 pt-0.5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 ${
                      item.isPartner
                        ? "border border-[#C9A84C]/40 text-[#C9A84C]"
                        : "bg-[#1a2f4e]/10 text-[#1a2f4e]"
                    }`}
                  >
                    {item.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-serif text-xl font-bold italic" style={{ color: "#1a2f4e" }}>
            "We don't just form businesses — we launch them. And you're part of the launch."
          </p>
        </div>
      </section>

      {/* Section 6 — Collaborative Events */}
      <section className="py-24" style={{ background: "#F5EDD5" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1a2f4e" }}>Grow Together</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5" style={{ color: "#1a2f4e" }}>
              Co-Branded Events That Generate Leads for Both of Us.
            </h2>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              As a Founding Partner, you'll have the opportunity to co-host educational workshops and online events
              with GKFG. These events are free to attend for entrepreneurs, generate press and social content,
              and position both of us as trusted resources in the KC metro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventIdeas.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#C9A84C]/20">
                <p className="font-semibold text-sm leading-snug mb-2" style={{ color: "#1a2f4e" }}>"{e.title}"</p>
                <p className="text-xs text-gray-400">{e.partners}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Application Form */}
      <section id="apply" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Apply for Founding Partner Status
            </h2>
            <p className="text-primary-foreground/60">
              Tell us about your firm. We'll follow up within 2 business days.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 rounded-2xl bg-white/5 border border-white/15 px-8">
              <CheckCircle className="h-14 w-14 text-secondary mx-auto mb-5" />
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Application Received</h3>
              <p className="text-primary-foreground/65 leading-relaxed max-w-sm mx-auto">
                Thank you for your interest in the GKFG Founding Partner Program. Loresa will personally
                review your application and follow up within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    Firm / Company Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="firm" value={form.firm} onChange={handleChange} required
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="Your firm name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                  Category <span className="text-secondary">*</span>
                </label>
                <select
                  name="category" value={form.category} onChange={handleChange} required
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                >
                  <option value="" className="text-gray-800">Select your category…</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} className="text-gray-800">{c}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    Phone <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange} required type="tel"
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="(816) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required type="email"
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="you@yourfirm.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    Website
                  </label>
                  <input
                    name="website" value={form.website} onChange={handleChange}
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="yourfirm.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                    City / State <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="city" value={form.city} onChange={handleChange} required
                    className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                    placeholder="Kansas City, MO"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                  Entrepreneur/startup clients per year <span className="text-secondary">*</span>
                </label>
                <select
                  name="volume" value={form.volume} onChange={handleChange} required
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-secondary/60"
                >
                  <option value="" className="text-gray-800">Select a range…</option>
                  {VOLUME_OPTIONS.map((v) => (
                    <option key={v} value={v} className="text-gray-800">{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1.5">
                  Brief note about your firm <span className="text-primary-foreground/40">(optional, 200 chars max)</span>
                </label>
                <textarea
                  name="note" value={form.note} onChange={handleChange} maxLength={200} rows={3}
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary/60 resize-none"
                  placeholder="Tell us briefly about your practice and the clients you serve…"
                />
                <p className="text-right text-xs text-primary-foreground/30 mt-1">{form.note.length}/200</p>
              </div>

              <button
                type="submit"
                className="w-full font-bold py-4 rounded-xl text-sm transition-colors cursor-pointer"
                style={{ background: "#C9A84C", color: "#1a2f4e" }}
              >
                Apply Now →
              </button>
            </form>
          )}

          <div className="mt-10 pt-8 border-t border-white/10 text-center space-y-1.5">
            <p className="text-primary-foreground/45 text-xs">Founding Partner status is reviewed and confirmed by Loresa Gantt personally.</p>
            <p className="text-primary-foreground/45 text-xs">All partners are vetted to ensure they're a fit for our clients.</p>
            <p className="text-primary-foreground/45 text-xs font-semibold">No fees. No commissions. No obligations beyond showing up for your clients.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="The Gantt Key Formation Group Founding Partner Program is a referral relationship — not a licensed referral fee arrangement. No compensation is exchanged between GKFG and its Founding Partners. Professionals with ethics obligations regarding referral compensation (CPAs, attorneys, licensed financial professionals) should confirm compliance with their applicable state board or licensing body before participating." />
        </div>
      </section>
    </>
  );
}
