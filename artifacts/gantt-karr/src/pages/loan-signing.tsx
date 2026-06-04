import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import {
  FileSignature, CheckCircle, Clock, ShieldCheck, Home, Bell, Briefcase
} from "lucide-react";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://ganttkarr.com";

const loanPackages = [
  {
    icon: Home,
    title: "Real Estate Purchase Closings",
    body: "Facilitating the signing of all documents required to complete the purchase or sale of a residential or commercial property.",
  },
  {
    icon: Briefcase,
    title: "Mortgage Refinances",
    body: "Coordinating the signing of refinance loan packages — clearly and accurately, so the transaction closes on time.",
  },
  {
    icon: FileSignature,
    title: "Home Equity Lines of Credit (HELOCs)",
    body: "Facilitating HELOC document signings with attention to detail, ensuring each document is properly executed.",
  },
  {
    icon: CheckCircle,
    title: "Reverse Mortgages",
    body: "Patient, thorough facilitation of reverse mortgage loan signings — an important transaction that deserves careful, unhurried attention.",
  },
  {
    icon: Clock,
    title: "Construction Loans",
    body: "Coordinating signing packages for new construction and lot loans — often complex document sets requiring accuracy and precision.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial Loan Documents",
    body: "Professional facilitation of commercial real estate and business loan signings, including multi-party transactions.",
  },
];

const whatToExpect = [
  {
    step: "01",
    title: "Schedule Your Signing",
    body: "Contact us to arrange a signing appointment. We'll coordinate with your title company, lender, or escrow officer to confirm the document package and timing.",
  },
  {
    step: "02",
    title: "Document Package Review",
    body: "Before or at the signing, your signing agent reviews the package to ensure all documents are present and correctly prepared — catching any issues before you sign.",
  },
  {
    step: "03",
    title: "The Signing Appointment",
    body: "Your signing agent guides you through each document, explaining what you're signing in plain language — without providing legal advice. Every signature is witnessed and notarized as required.",
  },
  {
    step: "04",
    title: "Package Return",
    body: "All executed documents are organized and returned to your title company, lender, or designated recipient promptly, keeping your transaction on schedule.",
  },
];

export default function LoanSigning() {
  return (
    <>
      <SEO
        title="Loan Signing Services (Coming Soon) | Gantt Key Formation Group"
        description="Certified loan signing agent services are coming to Gantt Key Formation Group. Real estate closings, mortgage refinances, HELOCs, and more — professional, accurate, and on-time."
        schema={[
          serviceSchema({
            name: "Loan Signing Services",
            description: "Certified loan signing agent services for real estate closings, mortgage refinances, HELOCs, and other loan document packages. Currently in development — join the interest list.",
            url: `${SITE_URL}/services/loan-signing`,
            category: "Notary & Document Services",
          }),
          breadcrumbSchema([
            { name: "Services", href: "/services" },
            { name: "Loan Signing Services", href: "/services/loan-signing" },
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
            Loan Signing Services
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mb-4">
            Certified loan signing agent services for real estate closings, mortgage refinances, HELOCs, and other loan document packages — professional, accurate, and on schedule.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-10 max-w-2xl leading-relaxed">
            This service is currently in development. Join our interest list to be notified when we launch, or contact us to discuss your timeline.
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
                View Mobile Notary (Available Now)
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
              <strong className="text-foreground">Need a notary now?</strong> Our Mobile Notary service is active in Missouri — for signings that can't wait.
            </p>
            <Link href="/services/mobile-notary">
              <span className="text-secondary text-xs font-bold uppercase tracking-wider hover:underline cursor-pointer">
                View Mobile Notary &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is a Loan Signing Agent */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">About This Service</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                What Is a Loan Signing Agent?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Loan Signing Agent (LSA) is a notary public who specializes in the execution of loan document packages — most commonly for real estate transactions. An LSA guides signers through the documents required to complete a closing, witnesses signatures, and applies notarial acknowledgments as required.
                </p>
                <p>
                  LSAs work in coordination with title companies, escrow officers, mortgage lenders, and real estate attorneys to ensure that closings happen accurately and on time. They do not provide legal advice or make recommendations about the documents being signed.
                </p>
                <p>
                  A skilled signing agent understands loan document packages, knows which documents require notarization, and ensures the package is complete and correctly executed before return.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Works directly with title companies and lenders",
                "Guides signers through each document clearly",
                "Witnesses and notarizes required signatures",
                "Organizes and returns completed packages promptly",
                "Flexible scheduling including evenings and weekends",
                "Professional, punctual, and detail-oriented",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-muted/40 border border-border rounded-xl px-5 py-3.5">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planned Loan Packages */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Planned Coverage</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Signing Packages We Plan to Support</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              When this service launches, we plan to facilitate the following types of loan signings. Final coverage will be confirmed at launch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanPackages.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="font-serif text-3xl font-bold text-primary">How a Loan Signing Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map(({ step, title, body }) => (
              <div key={step} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
                <div className="text-3xl font-serif font-bold text-secondary/20">{step}</div>
                <h3 className="font-semibold text-primary leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the List CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Bell className="h-10 w-10 text-secondary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">Interested in our Loan Signing service?</h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Let us know you're interested and we'll reach out as soon as this service is available. Title companies and lenders are welcome to inquire.
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
          <Disclaimer notice="Loan signing services facilitate the execution of loan document packages and do not constitute legal advice, legal representation, or legal review of your documents. A loan signing agent is not an attorney. Gantt Key Formation Group is not a law firm. This service is not yet available. Information on this page describes planned future service offerings and is subject to change. For legal guidance regarding your loan or real estate transaction, please consult a licensed attorney." />
        </div>
      </section>
    </>
  );
}
