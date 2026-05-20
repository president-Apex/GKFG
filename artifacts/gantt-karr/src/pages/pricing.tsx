import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const packages = [
  {
    name: "The Essential",
    price: "$299",
    desc: "Perfect for the straightforward LLC formation.",
    features: [
      "State Name Availability Check",
      "Preparation of Articles of Organization",
      "State Filing Coordination",
      "Digital Copy of Documents"
    ]
  },
  {
    name: "The Executive",
    price: "$599",
    desc: "Our most popular. A comprehensive foundation.",
    features: [
      "Everything in Essential",
      "EIN (Tax ID) Acquisition",
      "Custom Operating Agreement",
      "Registered Agent Coordination (1st Year)",
      "Startup Compliance Checklist"
    ],
    popular: true
  },
  {
    name: "The Visionary Launch",
    price: "$1,299",
    desc: "The complete setup, including digital presence and AI.",
    features: [
      "Everything in Executive",
      "Anna AI Intake Setup",
      "Business Phone Line Setup",
      "Google Business Profile Creation",
      "Priority Processing",
      "1-on-1 Startup Strategy Session"
    ]
  }
];

export default function Pricing() {
  return (
    <>
      <SEO title="Pricing & Packages | Business Formation" />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Transparent, Premium Packages</h1>
          <p className="text-xl text-muted-foreground">Invest in a foundation built right the first time. State filing fees are separate.</p>
        </div>
      </div>
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-3xl p-8 border ${pkg.popular ? 'border-secondary bg-primary text-primary-foreground relative' : 'border-border bg-card'}`}>
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-4">{pkg.price} <span className="text-sm font-normal opacity-70">+ State Fees</span></div>
                <p className={`mb-8 ${pkg.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{pkg.desc}</p>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${pkg.popular ? 'bg-secondary' : 'bg-primary'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/consultation">
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <p>Note: State filing fees vary by state and are not included in the package prices. We will provide an exact quote for state fees during your consultation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
