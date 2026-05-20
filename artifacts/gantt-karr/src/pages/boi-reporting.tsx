import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { CheckCircle, AlertTriangle, FileText, ArrowRight } from "lucide-react";

const whoMayNeed = [
  "LLCs and corporations formed in the United States",
  "Foreign companies registered to do business in the U.S.",
  "Businesses with fewer than 20 full-time employees and under $5 million in gross receipts (small companies most commonly affected)",
  "Newly formed entities created after January 1, 2024",
  "Existing entities formed before January 1, 2024 (subject to applicable deadlines)",
];

const exemptions = [
  "Large operating companies (20+ employees, $5M+ revenue, U.S. office)",
  "Publicly traded companies",
  "Regulated entities (banks, credit unions, insurance companies, etc.)",
  "Certain inactive entities",
  "Government entities",
  "Nonprofit organizations (501(c) entities)",
];

const docChecklist = [
  "Full legal name of each beneficial owner",
  "Date of birth of each beneficial owner",
  "Current residential or business street address",
  "Government-issued photo ID (driver's license, passport, or state ID)",
  "Company's legal name and any DBAs (doing business as names)",
  "State or tribal jurisdiction of formation or registration",
  "EIN (Tax ID Number) or SSN if no EIN has been issued",
  "Date of formation or registration",
];

const faqs = [
  {
    q: "What is BOI reporting?",
    a: "Beneficial Ownership Information (BOI) reporting is a requirement under the Corporate Transparency Act (CTA), enforced by the Financial Crimes Enforcement Network (FinCEN), a bureau of the U.S. Department of the Treasury. Certain businesses are required to report information about the individuals who ultimately own or control them.",
  },
  {
    q: "Who qualifies as a 'beneficial owner'?",
    a: "A beneficial owner is any individual who directly or indirectly owns or controls at least 25% of a company's ownership interests, or who exercises substantial control over the company — including senior officers and individuals with authority over major decisions.",
  },
  {
    q: "What are the deadlines?",
    a: "Deadlines vary based on when your company was formed and current regulatory guidance. Requirements for BOI reporting may change based on regulations and legal updates. We strongly recommend consulting a licensed attorney or visiting FinCEN.gov for the most current deadlines applicable to your company.",
  },
  {
    q: "What happens if I don't file?",
    a: "Non-compliance can result in significant civil and criminal penalties. However, BOI reporting requirements and enforcement have been subject to legal challenges and regulatory changes. Always verify current requirements with a qualified legal professional.",
  },
  {
    q: "Does Gantt & Karr provide legal advice on BOI?",
    a: "No. We provide general information, document organization support, and coordination assistance. We do not provide legal, tax, or compliance advice. BOI reporting has legal implications — please consult a licensed attorney before submitting any report to FinCEN.",
  },
  {
    q: "Can Gantt & Karr file my BOI report for me?",
    a: "We provide guidance and document preparation support to help you organize the information you need. The actual submission to FinCEN must be reviewed carefully given the legal nature of the filing. We recommend working with a licensed attorney for the submission itself.",
  },
];

export default function BOIReporting() {
  return (
    <>
      <SEO
        title="BOI Reporting Assistance | Gantt & Karr Formation Group"
        description="BOI Reporting support and Beneficial Ownership Information guidance for LLCs and corporations. General information and document preparation support — not legal advice."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/services" className="text-secondary hover:text-primary-foreground text-sm font-semibold uppercase tracking-wider mb-8 inline-block">
            &larr; Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            BOI Reporting Support & Business Ownership Information Guidance
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">
            General information and document preparation support for business owners navigating Beneficial
            Ownership Information reporting requirements.
          </p>

          <div className="mt-8 bg-amber-400/20 border border-amber-400/40 text-amber-100 rounded-xl px-5 py-4 max-w-3xl flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-300" />
            <p className="text-sm leading-relaxed">
              <strong className="text-amber-200">Important:</strong> Requirements for BOI reporting may
              change based on regulations and legal updates. This page is for general informational
              purposes only and does not constitute legal or compliance advice. Please consult a
              licensed attorney for guidance specific to your situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Request Assistance
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is BOI */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Background</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">What Is BOI Reporting?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                Beneficial Ownership Information (BOI) reporting is a federal requirement introduced under
                the <strong className="text-foreground">Corporate Transparency Act (CTA)</strong>, a law
                aimed at combating money laundering, fraud, and illicit financial activity by increasing
                transparency around who owns and controls U.S. businesses.
              </p>
              <p>
                The reporting is administered by the <strong className="text-foreground">Financial Crimes
                Enforcement Network (FinCEN)</strong>, a bureau of the U.S. Department of the Treasury.
                Qualifying companies are required to submit identifying information about their beneficial
                owners — the individuals who ultimately own or control the business.
              </p>
            </div>
            <div>
              <p className="mb-4">
                BOI reports are submitted electronically through FinCEN's secure online portal. The
                information collected includes names, dates of birth, addresses, and ID numbers of
                beneficial owners.
              </p>
              <p className="font-medium text-foreground">
                This is a general overview. Requirements, deadlines, and exemptions are subject to
                regulatory and legal changes. Always verify current rules with a licensed attorney or
                directly through FinCEN.gov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who May Need */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Applicability</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Who May Need BOI Reporting</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many small businesses, LLCs, and corporations may be subject to BOI reporting requirements.
                Below are types of entities that commonly fall within scope — though this is not a
                comprehensive legal determination.
              </p>
              <ul className="space-y-3">
                {whoMayNeed.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-primary mb-5">Common Exemptions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Many entities are exempt from BOI reporting. Common exemptions include:
              </p>
              <ul className="space-y-3 mb-6">
                {exemptions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-900 text-xs leading-relaxed">
                  Exemption criteria are complex and subject to change. A licensed attorney should
                  determine whether your specific entity qualifies for any exemption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Checklist */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Be Prepared</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Documentation Checklist</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Gather these items before beginning the BOI reporting process. Having everything organized
              in advance makes the process smoother and reduces errors.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              {docChecklist.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                <FileText className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This checklist is for general preparedness purposes. Exact requirements may vary based
                  on your entity type, structure, and applicable regulations at the time of filing.
                  Consult a licensed attorney before submitting your BOI report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Need Help Getting Organized?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
            We can help you gather, organize, and prepare your documents — and connect you with licensed
            professionals for the legal and compliance side of BOI reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Request Assistance
              </Button>
            </Link>
            <Link href="/resources/professional-center">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                Professional Resources <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
