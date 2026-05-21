import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Heart, Shield, Star, Users, Zap } from "lucide-react";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const values = [
  {
    icon: Shield,
    title: "Precision & Polish",
    body: "Every document, every filing, every interaction is handled with executive-level care. We don't cut corners — your business deserves better than that.",
  },
  {
    icon: Heart,
    title: "Family-Led Integrity",
    body: "We treat your business formation with the same care we apply to our own. When you win, we win — it's that simple.",
  },
  {
    icon: Users,
    title: "Empowerment Over Intimidation",
    body: "We demystify the process so you can focus on building your vision. No legal jargon. No runaround. Just clear, honest support.",
  },
  {
    icon: Star,
    title: "Premium Without the Price Tag",
    body: "A boutique experience shouldn't require a big-firm budget. We've built a model that delivers high-touch service at transparent, accessible prices.",
  },
  {
    icon: Zap,
    title: "Technology-Forward",
    body: "Powered by Anna AI, we bring smart automation to client intake, follow-up, and communication — so nothing falls through the cracks.",
  },
  {
    icon: CheckCircle,
    title: "Compliance First",
    body: "We always disclose what we are and what we aren't. We are not attorneys. We are not CPAs. We are your trusted formation partners — and we're proud of that.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Gantt & Karr Formation Group"
        description="Meet Loresa Gantt and Kaileyanne Karr — the family-led team behind Gantt & Karr Formation Group. Learn our story, mission, and what drives us to support entrepreneurs across 6 states."
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Copy */}
            <div className="pb-20">
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-5">Our Story</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Family-Led.<br />Founder-Driven.<br />Built for You.
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
                We believe starting a business should feel empowering — not overwhelming. So we built the firm we wish had existed when we started.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/consultation">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 font-semibold">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Photo — bleeds to bottom edge */}
            <div className="relative flex justify-end items-end">
              <img
                src="/gantt-karr/team-photo.png"
                alt="Loresa Gantt and Kaileyanne Karr — Founders, Gantt & Karr Formation Group"
                className="w-full max-w-sm lg:max-w-md object-cover object-top rounded-t-2xl shadow-2xl"
                style={{ maxHeight: "520px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline bar */}
      <section className="bg-secondary py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-secondary-foreground text-sm font-semibold uppercase tracking-widest">
            <span>Family-Led</span>
            <span className="text-secondary-foreground/40">·</span>
            <span>Client-Focused</span>
            <span className="text-secondary-foreground/40">·</span>
            <span>Success-Driven</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4 text-center">Who We Are</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Our Story</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Gantt & Karr Formation Group was built on a simple premise: entrepreneurs need more than just paperwork filed. They need a partner who understands the gravity of starting a business and treats the process with the precision and respect it deserves.
              </p>
              <p>
                Founded by <strong className="text-foreground">Loresa Gantt</strong>, with <strong className="text-foreground">Kaileyanne Karr</strong> as Business Support & Notary Specialist, our firm brings a feminine executive energy to business formation. We've walked the entrepreneurial path ourselves — and we know what it feels like to need answers and not know where to turn.
              </p>
              <p>
                That's why we built something different. A firm that listens. A team that explains. A process that empowers rather than overwhelms.
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Today, Gantt & Karr Formation Group serves entrepreneurs across six states — Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana — offering LLC formation, corporation filing, EIN assistance, notary services, registered agent support, BOI reporting guidance, and AI-powered client intake through Anna AI.
              </p>
              <p>
                We're particularly proud of our commitment to first-generation business owners, female founders, and anyone who's been told the system is too complicated to navigate on their own. It isn't — and we'll prove it.
              </p>
              <p>
                <strong className="text-foreground">Your business. Our purpose.</strong> That's not just a tagline. It's the reason we show up every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner image — full-width visual break */}
      <section className="relative overflow-hidden">
        <img
          src="/gantt-karr/team-banner.png"
          alt="Gantt & Karr Formation Group — Your Business, Our Purpose"
          className="w-full object-cover"
          style={{ maxHeight: "420px", objectPosition: "center top" }}
        />
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-4">What Drives Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-primary-foreground/85 leading-relaxed mb-6">
            To provide premium, trustworthy, and professional setup support for ambitious entrepreneurs — ensuring their businesses are structured correctly from day one, with the guidance and clarity they deserve every step of the way.
          </p>
          <p className="text-primary-foreground/60 text-base leading-relaxed">
            We serve the first-time founder, the side hustler turning full-time, and the visionary who is ready to build something that lasts. Every client gets our full attention, our honest guidance, and our genuine investment in their success.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The People Behind the Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Meet the Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Loresa */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary hover:shadow-lg transition-all">
              <img
                src="/gantt-karr/loresa-gantt.png"
                alt="Loresa Gantt — Founder & CEO, Gantt & Karr Formation Group"
                className="w-full object-cover object-top"
                style={{ height: "320px" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="p-7">
                <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">Founder & CEO</p>
                <h3 className="font-serif font-bold text-2xl text-primary mb-3">Loresa Gantt</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Loresa is the driving force behind Gantt & Karr Formation Group. With a background in business operations and a passion for supporting entrepreneurs, she built this firm to be the resource she wished she'd had — professional, approachable, and genuinely invested in every client's success.
                </p>
                <Link href="/meet-the-founder">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read Full Bio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kaileyanne */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary hover:shadow-lg transition-all">
              <img
                src="/gantt-karr/kaileyanne-karr.png"
                alt="Kaileyanne Karr — Business Support & Notary Specialist, Gantt & Karr Formation Group"
                className="w-full object-cover object-top"
                style={{ height: "320px" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="p-7">
                <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">Business Support & Notary Specialist</p>
                <h3 className="font-serif font-bold text-2xl text-primary mb-3">Kaileyanne Karr</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Kaileyanne brings warmth, precision, and deep client dedication to every engagement. As a commissioned notary and business support specialist, she ensures that every document and every client interaction reflects the high standard Gantt & Karr is known for.
                </p>
                <Link href="/meet-kaileyanne">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read Full Bio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Real People. Real Support.", body: "You will always be working with a person who knows your name and your goals — never a ticket number." },
              { label: "Trusted Service. Every Step.", body: "From your first question to your filed documents, we are with you. No ghosting. No runaround." },
              { label: "Built for Entrepreneurs.", body: "Everything we offer was designed specifically for founders who need clear answers and real results." },
            ].map(({ label, body }) => (
              <div key={label} className="p-6">
                <div className="w-10 h-10 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-primary mb-3">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">Ready to work together?</h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
            Book a free consultation and let's talk about your business goals. We'd love to be part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base font-semibold">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
