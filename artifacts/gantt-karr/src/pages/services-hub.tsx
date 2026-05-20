import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

const featuredServices: { title: string; slug: string; desc: string; badge?: string }[] = [
  {
    title: "LLC Formation Assistance",
    slug: "llc-formation",
    desc: "Start your business structure properly with state filing coordination and document support.",
  },
  {
    title: "Corporation Filing Assistance",
    slug: "corporation-filing",
    desc: "Articles of Incorporation preparation and state filing coordination for growing businesses.",
  },
  {
    title: "EIN Application Assistance",
    slug: "ein-assistance",
    desc: "Secure your federal Tax ID number — required for banking, hiring, and business credibility.",
  },
  {
    title: "Missouri Registered Agent",
    slug: "registered-agent",
    desc: "Professional point of contact for state correspondence and compliance notices.",
    badge: "Missouri Only",
  },
  {
    title: "BOI Reporting Assistance",
    slug: "boi-reporting",
    desc: "General information and document organization support for Beneficial Ownership Information reporting.",
  },
  {
    title: "Online Notary Services",
    slug: "online-notary",
    desc: "Remote online notarization from anywhere — subject to state availability.",
  },
  {
    title: "Mobile Notary Services",
    slug: "mobile-notary",
    desc: "We come to your location for professional, convenient document notarization.",
    badge: "Missouri Only",
  },
  {
    title: "Loan Signing Services",
    slug: "loan-signing",
    desc: "Certified signing agent for real estate closings, mortgage, and loan document packages.",
  },
  {
    title: "Startup Packages",
    slug: "launch-packages",
    desc: "Bundled formation and setup services designed to get your business off the ground quickly.",
  },
  {
    title: "Anna AI Intake",
    slug: "anna-ai-intake",
    desc: "Automate client intake, consultations, and lead capture with our AI assistant Anna.",
  },
];

const additionalServices: { title: string; slug: string; desc: string; badge?: string }[] = [
  { title: "Business Formation Assistance", slug: "business-formation", desc: "General formation support for various entity types" },
  { title: "Operating Agreement Support", slug: "operating-agreement", desc: "Internal structure documentation for your LLC" },
  { title: "Business Name Search Guidance", slug: "business-name-search", desc: "Clear your desired name before filing" },
  { title: "Business Address & Mailbox Guidance", slug: "business-address", desc: "Professional physical presence without a physical office" },
  { title: "Document Preparation Support", slug: "document-preparation", desc: "Professional handling of your critical paperwork" },
  { title: "Document Organization Support", slug: "document-organization", desc: "Structure your business files for success" },
  { title: "Startup Compliance Checklist", slug: "startup-compliance", desc: "Stay on the right side of regulations from day one" },
  { title: "Startup Consultation", slug: "startup-consultation", desc: "Strategic advice for founders — discuss your vision" },
  { title: "Entrepreneur Support Services", slug: "entrepreneur-support", desc: "Ongoing operational support as you grow" },
  { title: "Website & Digital Launch Guidance", slug: "website-digital-launch", desc: "Establish your initial digital footprint" },
  { title: "Business Phone & Intake Setup", slug: "business-phone-intake", desc: "Professional communications setup" },
  { title: "Google Business Profile Setup Guidance", slug: "google-business-profile", desc: "Establish your local search presence" },
  { title: "Startup Systems & Operations Support", slug: "startup-systems", desc: "Optimize your internal workflows from day one" },
];

function ServiceCard({ title, slug, desc, badge }: { title: string; slug: string; desc: string; badge?: string }) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="block group p-6 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-md transition-all h-full flex flex-col cursor-pointer">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">{title}</h3>
          {badge && (
            <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary border border-secondary/20 rounded-full px-2 py-0.5 leading-tight">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{desc}</p>
        <div className="mt-5 text-secondary text-sm font-medium flex items-center">
          Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesHub() {
  return (
    <>
      <SEO
        title="Our Services | Business Formation, Notary & Startup Support"
        description="LLC formation, corporation filing, EIN assistance, Missouri registered agent, BOI reporting, notary services, loan signing, and startup packages."
      />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-primary-foreground">Comprehensive Setup Services</h1>
          <p className="text-primary-foreground/75 text-lg leading-relaxed">
            Everything you need to form, structure, and launch your business with confidence — handled
            by a family-led team that treats every client like their own.
          </p>
        </div>
      </div>

      {/* Core 10 Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <h2 className="font-serif text-2xl font-bold text-primary">Core Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-primary mb-2">Additional Support Services</h2>
            <p className="text-muted-foreground">More ways we can help you build a stronger business foundation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {additionalServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Not sure where to start?</h2>
          <p className="text-primary-foreground/75 mb-8">Book a free consultation and we will help you choose the right services for your goals.</p>
          <Link href="/consultation">
            <span className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm cursor-pointer">
              Book a Free Consultation
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
