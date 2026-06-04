import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { Bell, CheckCircle } from "lucide-react";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

const formationServices: { title: string; slug: string; desc: string; badge?: string }[] = [
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
    badge: "MO Members Bonus",
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

const notaryServices: { title: string; slug: string; desc: string }[] = [
  {
    title: "Mobile Notary Services",
    slug: "mobile-notary",
    desc: "Convenient notarization services at your home, office, hospital, care facility, or mutually agreed-upon location.",
  },
  {
    title: "Online Notary Services",
    slug: "online-notary",
    desc: "Secure remote online notarization services designed for clients who prefer a virtual appointment experience.",
  },
  {
    title: "Loan Signing Services",
    slug: "loan-signing",
    desc: "Professional loan signing services for buyers, sellers, lenders, title companies, and real estate professionals.",
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

function NotaryCard({ title, slug, desc }: { title: string; slug: string; desc: string }) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="block group p-6 rounded-2xl border border-secondary/25 bg-card hover:border-secondary hover:shadow-md transition-all h-full flex flex-col cursor-pointer">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">{title}</h3>
          <span className="inline-flex items-center gap-1 flex-shrink-0 text-[9px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary border border-secondary/20 rounded-full px-2 py-0.5 leading-tight">
            <span className="inline-block h-1 w-1 rounded-full bg-secondary animate-pulse" />
            Coming Soon
          </span>
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
  const allServices = [...formationServices, ...notaryServices];

  return (
    <>
      <SEO
        title="Our Services | Business Formation, Notary & Startup Support"
        description="LLC formation, corporation filing, EIN assistance, Missouri registered agent, mobile notary, online notary, loan signing, and startup packages from Gantt Key Formation Group."
        schema={[
          itemListSchema({
            name: "Gantt Key Business Formation & Notary Services",
            description: "Complete service catalog for business formation, notary, and startup support across 6 states.",
            url: "/services",
            items: allServices.map((s) => ({
              name: s.title,
              url: `/services/${s.slug}`,
              description: s.desc,
            })),
          }),
          breadcrumbSchema([{ name: "Services", href: "/services" }]),
        ]}
      />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground pt-28 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-primary-foreground">Comprehensive Setup Services</h1>
          <p className="text-primary-foreground/75 text-lg leading-relaxed">
            Everything you need to form, structure, and launch your business with confidence — handled
            by a founder-led team that treats every client with personal, professional care.
          </p>
        </div>
      </div>

      {/* Core Formation Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <h2 className="font-serif text-2xl font-bold text-primary">Business Formation Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formationServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Notary & Signing Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <Bell className="h-5 w-5 text-secondary" />
            <h2 className="font-serif text-2xl font-bold text-primary">Notary &amp; Signing Services</h2>
          </div>

          {/* Launch banner */}
          <div className="rounded-2xl border border-secondary/30 bg-primary text-primary-foreground p-8 mb-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-3 py-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  Launching Soon
                </span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                Notary Division Launching Soon
              </h3>
              <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-2xl">
                Gantt Key Formation Group is expanding its services to include Mobile Notary, Online Notary, and Loan
                Signing Services. Join our waitlist to be notified when appointments become available.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm cursor-pointer whitespace-nowrap">
                  <Bell className="h-4 w-4" />
                  Join the Waitlist
                </span>
              </Link>
            </div>
          </div>

          {/* Three notary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {notaryServices.map((s) => (
              <NotaryCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
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
