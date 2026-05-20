import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const coreServices = [
  { title: "LLC Formation Assistance", slug: "llc-formation", desc: "State filing coordination and document support" },
  { title: "Corporation Filing Assistance", slug: "corporation-filing", desc: "Articles of Incorporation and filing coordination" },
  { title: "EIN Application Assistance", slug: "ein-assistance", desc: "Federal Tax ID — required for banking and hiring" },
  { title: "Missouri Registered Agent", slug: "registered-agent", desc: "Reliable state correspondence and compliance support", badge: "MO Only" },
  { title: "BOI Reporting Assistance", slug: "boi-reporting", desc: "Beneficial Ownership Information document support" },
  { title: "Online Notary Services", slug: "online-notary", desc: "Remote notarization from anywhere" },
  { title: "Mobile Notary Services", slug: "mobile-notary", desc: "We come to your location" },
  { title: "Loan Signing Services", slug: "loan-signing", desc: "Certified signing agent for closings and refinances" },
  { title: "Startup Packages", slug: "launch-packages", desc: "Bundled services from $297 to get you started" },
  { title: "Anna AI Intake", slug: "anna-ai-intake", desc: "AI-powered client intake and consultation booking" },
];

const trustPoints = [
  "Family-led and female-led team",
  "Warm, personal support — not a faceless portal",
  "Transparent pricing — no hidden fees",
  "Clear compliance disclaimers — we tell you what we are and aren't",
  "Serving entrepreneurs across 6 states",
];

export default function Home() {
  return (
    <>
      <SEO title="Home" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-28 md:py-36 lg:py-44">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-semibold mb-6 uppercase tracking-widest">
              Premium Business Setup
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Build your legacy with confidence.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Family-led business formation, notary services, and startup support — powered by Anna AI.
              We handle the setup so you can focus on the vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* About Snippet */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Family-Led</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
                People you can trust to help you start your business.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Gantt & Karr Formation Group was built by Loresa Gantt and Kaileyanne Karr — a family-led
                team that believes every entrepreneur deserves professional, affordable startup support
                without the intimidation of a big law firm.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine personal attention, professional guidance, and AI-powered tools to give you a
                foundation you can build on with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Meet Our Team</Button>
                </Link>
                <Link href="/how-it-works">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">See How It Works</Button>
                </Link>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl border border-border p-8">
              <h3 className="font-serif font-bold text-xl text-primary mb-6">Why Entrepreneurs Choose G&K</h3>
              <ul className="space-y-4">
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
