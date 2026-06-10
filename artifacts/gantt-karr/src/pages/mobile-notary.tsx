import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import {
  MapPin, CheckCircle, Clock, FileText, ShieldCheck, Phone, Calendar, Users, Bell
} from "lucide-react";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://ganttformationgroup.com";

const faqs = [
  {
    q: "What is a mobile notary?",
    a: "A mobile notary is a commissioned notary public who travels to your location to perform notarizations. Instead of you coming to an office, we come to you — at your home, office, hospital, or other location of your choice within our service area.",
  },
  {
    q: "Where do you provide mobile notary services?",
    a: "Gantt Key Formation Group currently provides mobile notary services within Missouri. Please contact us to confirm availability in your specific city or county.",
  },
  {
    q: "What types of documents can be notarized?",
    a: "Common documents include LLC and corporate formation documents, operating agreements, affidavits, acknowledgments, deeds, power of attorney documents, wills, trust documents, and general business contracts. Please contact us to confirm your specific document type.",
  },
  {
    q: "Does a notary provide legal advice?",
    a: "No. A notary public is a state-commissioned official who witnesses signatures and verifies identity. Notarization does not constitute legal advice, legal representation, or legal review of your documents. If you need legal guidance, please consult a licensed attorney.",
  },
  {
    q: "What do I need to bring or have ready?",
    a: "You will need a valid government-issued photo ID (driver's license or passport) for each signer, the complete document ready to sign (do not sign it beforehand unless instructed), and any witnesses required by your document type.",
  },
  {
    q: "How far in advance do I need to schedule?",
    a: "We recommend scheduling at least 24–48 hours in advance. Same-day or next-day appointments may be available depending on location and availability. Contact us to check current scheduling options.",
  },
  {
    q: "What are your fees?",
    a: "Mobile notary fees vary based on document type, number of signatures, and travel distance. Contact us for a quote specific to your needs. We are transparent about pricing — you will know the cost before we arrive.",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    body: "Reach out by phone, email, or the client intake form to describe your notarization needs and preferred date, time, and location.",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Schedule Your Appointment",
    body: "We confirm availability, provide a transparent quote, and lock in a time that works for you — including evenings and weekends when available.",
  },
  {
    step: "03",
    icon: MapPin,
    title: "We Come to You",
    body: "Your notary travels to your home, office, medical facility, or another agreed location within our Missouri service area.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Documents Notarized",
    body: "We verify your identity, witness your signature, and apply our notarial seal — your documents are complete and ready for their next step.",
  },
];

const documentTypes = [
  "LLC & Business Formation Documents",
  "Operating Agreements",
  "Power of Attorney Documents",
  "Affidavits & Sworn Statements",
  "Real Property Deeds & Transfers",
  "Trust & Estate Documents",
  "Employment & Contractor Agreements",
  "General Business Contracts",
  "Financial Agreements",
  "Medical & Healthcare Directives",
];

const benefits = [
  {
    icon: MapPin,
    title: "We Come to You",
    desc: "No need to locate a notary office or rearrange your schedule. We travel to your preferred location across Missouri.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Morning, afternoon, evening, and weekend appointments available. We work around your schedule, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant & Professional",
    desc: "Every notarization is conducted in full compliance with Missouri notary law. Identities are verified, records are maintained.",
  },
  {
    icon: FileText,
    title: "Wide Document Coverage",
    desc: "Business formation, estate planning, real estate, and more — if it requires a notary seal, we can help.",
  },
  {
    icon: Users,
    title: "Multiple Signers Welcome",
    desc: "Whether you have one signer or a full closing table, we accommodate your needs with professionalism and care.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    desc: "You will receive a clear quote before we arrive. No hidden travel fees or surprise charges.",
  },
];

export default function MobileNotary() {
  return (
    <>
      <SEO
        title="Mobile Notary Services (Coming Soon) | Gantt Key Formation Group"
        description="Mobile notary services coming soon to Gantt Key Formation Group. We'll travel to your home, office, or other location for document notarization — business formation, affidavits, power of attorney, and more."
        schema={[
          serviceSchema({
            name: "Mobile Notary Services",
            description: "Professional mobile notary services throughout Missouri. We travel to your location for convenient, compliant document notarization — business documents, affidavits, power of attorney, deeds, and more.",
            url: `${SITE_URL}/services/mobile-notary`,
            category: "Notary & Document Services",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Services", href: "/services" },
            { name: "Mobile Notary Services", href: "/services/mobile-notary" },
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
            Mobile Notary Services
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mb-4">
            Professional document notarization at your location — home, office, medical facility, or anywhere across Missouri. We come to you, so you can focus on what matters most.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-10 max-w-2xl leading-relaxed">
            This service is currently in development. Join our interest list to be notified when mobile notary appointments become available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-13 px-8 font-semibold">
                <Bell className="h-4 w-4 mr-2" />
                Join the Interest List
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 h-13 px-8">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming soon callout */}
      <section className="bg-secondary/10 border-b border-secondary/20 py-5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-foreground/70">
              <strong className="text-foreground">Not ready yet —</strong> but the information below gives you a clear picture of what to expect when we launch.
            </p>
            <Link href="/contact">
              <span className="text-secondary text-xs font-bold uppercase tracking-wider hover:underline cursor-pointer">
                Join the Interest List &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">How Mobile Notary Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map(({ step, icon: Icon, title, body }) => (
              <div key={step} className="relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
                <div className="text-3xl font-serif font-bold text-secondary/20 leading-none">{step}</div>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Mobile</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Service Built Around You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">What We Notarize</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                Common Document Types
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We handle a wide range of document types. If your document requires a notary seal and signature, reach out and we'll confirm whether we can assist.
              </p>
              <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                Note: This list is illustrative, not exhaustive. Document requirements vary by state and transaction type.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {documentTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Be Prepared</p>
            <h2 className="font-serif text-3xl font-bold mb-4">What to Have Ready</h2>
            <p className="text-primary-foreground/75 leading-relaxed max-w-xl mx-auto">
              To ensure a smooth, efficient notarization appointment, please have the following ready before we arrive.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Valid Photo ID", body: "A current, government-issued photo ID (driver's license or passport) for each person whose signature will be notarized." },
              { title: "Complete Documents", body: "Your documents should be fully completed and ready to sign. Do not sign before the notary arrives unless specifically instructed to do so." },
              { title: "Witnesses (If Required)", body: "Some documents require one or two witnesses in addition to notarization. Check your document requirements and arrange witnesses in advance if needed." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-6 border border-white/15">
                <h3 className="font-semibold text-white mb-3">{title}</h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="font-serif text-3xl font-bold text-primary">Mobile Notary FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-sm font-semibold text-foreground list-none hover:bg-muted/40 transition-colors">
                  {q}
                  <span className="flex-shrink-0 text-secondary text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Bell className="h-10 w-10 text-secondary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">Interested in Mobile Notary?</h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Join our interest list and we'll notify you as soon as mobile notary appointments are available in your area.
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
          <Disclaimer notice="Mobile notary services verify the identity of signers and witness document signatures in accordance with applicable state law. Notarization does not constitute legal advice, legal representation, or legal review of your documents. Gantt Key Formation Group is not a law firm. This service is not yet available. Information on this page describes planned future service offerings and is subject to change. For legal guidance regarding your documents, please consult a licensed attorney." />
        </div>
      </section>
    </>
  );
}
