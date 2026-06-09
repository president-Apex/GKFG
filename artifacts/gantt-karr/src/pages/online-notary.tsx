import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Monitor, CheckCircle, Clock, ShieldCheck, Globe, Bell } from "lucide-react";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://ganttformation.com";

const whatToExpect = [
  {
    icon: Monitor,
    title: "Video-Based Identity Verification",
    body: "RON uses secure, real-time video sessions to confirm the identity of each signer — meeting or exceeding the standards of in-person notarization.",
  },
  {
    icon: ShieldCheck,
    title: "Legally Valid Where Permitted",
    body: "Remote Online Notarization is recognized in a growing number of states. When we launch, we'll clearly communicate which states we serve and which document types qualify.",
  },
  {
    icon: Globe,
    title: "Notarize from Anywhere",
    body: "No travel required. Whether you're at home, in the office, or across the country, RON brings notarization to your screen — on your schedule.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    body: "Book your appointment online, join a secure video session, and have your documents notarized — all without leaving your desk.",
  },
];

const documentTypes = [
  "Business Formation Documents",
  "Power of Attorney",
  "Affidavits & Sworn Statements",
  "Real Estate Transactions (where permitted)",
  "Estate Planning Documents",
  "General Business Agreements",
  "Employment Contracts",
];

export default function OnlineNotary() {
  return (
    <>
      <SEO
        title="Online Notary Services (Coming Soon) | Gantt Key Formation Group"
        description="Remote Online Notarization (RON) is coming to Gantt Key Formation Group. Notarize your documents from anywhere via secure video session — no travel required. Subject to state availability."
        schema={[
          serviceSchema({
            name: "Online Notary Services (Remote Online Notarization)",
            description: "Remote Online Notarization (RON) service currently in development. Clients will be able to notarize documents via secure video session from any location, subject to state availability and applicable regulations.",
            url: `${SITE_URL}/services/online-notary`,
            category: "Notary & Document Services",
          }),
          breadcrumbSchema([
            { name: "Services", href: "/services" },
            { name: "Online Notary Services", href: "/services/online-notary" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/services" className="text-secondary hover:text-white text-xs font-bold uppercase tracking-wider mb-8 inline-block">
            &larr; Back to Services
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-3 py-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              Coming Soon
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Online Notary Services
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mb-4">
            Remote Online Notarization (RON) is coming to Gantt Key Formation Group. Notarize your documents from anywhere via secure video session — no travel, no waiting rooms, no hassle.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-10 max-w-2xl leading-relaxed">
            We're building the infrastructure to deliver compliant, professional RON services. Join our interest list to be notified when this service launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-13 px-8 font-semibold">
                <Bell className="h-4 w-4 mr-2" />
                Join the Interest List
              </Button>
            </Link>
            <Link href="/services/mobile-notary">
              <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-13 px-8">
                Try Mobile Notary (Available Now)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Active alternative callout */}
      <section className="bg-secondary/10 border-b border-secondary/20 py-5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-foreground/70">
              <strong className="text-foreground">Need notarization now?</strong> Our Mobile Notary service is active in Missouri — we come to you.
            </p>
            <Link href="/services/mobile-notary">
              <span className="text-secondary text-xs font-bold uppercase tracking-wider hover:underline cursor-pointer">
                View Mobile Notary &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is RON */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">What Is RON?</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                Remote Online Notarization Explained
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Remote Online Notarization (RON) is a legally recognized process that allows a notary public and signer to complete notarization via secure, real-time video — without being physically in the same location.
                </p>
                <p>
                  Instead of scheduling a time and place to meet, you join a secure video session from wherever you are. Your identity is verified using government-issued ID and additional identity proofing methods, your documents are reviewed, and your notarized signature is applied electronically.
                </p>
                <p>
                  RON is increasingly accepted across the United States for a wide range of document types, subject to each state's specific laws and regulations.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {whatToExpect.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 bg-muted/40 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Offer */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Planned Document Coverage</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                Documents We Plan to Support
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When our RON service launches, we plan to support a wide variety of document types — subject to applicable state law and document eligibility requirements.
              </p>
              <p className="text-sm text-muted-foreground/70 italic">
                Final document coverage will be confirmed at launch and may vary by state.
              </p>
            </div>
            <ul className="space-y-3">
              {documentTypes.map((type) => (
                <li key={type} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3.5">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Join the List CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Bell className="h-10 w-10 text-secondary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">Be the first to know when we launch.</h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Join our interest list and we'll notify you as soon as Remote Online Notarization is available. There's no commitment — just early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base font-semibold">
                Join the Interest List
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

      {/* Disclaimer */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="Remote Online Notarization (RON) services are subject to state-specific laws and regulations. Notarization does not constitute legal advice, legal representation, or legal review of your documents. Gantt Key Formation Group is not a law firm. This service is not yet available. Information on this page describes planned future service offerings and is subject to change. For current notarization needs, please contact us about our active Mobile Notary service." />
        </div>
      </section>
    </>
  );
}
