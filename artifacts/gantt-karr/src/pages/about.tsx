import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Heart, Shield, Star, Zap } from "lucide-react";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const values = [
  {
    icon: Shield,
    title: "Precision & Polish",
    body: "Every document, every filing, every interaction is handled with executive-level care. We don't cut corners — your business deserves better than that.",
  },
  {
    icon: Heart,
    title: "Founder-Led Integrity",
    body: "I treat your business formation with the same care I apply to my own. When you win, I win — it's that simple.",
  },
  {
    icon: CheckCircle,
    title: "Empowerment Over Intimidation",
    body: "I demystify the process so you can focus on building your vision. No legal jargon. No runaround. Just clear, honest support.",
  },
  {
    icon: Star,
    title: "Premium Without the Price Tag",
    body: "A boutique experience shouldn't require a big-firm budget. I've built a model that delivers high-touch service at transparent, accessible prices.",
  },
  {
    icon: Zap,
    title: "Technology-Forward",
    body: "Powered by Anna AI, I bring smart automation to client intake, follow-up, and communication — so nothing falls through the cracks.",
  },
  {
    icon: Shield,
    title: "Compliance First",
    body: "I always disclose what I am and what I'm not. I am not an attorney. I am not a CPA. I am your trusted formation partner — and I'm proud of that.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About | Gantt Key Formation Group"
        description="Gantt Key Formation Group — founded and led by Loresa Gantt. Business formation, notary services, and startup support for entrepreneurs across 20 states."
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="pb-20">
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-5">My Story</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Founder-Driven.<br />Client-Focused.<br />Built for You.
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
                I believe starting a business should feel empowering — not overwhelming. So I built the firm I wish had existed when I started.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/consultation">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 font-semibold">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-end items-end">
              <img
                src="/gantt-karr/loresa-gantt.png"
                alt="Loresa Gantt — Founder, Gantt Key Formation Group"
                className="w-full max-w-sm lg:max-w-md object-cover object-top rounded-t-2xl shadow-2xl"
                style={{ maxHeight: "520px" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline bar */}
      <section className="bg-secondary py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-secondary-foreground text-sm font-semibold uppercase tracking-widest">
            <span>Founder-Led</span>
            <span className="text-secondary-foreground/40">·</span>
            <span>Client-Focused</span>
            <span className="text-secondary-foreground/40">·</span>
            <span>Success-Driven</span>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4 text-center">Who I Am</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-10 text-center">My Story</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Gantt Key Formation Group was built on a simple premise: entrepreneurs need more than just paperwork filed. They need a partner who understands the gravity of starting a business and treats the process with the precision and respect it deserves.
              </p>
              <p>
                Founded by <strong className="text-foreground">Loresa Gantt</strong>, this firm brings a feminine executive energy to business formation. I've walked the entrepreneurial path myself — and I know what it feels like to need answers and not know where to turn.
              </p>
              <p>
                That's why I built something different. A firm that listens. A process that explains. A partner that empowers rather than overwhelms.
              </p>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Today, Gantt Key Formation Group serves entrepreneurs across 20 states — including Missouri, Kansas, Arizona, Tennessee, North Carolina, and Georgia — offering LLC formation, corporation filing, EIN assistance, notary services, registered agent support, BOI reporting guidance, and AI-powered client intake through Anna AI.
              </p>
              <p>
                I'm particularly proud of my commitment to first-generation business owners, female founders, and anyone who's been told the system is too complicated to navigate on their own. It isn't — and I'll prove it.
              </p>
              <p>
                <strong className="text-foreground">Your business. My purpose.</strong> That's not just a tagline. It's the reason I show up every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-4">What Drives Me</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">My Mission</h2>
          <p className="text-xl text-primary-foreground/85 leading-relaxed mb-6">
            To provide premium, trustworthy, and professional setup support for ambitious entrepreneurs — ensuring their businesses are structured correctly from day one, with the guidance and clarity they deserve every step of the way.
          </p>
          <p className="text-primary-foreground/60 text-base leading-relaxed">
            I serve the first-time founder, the side hustler turning full-time, and the visionary who is ready to build something that lasts. Every client gets my full attention, my honest guidance, and my genuine investment in their success.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What I Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Core Values</h2>
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

      {/* Meet Loresa — solo spotlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">The Person Behind the Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Meet the Founder</h2>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary hover:shadow-lg transition-all max-w-lg mx-auto">
            <img
              src="/gantt-karr/loresa-gantt.png"
              alt="Loresa Gantt — Founder & CEO, Gantt Key Formation Group"
              className="w-full object-cover object-top"
              style={{ height: "360px" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="p-7">
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">Founder & CEO</p>
              <h3 className="font-serif font-bold text-2xl text-primary mb-3">Loresa Gantt</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Loresa is the driving force behind Gantt Key Formation Group. With a background in business operations and a passion for supporting entrepreneurs, she built this firm to be the resource she wished she'd had — professional, approachable, and genuinely invested in every client's success.
              </p>
              <Link href="/meet-the-founder">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Read Full Bio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Real Person. Real Support.", body: "You will always be working with me directly — never a ticket number, never a stranger." },
              { label: "Trusted Service. Every Step.", body: "From your first question to your filed documents, I am with you. No ghosting. No runaround." },
              { label: "Built for Entrepreneurs.", body: "Everything I offer was designed specifically for founders who need clear answers and real results." },
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
            Book a free consultation and let's talk about your business goals. I'd love to be part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base font-semibold">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
