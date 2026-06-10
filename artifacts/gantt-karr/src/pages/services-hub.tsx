import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { CheckCircle, FileText, Shield, RefreshCw, BookOpen, Tag, Building2 } from "lucide-react";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

const NAVY = "#1a2f4e";
const GOLD = "#C9A84C";

const formationServices: { title: string; slug: string; desc: string; price: string; badge?: string }[] = [
  {
    title: "LLC Formation",
    slug: "llc-formation",
    desc: "Articles of Organization, Operating Agreement, EIN guidance, registered agent coordination, and document delivery.",
    price: "from $597",
  },
  {
    title: "Corporation Formation",
    slug: "corporation-filing",
    desc: "C-Corp or S-Corp Articles of Incorporation, bylaws template, EIN guidance, and registered agent.",
    price: "from $797",
  },
  {
    title: "Non-Profit Formation",
    slug: "non-profit-formation",
    desc: "Articles of Incorporation, bylaws, EIN application, and initial 1023 prep guidance.",
    price: "$997",
  },
  {
    title: "Series LLC Formation",
    slug: "series-llc",
    desc: "Master LLC plus first series setup, operating agreement, and EIN guidance.",
    price: "$897",
  },
  {
    title: "S-Corp Election (Form 2553)",
    slug: "scorp-election",
    desc: "Form preparation, filing guidance, and confirmation tracking for your S-Corp tax election.",
    price: "$297",
  },
  {
    title: "Foreign Entity Registration",
    slug: "foreign-entity",
    desc: "Expand your existing entity into a new state. Certificate of Authority filing and registered agent in the new state.",
    price: "$397 + state fee",
    badge: "Multi-State",
  },
];

const notaryServices: { title: string; slug: string; desc: string; price: string; badge?: string }[] = [
  {
    title: "Mobile Notary",
    slug: "mobile-notary",
    desc: "Convenient notarization at your home, office, hospital, or care facility. We come to you.",
    price: "from $75",
    badge: "MO & KS Only",
  },
  {
    title: "Remote Online Notarization",
    slug: "online-notary",
    desc: "Secure video-based notarization from anywhere. Real credentialed notary — not an automated queue.",
    price: "$35/document",
    badge: "20 States",
  },
  {
    title: "Loan Signing Agent",
    slug: "loan-signing",
    desc: "Full loan package signings for lenders, title companies, and real estate professionals. Same-day scan back available.",
    price: "$125–$150",
    badge: "MO & KS Only",
  },
];

const complianceServices: { title: string; slug: string; desc: string; price: string }[] = [
  {
    title: "Registered Agent Service",
    slug: "registered-agent",
    desc: "Professional state correspondence address with immediate forwarding of official notices.",
    price: "from $99/yr",
  },
  {
    title: "Annual Report Filing",
    slug: "annual-report",
    desc: "We handle your annual report on your behalf so you never miss a state deadline.",
    price: "$147 + state fee",
  },
  {
    title: "Compliance Calendar Setup",
    slug: "compliance-calendar",
    desc: "Custom deadline calendar mapped to your entities and states. Never miss a filing again.",
    price: "$147 one-time",
  },
  {
    title: "BOI Compliance Watch",
    slug: "boi-reporting",
    desc: "Monitor FinCEN rule changes. If BOI reporting becomes required, we file for you at no extra charge.",
    price: "$47/entity/yr",
  },
];

const documentServices: { title: string; slug: string; desc: string; price: string }[] = [
  {
    title: "Operating Agreement",
    slug: "operating-agreement",
    desc: "Standard or fully custom — drafted for your state and entity structure.",
    price: "$125–$247",
  },
  {
    title: "EIN Application Service",
    slug: "ein-assistance",
    desc: "Federal Tax ID required for banking, hiring, and business credibility.",
    price: "$97",
  },
  {
    title: "Amendments & Updates",
    slug: "amendments",
    desc: "Name change, address update, member change, or ownership transfer filings.",
    price: "from $97",
  },
  {
    title: "DBA Registration",
    slug: "dba-registration",
    desc: "Register, renew, or expand your trade name across one or multiple states.",
    price: "from $197 + state fee",
  },
  {
    title: "Business Agreements",
    slug: "business-agreements",
    desc: "NDAs, contractor agreements, service contracts, partnership agreements, and bylaws.",
    price: "from $97",
  },
  {
    title: "Dissolution Services",
    slug: "dissolution",
    desc: "Close your business properly with Articles of Dissolution and a wind-down checklist.",
    price: "from $197 + state fee",
  },
];

