import { SEO } from "@/components/seo";
import { offerCatalogSchema, breadcrumbSchema } from "@/lib/schema";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Plus } from "lucide-react";

const packages = [
  {
    name: "Start Package",
    price: "$297",
    tagline: "Your first step — built with confidence.",
    cta: "Start My Business",
    href: "/consultation",
    features: [
      "Startup consultation",
      "Business name guidance",
      "EIN application assistance",
      "Startup checklist",
      "Document organization support",
      "Anna AI intake support",
      "Email support",
    ],
  },
  {
    name: "Grow Package",
    price: "$597",
    tagline: "The complete launch foundation.",
    cta: "Launch My Business",
    href: "/consultation",
    popular: true,
    features: [
      "Everything in Start, plus:",
      "LLC formation assistance",
      "Operating agreement support",
      "Business startup guidance",
      "Business address guidance",
      "Priority support",
      "Startup planning session",
    ],
  },
  {
    name: "Founders Package",
    price: "$997",
    tagline: "Full setup for serious founders.",
    cta: "Build My Business",
    href: "/consultation",
    features: [
      "Everything in Grow, plus:",
      "EIN application assistance",
      "Registered agent service (Missouri only, if applicable)",
      "Business startup roadmap",
      "Business phone setup guidance",
      "Google Business Profile guidance",
      "One-on-one strategy session",
      "Priority onboarding",
    ],
  },
  {
    name: "Executive Package",
    price: "$1,997",
    tagline: "White-glove support from day one.",
    cta: "Start Executive Setup",
    href: "/consultation",
    features: [
      "Everything in Founders, plus:",
      "White-glove startup support",
      "Business systems setup guidance",
      "Website launch guidance",
      "AI intake consultation",
      "Extended founder consultation",
      "VIP support",
    ],
  },
];

const addons = [
  { name: "EIN Application Assistance", price: "$75" },
  { name: "Rush EIN Assistance", price: "$125" },
  { name: "LLC Formation Assistance", price: "$175" },
  { name: "Corporation Formation Assistance", price: "$225" },
  { name: "S-Corp Election Filing Assistance", price: "$150" },
  { name: "Operating Agreement Support", price: "$75" },
  { name: "Business Name Search Guidance", price: "$50" },
  { name: "Registered Agent Service (Missouri only)", price: "$125/year" },
  { name: "Mobile Notary", price: "Starting at $25 + travel fees" },
  { name: "Document Preparation Support", price: "$75" },
  { name: "Document Organization Package", price: "$50" },
  { name: "Business Address Guidance", price: "$50" },
  { name: "Business Startup Consultation", price: "$99" },
  { name: "Rush Startup Processing", price: "$199" },
  { name: "Business Phone Setup Guidance", price: "$99" },
  { name: "Google Business Profile Setup Guidance", price: "$149" },
  { name: "AI Intake Consultation (Anna)", price: "$297" },
  { name: "Website Launch Guidance", price: "$299" },
  { name: "Priority Support Upgrade", price: "$49" },
];

const frequentlyAdded = [
  "Registered Agent Services",
  "Mobile Notary",
  "Business Startup Roadmap",
  "Google Business Profile Setup",
  "AI Intake Setup with Anna",
  "Priority Processing",
  "Website Guidance",
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing & Packages | Gantt & Karr Formation Group"
        description="Transparent startup packages from $297. LLC formation, EIN assistance, notary services, and white-glove business setup support."
        schema={[
          offerCatalogSchema({
            packages: [
              { name: "Start Package", price: "$297", description: "Startup consultation, EIN application assistance, business name guidance, and document organization support.", url: "/pricing" },
              { name: "Grow Package", price: "$597", description: "Everything in Start plus LLC formation assistance, operating agreement support, and priority service.", url: "/pricing" },
              { name: "Founders Package", price: "$997", description: "Comprehensive business formation with registered agent coordination and full launch planning session.", url: "/pricing" },
              { name: "Executive Package", price: "$1997", description: "White-glove business setup with full formation, compliance coordination, and ongoing priority support.", url: "/pricing" },
            ],
          }),
          breadcrumbSchema([{ name: "Pricing", href: "/pricing" }]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Startup Packages Built for Real Entrepreneurs
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Choose the support level that fits your stage. Every package is designed to give you a clean,
            professional foundation — without the confusion or hidden costs.
          </p>
          <div className="mt-6 inline-block bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm rounded-lg px-5 py-2.5">
            State filing fees, government fees, and third-party fees may apply separately and are not
            included unless specifically stated.
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl flex flex-col ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-2xl ring-2 ring-secondary"
                    : "bg-card border border-border shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h2 className={`font-serif text-xl font-bold mb-1 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`}>
                      {pkg.name}
                    </h2>
                    <p className={`text-sm leading-snug ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="mb-7">
                    <span className={`font-serif text-4xl font-bold ${pkg.popular ? "text-primary-foreground" : "text-foreground"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm ml-1 ${pkg.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                      + state fees
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                            pkg.popular ? "text-secondary" : "text-secondary"
                          }`}
                        />
                        <span className={`text-sm leading-snug ${pkg.popular ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={pkg.href}>
                    <Button
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      size="lg"
                    >
                      {pkg.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto leading-relaxed">
            Government filing fees and state fees may apply separately and are not included unless
            specifically specified. We will provide exact fee totals before any filing is submitted.
          </p>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-muted/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Build Your Own</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Individual Add-On Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Need a specific service without a full package? Add exactly what your business requires.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between gap-4 bg-card rounded-xl border border-border px-5 py-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Plus className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground leading-snug">{addon.name}</span>
                </div>
                <span className="text-sm font-bold text-primary whitespace-nowrap flex-shrink-0">{addon.price}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/consultation">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Discuss Add-Ons in Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Added */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Popular Pairings</p>
                <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
                  Frequently Added Services
                </h2>
                <p className="text-primary-foreground/75 leading-relaxed">
                  Most clients round out their package with one or more of these services to get a
                  complete, professional setup from day one.
                </p>
              </div>
              <ul className="space-y-4">
                {frequentlyAdded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-muted/60">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
            Not sure which package is right for you?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Book a free startup consultation with Loresa or Kaileyanne. We will walk through your goals
            and help you choose the best path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-13 px-8">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-13 px-8">
                See How It Works
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
