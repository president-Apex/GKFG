import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { CheckCircle, Building2, ArrowRight } from "lucide-react";
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

const process = [
  {
    step: "1",
    title: "Consultation & Strategy",
    desc: "We discuss your business goals, state of registration, and whether a corporation is the right structure for your situation.",
  },
  {
    step: "2",
    title: "Name & Document Preparation",
    desc: "We guide you through the name availability check and assist in preparing the required Articles of Incorporation for your chosen state.",
  },
  {
    step: "3",
    title: "Filing Coordination",
    desc: "We coordinate the submission of your formation documents to the appropriate state agency and track the filing status.",
  },
  {
    step: "4",
    title: "Post-Filing Support",
    desc: "Once your corporation is formed, we help organize your documents, explain next steps, and connect you with the right resources.",
  },
];

const benefits = [
  "Articles of Incorporation preparation",
  "State filing coordination",
  "Name availability guidance",
  "Shareholder and director structure overview",
  "Document organization support",
  "EIN assistance (available as add-on)",
  "S-Corp election guidance (available as add-on)",
  "Post-filing compliance overview",
];

const comparison = [
  {
    feature: "Ownership structure",
    llc: "Members (flexible)",
    corp: "Shareholders",
  },
  {
    feature: "Management",
    llc: "Member-managed or manager-managed",
    corp: "Board of directors + officers",
  },
  {
    feature: "Taxation (default)",
    llc: "Pass-through taxation",
    corp: "C-Corp double taxation (or S-Corp election)",
  },
  {
    feature: "Investment & fundraising",
    llc: "More limited",
    corp: "Preferred by investors; can issue stock",
  },
  {
    feature: "Formality requirements",
    llc: "Fewer formal requirements",
    corp: "Annual meetings, minutes, resolutions required",
  },
  {
    feature: "Best for",
    llc: "Flexibility, small teams, pass-through",
    corp: "Scaling, investors, S-Corp election",
  },
];

const faqs = [
  {
    q: "What states do you assist with corporation filings?",
    a: "We currently assist with corporation filings across all 20 states we serve, including Missouri, Kansas, Arizona, Tennessee, North Carolina, and Georgia. Contact us to confirm availability for your specific state.",
  },
  {
    q: "What is the difference between a C-Corp and an S-Corp?",
    a: "A C-Corporation is the default corporate structure and is subject to corporate income tax (double taxation). An S-Corporation is a tax election made with the IRS that allows the corporation's income and losses to pass through to shareholders' personal tax returns, avoiding double taxation. We can assist with S-Corp election paperwork as an add-on service.",
  },
  {
    q: "Do I need a registered agent for my corporation?",
    a: "Yes. Every corporation is required to maintain a registered agent with a physical address in the state of formation. We offer Missouri registered agent coordination as part of our services.",
  },
  {
    q: "Is corporation formation right for my business?",
    a: "Corporations are often best for businesses that plan to raise investment capital, issue stock to employees, or eventually go public. If you are a solo founder or small team looking for flexible structure and pass-through taxes, an LLC may be more appropriate. We can discuss your goals during a free consultation.",
  },
  {
    q: "Do you provide legal or tax advice?",
    a: "No. Gantt Key Formation Group provides business formation assistance and document coordination — not legal, tax, or financial advice. We strongly encourage you to consult a licensed attorney or CPA before deciding on your business structure.",
  },
];

export default function CorporationFiling() {
  return (
    <>
      <SEO
        title="Corporation Filing Assistance | Gantt Key Formation Group"
        description="Professional corporation filing assistance for entrepreneurs and growing businesses. We coordinate your Articles of Incorporation, state filing, and post-formation support."
        schema={[
          serviceSchema({ name: "Corporation Filing Assistance", description: "Professional support for forming a corporation. We coordinate Articles of Incorporation, state filing, and post-formation documentation across all 20 states we serve.", url: `${SITE_URL}/services/corporation-filing`, category: "Business Formation Service" }),
          faqSchema([
            { q: "What states do you assist with corporation filings?", a: "We currently assist with corporation filings across all 20 states we serve, including Missouri, Kansas, Arizona, Tennessee, North Carolina, and Georgia. Contact us to confirm availability for your specific state." },
            { q: "What is the difference between a C-Corp and an S-Corp?", a: "A C-Corporation is the default corporate structure subject to corporate income tax. An S-Corporation is a tax election made with the IRS that allows income and losses to pass through to shareholders' personal tax returns, avoiding double taxation." },
            { q: "Do I need a registered agent for my corporation?", a: "Yes. Every corporation is required to maintain a registered agent with a physical address in the state of formation. We offer Missouri registered agent coordination as part of our services." },
            { q: "Is corporation formation right for my business?", a: "Corporations are often best for businesses that plan to raise investment capital, issue stock to employees, or eventually go public. We can discuss your goals during a free consultation." },
            { q: "Do you provide legal or tax advice?", a: "No. Gantt Key Formation Group provides business formation assistance and document coordination — not legal, tax, or financial advice. We strongly encourage consulting a licensed attorney or CPA before deciding on your business structure." },
          ]),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Corporation Filing Assistance", href: "/services/corporation-filing" }]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/services" className="text-secondary hover:text-primary-foreground text-sm font-semibold uppercase tracking-wider mb-8 inline-block">
            &larr; Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Corporation Filing Assistance for Entrepreneurs and Growing Businesses
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">
            Ready to structure your business as a corporation? We handle the formation paperwork and
            filing coordination so you can focus on building your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Start My Business Setup
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is a Corporation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Formation Support</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">What Is a Corporation?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A corporation is a legal entity that is separate and distinct from its owners (shareholders).
                It has the ability to own property, enter into contracts, sue and be sued, and continue
                operating regardless of changes in ownership.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Corporations offer strong personal liability protection for shareholders. They are
                particularly well-suited for businesses seeking outside investment, planning to offer
                employee equity, or considering an S-Corp tax election.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Formation begins with filing Articles of Incorporation with your state's Secretary of
                State office. Our team coordinates this process on your behalf.
              </p>
            </div>
            <div className="bg-muted/60 rounded-2xl p-7">
              <h3 className="font-serif font-bold text-xl text-primary mb-5">What We Help With</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporation vs LLC */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Structure Comparison</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Corporation vs LLC</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Both offer personal liability protection — but they differ in structure, taxation, and use case.
              This is a general overview only. Consult a licensed professional for advice specific to your situation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Feature</th>
                  <th className="text-left px-5 py-4 font-semibold">LLC</th>
                  <th className="text-left px-5 py-4 font-semibold rounded-tr-2xl">Corporation</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="px-5 py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.llc}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.corp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            This comparison is for general informational purposes only and does not constitute legal or tax advice.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Filing Support Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A clear, guided experience from start to finish — no confusion, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {process.map((step) => (
              <div key={step.step} className="flex gap-5 bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
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
                <h3 className="font-bold text-foreground mb-3 flex items-start gap-2">
                  <Building2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  {q}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
            Ready to Form Your Corporation?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
            Book a free consultation and we will walk through your goals, structure options, and next steps together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Start My Business Setup
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-base">
                View Pricing <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Disclaimer notice="Entity selection may affect legal and tax outcomes. Consult licensed legal or tax professionals regarding your individual circumstances." />
        </div>
      </section>
    </>
  );
}
