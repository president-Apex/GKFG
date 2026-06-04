import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Quote } from "lucide-react";
import { personSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

const pillars = [
  { title: "Precision", body: "Every document, every detail — handled with executive-level care from start to finish." },
  { title: "Clarity", body: "Plain-language guidance so you always know where you stand and what comes next." },
  { title: "Compliance", body: "Honest about what we are and what we're not. Always." },
  { title: "Empowerment", body: "Entrepreneurs leave every interaction feeling more capable, not more confused." },
];

export default function MeetTheFounder() {
  return (
    <>
      <SEO
        title="Meet Loresa Gantt — Founder & CEO | Gantt Key Formation Group"
        description="Loresa Gantt is the founder and CEO of Gantt Key Formation Group. Learn about her mission to bring executive-level precision and warmth to business formation for entrepreneurs across 7 states."
        schema={[
          personSchema({
            name: "Loresa Gantt",
            jobTitle: "Founder & CEO",
            description: "Founder of Gantt Key Formation Group, providing founder-led business formation, notary, and startup support across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana.",
            url: `${SITE_URL}/meet-the-founder`,
            image: `${SITE_URL}/loresa-gantt.png`,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Meet Loresa Gantt", href: "/meet-the-founder" },
          ]),
        ]}
      />

      {/* Hero — photo left, intro right */}
      <section className="bg-primary text-primary-foreground pt-24 pb-0 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-0 items-end">

            {/* Photo — rises from bottom */}
            <div className="relative flex justify-start items-end order-2 lg:order-1">
              <img
                src="/gantt-karr/loresa-gantt.png"
                alt="Loresa Gantt — Founder & CEO of Gantt Key Formation Group"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover object-top rounded-t-2xl shadow-2xl"
                style={{ maxHeight: "600px" }}
              />
            </div>

            {/* Copy */}
            <div className="pb-20 order-1 lg:order-2 pt-10 lg:pt-0">
              <Link href="/about" className="inline-flex items-center gap-1.5 text-secondary text-xs font-semibold uppercase tracking-widest mb-6 hover:text-secondary/80 transition-colors">
                ← Meet the Team
              </Link>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">Founder & CEO</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Loresa Gantt
              </h1>
              <div className="relative pl-5 border-l-2 border-secondary/40 mb-8">
                <Quote className="h-5 w-5 text-secondary/50 mb-2" />
                <p className="text-lg text-primary-foreground/85 italic leading-relaxed">
                  "Building a business is one of the most courageous things a person can do. My mission is to make sure your foundation is as strong as your vision."
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/consultation">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 font-semibold">
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tagline bar */}
      <section className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-secondary-foreground text-xs font-bold uppercase tracking-widest">
            <span>Female Founder</span>
            <span className="opacity-40">·</span>
            <span>Founder-Led</span>
            <span className="opacity-40">·</span>
            <span>Entrepreneur's Advocate</span>
            <span className="opacity-40">·</span>
            <span>7 States Served</span>
          </div>
        </div>
      </section>

      {/* Full bio */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-14">

            {/* Long-form bio — 2 cols */}
            <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-base">
              <p>
                <strong className="text-foreground">Loresa Gantt</strong> founded Gantt Key Formation Group with a clear and personal mission: to bring executive-level precision, warmth, and integrity to the business formation process — and to make that process accessible to every entrepreneur, regardless of their background.
              </p>
              <p>
                Loresa recognized early that many founders — particularly women, first-generation business owners, and entrepreneurs from underserved communities — were being failed by a system that felt opaque, cold, and unnecessarily complicated. Too many people were being handed forms without guidance, or turned away by law firm price tags that made professional help feel out of reach.
              </p>
              <p>
                She built Gantt Key to be the answer to that problem. A boutique firm where every client is known by name. Where the process is explained in plain language. Where compliance comes first, always — and where no one is ever made to feel like a burden for asking a question.
              </p>
              <p>
                Under Loresa's leadership, Gantt Key Formation Group has grown into a trusted partner for entrepreneurs across Missouri, Kansas, Arizona, Tennessee, North Carolina, Georgia, and Montana — offering LLC formation, corporation filing, EIN assistance, registered agent services, BOI reporting support, notary services, loan signing, and AI-powered intake through Anna AI.
              </p>
              <p>
                Loresa leads with what she calls a "feminine executive" energy — deeply polished and highly capable, but never transactional. She believes that the way a firm treats you in the beginning tells you everything about the kind of partner it will be going forward.
              </p>
              <p>
                When she isn't building businesses for others, Loresa is building her own — and drawing on that firsthand experience to better serve every client who walks through the door.
              </p>
            </div>

            {/* Sidebar — quick facts */}
            <div className="space-y-6">
              <div className="bg-muted/50 border border-border rounded-2xl p-6">
                <h3 className="font-serif font-bold text-primary text-base mb-4">At a Glance</h3>
                <ul className="space-y-3">
                  {[
                    "Founder & CEO",
                    "Business Formation Specialist",
                    "Entrepreneur & Female Founder",
                    "Woman-Owned Business Advocate",
                    "Serving 7 states & 20+ cities",
                    "Powered by Anna AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="font-serif font-bold text-primary text-base mb-3">Services Loresa Leads</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "LLC Formation Assistance",
                    "Corporation Filing",
                    "EIN Application Support",
                    "Startup Strategy & Consultation",
                    "Anna AI Intake Setup",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-secondary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership pillars */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">How She Leads</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The Pillars Behind the Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-6 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-secondary/15 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold text-sm">{title[0]}</span>
                </div>
                <h3 className="font-serif font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">Ready to start your business?</h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
            Book a free consultation with Loresa. Let's build your foundation right — from day one.
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