const packageDeals: { title: string; price: string; includes: string[] }[] = [
  {
    title: "Starter Business Package",
    price: "$797",
    includes: ["LLC formation", "EIN application", "Operating Agreement", "Registered Agent — 1st year"],
  },
  {
    title: "Business Builder Package",
    price: "$1,197",
    includes: ["Everything in Starter", "DBA registration", "S-Corp election filing"],
  },
  {
    title: "Full Launch Package",
    price: "$1,597",
    includes: ["Everything in Business Builder", "Annual report filing", "Compliance calendar", "BOI Compliance Watch — 1st year"],
  },
  {
    title: "Multi-Entity Package (3 entities)",
    price: "$1,497",
    includes: ["3 LLC formations", "3 EINs", "3 Operating Agreements", "3 Registered Agents — 1st year"],
  },
];

function ServiceCard({
  title, slug, desc, price, badge,
}: {
  title: string; slug: string; desc: string; price: string; badge?: string;
}) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="block group p-6 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-md transition-all h-full flex flex-col cursor-pointer">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">{title}</h3>
          {badge && (
            <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider bg-secondary/15 text-secondary border border-secondary/20 rounded-full px-2 py-0.5 leading-tight">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs font-semibold mb-3" style={{ color: GOLD }}>{price}</p>
        <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{desc}</p>
        <div className="mt-5 text-secondary text-sm font-medium flex items-center">
          Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}

function SectionHeading({ icon: Icon, label, title }: { icon: React.ElementType; label: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mb-10">
      <div className="mt-1 p-2 rounded-lg" style={{ background: `${GOLD}20` }}>
        <Icon className="h-5 w-5" style={{ color: GOLD }} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>{label}</p>
        <h2 className="font-serif text-2xl font-bold" style={{ color: NAVY }}>{title}</h2>
      </div>
    </div>
  );
}

export default function ServicesHub() {
  const allServices = [...formationServices, ...notaryServices, ...complianceServices, ...documentServices];

  return (
    <>
      <SEO
        title="Our Services | Business Formation, Notary & Compliance"
        description="LLC formation from $597, RON notarization $35/document, mobile notary, loan signing, registered agent, dissolution, amendments, DBA, and compliance services from Gantt Key Formation Group."
        schema={[
          itemListSchema({
            name: "Gantt Key Business Formation & Notary Services",
            description: "Complete service catalog for business formation, notary, and compliance across multiple states.",
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: GOLD }}>What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 text-primary-foreground">
            Formation. Compliance. Notary.
          </h1>
          <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
            Everything you need to form, protect, and grow your business — handled by a founder who treats every client like the only one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            {["LLC · Corp · Non-Profit", "20-State RON", "Mobile Notary MO/KS", "Dissolution & Amendments", "Annual Compliance"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5" style={{ color: GOLD }} />{item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Formation Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading icon={Building2} label="Start Your Business" title="Business Formation Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formationServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* Notary Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading icon={CheckCircle} label="Notary & Signing" title="Notary & Signing Services" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {notaryServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* Annual Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading icon={Shield} label="Stay Compliant" title="Annual Compliance Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* Document & Amendment Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading icon={FileText} label="Documents & Changes" title="Document & Amendment Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documentServices.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading icon={Tag} label="Bundles — Save More" title="Complete Business Packages" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {packageDeals.map((pkg) => (
              <div key={pkg.title} className="rounded-2xl border border-border bg-white p-6 hover:border-secondary hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-serif font-bold text-base leading-snug" style={{ color: NAVY }}>{pkg.title}</h3>
                  <span className="text-xl font-bold flex-shrink-0" style={{ color: GOLD }}>{pkg.price}</span>
                </div>
                <ul className="space-y-1.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: GOLD }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/pricing">
              <span className="inline-block font-semibold px-8 py-3.5 rounded-xl text-sm cursor-pointer transition-colors" style={{ background: GOLD, color: NAVY }}>
                View Full Pricing →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Not sure where to start?</h2>
          <p className="text-primary-foreground/75 mb-8 leading-relaxed">Book a free consultation and we will help you choose the right services for your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <span className="inline-block font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm cursor-pointer" style={{ background: GOLD, color: NAVY }}>
                Book a Free Consultation
              </span>
            </Link>
            <Link href="/pricing">
              <span className="inline-block font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm cursor-pointer text-white border border-white/30 hover:bg-white/10">
                View All Pricing
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
