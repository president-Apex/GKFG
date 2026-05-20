import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { MapPin, ShieldCheck, FileText, Phone, Users, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "Do I need a registered agent in Missouri?",
    a: "Yes. Missouri law requires every LLC and corporation registered in the state to maintain a registered agent with a physical Missouri address who is available during normal business hours to receive legal and state correspondence on behalf of the business.",
  },
  {
    q: "Can I be my own registered agent in Missouri?",
    a: "You can serve as your own registered agent in Missouri if you have a physical address in the state and are consistently available during business hours. However, many business owners prefer using a professional service to protect their privacy and ensure no important documents are missed — especially if they work remotely, travel, or operate from a home address.",
  },
  {
    q: "What documents are sent to a registered agent?",
    a: "A registered agent receives service of process (legal notices and lawsuits), official correspondence from the Missouri Secretary of State, annual report notices, compliance reminders, and other state-required communications. Missing these can result in penalties or loss of good standing.",
  },
  {
    q: "How does Gantt & Karr help with registered agent services?",
    a: "We coordinate professional Missouri registered agent services on your behalf, helping you identify a compliant solution, understand your obligations, and maintain your business's good standing with the state. We handle the coordination so you can focus on running your business.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Privacy Support",
    desc: "Keep your personal home address off public business filings by using a professional registered address for state correspondence.",
  },
  {
    icon: FileText,
    title: "Reliable Document Handling",
    desc: "Ensure every legal notice, state filing reminder, and compliance document is received, logged, and forwarded without delay.",
  },
  {
    icon: Phone,
    title: "Consistent Communication",
    desc: "Maintain an uninterrupted point of contact with the state — even when you travel, relocate, or change offices.",
  },
  {
    icon: Users,
    title: "Professional Business Support",
    desc: "Present a polished, credible business structure from day one with professional support behind the scenes.",
  },
];

const whoWeHelp = [
  "LLCs registered in Missouri",
  "Missouri corporations",
  "Small businesses and sole proprietors registering formally",
  "New entrepreneurs filing their first business entity",
  "Service businesses operating across multiple Missouri cities",
];

const locations = [
  "Kansas City",
  "Liberty",
  "St. Louis",
  "Springfield",
  "Columbia",
  "Statewide Missouri support",
];

export default function RegisteredAgentMissouri() {
  return (
    <>
      <SEO
        title="Missouri Registered Agent Services | Gantt & Karr Formation Group"
        description="Professional Missouri registered agent coordination for LLCs, corporations, and small businesses. Maintain a reliable point of contact for state correspondence and compliance notices."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/services" className="text-secondary hover:text-white text-sm font-bold uppercase tracking-wider mb-8 inline-block">
            &larr; Back to Services
          </Link>
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <MapPin className="h-3.5 w-3.5" />
            Missouri Only
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Missouri Registered Agent Services for Entrepreneurs and Small Businesses
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">
            Maintain a reliable Missouri point of contact for important business correspondence and state-required notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/how-it-works">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Start My Missouri Business Setup
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-base">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Is a Registered Agent */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">What Is a Registered Agent?</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A registered agent — also called a "statutory agent" or "agent for service of process" — is a designated individual or entity authorized to receive official legal and state correspondence on behalf of a registered business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              In Missouri, every LLC and corporation is required by law to designate a registered agent with a physical street address in the state. This agent must be available during normal business hours to accept documents including:
            </p>
            <ul className="space-y-2 text-muted-foreground list-none pl-0">
              {[
                "Service of process (lawsuits and legal notices)",
                "Annual report reminders and state compliance notices",
                "Official correspondence from the Missouri Secretary of State",
                "Tax and regulatory notifications",
                "Administrative dissolution warnings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Missouri Businesses Need One */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Why Missouri Businesses Need a Registered Agent</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Failing to maintain a proper registered agent in Missouri can result in serious consequences — including administrative dissolution of your business, loss of good standing, missed lawsuit notices, and civil penalties.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A professional registered agent solution ensures your business remains compliant, your personal address stays off public records, and critical documents never slip through the cracks — even when you are traveling, between offices, or growing rapidly.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 text-sm leading-relaxed font-medium">
              Registered Agent Services are currently available only within Missouri. If your business is registered in another state, we encourage you to consult with a professional in that state.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Benefits of Professional Registered Agent Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 rounded-2xl border border-border bg-card">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Who We Help</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our Missouri registered agent coordination service is designed for business owners at every stage — from brand-new entrepreneurs filing their first LLC to established companies looking for a more professional compliance solution.
              </p>
              <ul className="space-y-4">
                {whoWeHelp.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="font-serif font-bold text-2xl mb-6 text-white">Missouri Locations Served</h3>
              <ul className="space-y-3">
                {locations.map((loc) => (
                  <li key={loc} className="flex items-center gap-3 text-primary-foreground/90">
                    <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-primary-foreground/60 leading-relaxed">
                  Registered Agent Services available exclusively within the State of Missouri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-xl p-6 bg-card">
                <h3 className="font-bold text-lg text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Set Up Your Missouri Business?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Let Gantt & Karr handle the coordination so your business stays compliant and your personal information stays private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base">
                Start My Missouri Business Setup
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-base">
                Book Free Consultation
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
