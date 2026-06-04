import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Shield, Users, Star } from "lucide-react";
import { homePageSchema } from "@/lib/schema";

const coreServices = [
  { title: "LLC Formation Assistance", slug: "llc-formation", desc: "State filing coordination and document support" },
  { title: "Corporation Filing Assistance", slug: "corporation-filing", desc: "Articles of Incorporation and filing coordination" },
  { title: "EIN Application Assistance", slug: "ein-assistance", desc: "Federal Tax ID — required for banking and hiring" },
  { title: "Missouri Registered Agent", slug: "registered-agent", desc: "Reliable state correspondence and compliance support", badge: "MO Only" },
  { title: "BOI Reporting Assistance", slug: "boi-reporting", desc: "Beneficial Ownership Information document support" },
  { title: "Online Notary Services", slug: "online-notary", desc: "Remote notarization from anywhere", badge: "Coming Soon" },
  { title: "Mobile Notary Services", slug: "mobile-notary", desc: "We come to your location", badge: "MO Only" },
  { title: "Loan Signing Services", slug: "loan-signing", desc: "Certified signing agent for closings and refinances", badge: "Coming Soon" },
  { title: "Startup Packages", slug: "launch-packages", desc: "Bundled services from $297 to get you started" },
  { title: "Anna AI Intake", slug: "anna-ai-intake", desc: "AI-powered client intake and consultation booking" },
];

const trustPoints = [
  "Woman-owned, founder-led operation",
  "Warm, personal support — not a faceless portal",
  "Transparent pricing — no hidden fees",
  "Clear compliance disclaimers — we tell you what we are and aren't",
  "Serving entrepreneurs across 6 states",
];

export default function Home() {
  return (
    <>
      <SEO
        title="Business Formation, Notary &amp; Startup Support"
        description="Gantt Key Formation Group — founder-led LLC formation, corporation filing, notary services, and startup support across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana."
        schema={homePageSchema()}
      />

      {/* Hero — split layout with real team photo */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[92vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
            {/* Left — copy */}
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-semibold mb-6 uppercase tracking-widest">
                Premium Business Setup
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                Build your legacy with confidence.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
                Founder-led business formation, notary services, and startup support — powered by Anna AI.
                We handle the setup so you can focus on the vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/how-it-works">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8 text-base font-semibold">
                    Start My Business Setup
                  </Button>
                </Link>
                <Link href="/consultation">
                  <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto h-14 px-8 text-base">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-secondary" /><span>Compliance-first</span></div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-secondary" /><span>Founder-led</span></div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-secondary" /><span>6 states served</span></div>
              </div>
            </div>

            {/* Right — team photo */}
            <div className="relative lg:flex justify-end hidden">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <img
                  src="/gantt-karr/loresa-gantt.png"
                  alt="Loresa Gantt — Founder, Gantt Key Formation Group"
                  className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-secondary/20"
                  style={{ maxHeight: "620px", objectPosition: "top" }}
                />
                <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl px-5 py-4 shadow-xl">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Your Business</p>
                  <p className="font-serif font-bold text-primary text-lg leading-tight">Our Purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip — immediately under hero */}
      <section className="bg-secondary/10 border-b border-secondary/20 py-3.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-0 gap-y-1 text-xs font-semibold text-foreground/70 uppercase tracking-wider">
            {[
              "Founder-Led",
              "Serving 6 States",
              "Missouri Registered Agent Services",
              "Secure Client Intake",
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center">
                <span className="hover:text-secondary transition-colors">{item}</span>
                {i < arr.length - 1 && (
                  <span className="mx-4 text-secondary/50">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-muted/60 border-b border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-foreground/70">
                <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
            A boutique experience for modern entrepreneurs.
          </h2>
          <p className="text-lg text-muted-foreground mb-14 leading-relaxed max-w-2xl mx-auto">
            Starting a business is a big step. We provide the polished, trustworthy foundation you need —
            from filing your LLC to structuring your operations with Anna AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { n: "1", title: "Consult & Plan", desc: "Strategic guidance to determine the right structure and steps for your unique vision." },
              { n: "2", title: "Form & Organize", desc: "We handle the paperwork, filings, and essential registrations with precision." },
              { n: "3", title: "Launch & Grow", desc: "Ongoing support, AI intake setup, and professional resources to fuel your success." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="p-8 rounded-2xl bg-muted/50 border border-border">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 font-serif font-bold text-xl">{n}</div>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Core Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From formation to notary to AI-powered intake — everything your business needs to start strong.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {coreServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <div className="group bg-card border border-border rounded-2xl p-5 h-full flex flex-col hover:border-secondary hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between gap-1.5 mb-2">
                    <h3 className="font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    {s.badge && (
                      <span className="flex-shrink-0 text-[8px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary border border-secondary/20 rounded-full px-1.5 py-0.5 leading-tight">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground flex-grow leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-secondary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About — photo left, copy right */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-3 bg-secondary/8 rounded-3xl blur-xl" />
              <img
                src="/gantt-karr/loresa-gantt.png"
                alt="Loresa Gantt — Founder of Gantt Key Formation Group"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-border"
                style={{ maxHeight: "560px", objectPosition: "top" }}
              />
            </div>

            {/* Copy */}
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Founder-Led</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
                Real people, standing behind your business from day one.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Gantt Key Formation Group was built by Loresa Gantt — a founder who believes every
                entrepreneur deserves professional, affordable startup support without the intimidation of
                a big law firm or a faceless online portal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I combine personal attention, professional guidance, and AI-powered tools to give you a
                foundation you can build on with confidence.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No confusing legal jargon — we speak plain English",
                  "Transparent pricing with no hidden fees",
                  "Compliance-first — we always disclose what we are and aren't",
                  "Powered by Anna AI for faster intake and follow-up",
                  "Serving 6 states and 18+ cities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Meet Our Team</Button>
                </Link>
                <Link href="/how-it-works">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">See How It Works</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Anna — after hours support strip */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Available 24/7
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Anna
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-3">
                "Need help at 10:00 PM? Anna is available 24/7 to answer questions and start your intake process."
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Anna answers first. Our team reviews, supports, and finalizes behind the scenes.
                Loresa is still your trusted guide behind the scenes — Anna just makes sure you
                never have to wait.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/anna-demo">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-13 px-8 font-semibold">
                    Try Anna
                  </Button>
                </Link>
                <Link href="/meet-anna">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-13 px-8">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "24/7 availability", sub: "No more waiting for business hours" },
                { label: "6 service paths", sub: "LLC, EIN, Notary, Agent & more" },
                { label: "Intake captured", sub: "Zero inquiries missed" },
                { label: "Apex-built technology", sub: "Powered by Apex Key Group Holdings" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-white/45 text-xs leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Ready to start your business?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
            Book a free consultation or jump straight into your business setup. We are here every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base font-semibold">
                Start My Business Setup
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
