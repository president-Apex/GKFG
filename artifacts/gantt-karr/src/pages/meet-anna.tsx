import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Clock, PhoneCall, Calendar, Zap, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: PhoneCall,
    title: "Answers Inbound Calls 24/7",
    body: "Anna picks up when the team can't — routing every caller to the right person or resource without delay.",
  },
  {
    icon: Calendar,
    title: "Books & Qualifies Leads",
    body: "Pre-vets potential clients and books meetings directly on your calendar. Only warm, ready leads reach your desk.",
  },
  {
    icon: Zap,
    title: "Instant FAQ Resolution",
    body: "Anna handles your most common questions — services, pricing, availability — instantly and professionally.",
  },
  {
    icon: Clock,
    title: "Friendly Follow-Up & Nurturing",
    body: "No lead falls through the cracks. Anna follows up, nurtures, and keeps your pipeline warm around the clock.",
  },
];

export default function MeetAnna() {
  return (
    <>
      <SEO
        title="Meet Anna — AI Intake Assistant | Gantt & Karr Formation Group"
        description="Anna is Gantt & Karr's 24/7 AI Intake Assistant — answering calls, booking consultations, qualifying leads, and keeping your pipeline moving at all hours."
      />

      {/* Hero — dark, tech-forward, full-bleed image */}
      <section className="relative overflow-hidden bg-[#0a0a14] text-white min-h-[90vh] flex items-center">
        {/* Purple glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%]">
          <img
            src="/gantt-karr/anna-ai.png"
            alt="Anna — Gantt & Karr AI Intake Assistant"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-xl py-28 lg:py-36">
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold mb-6 uppercase tracking-widest">
              Lead Shield AI · Powered by Gantt & Karr
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4">
              Meet Anna.
            </h1>
            <p className="text-xl text-white/70 font-medium mb-2 uppercase tracking-widest">
              Receptionist. 24/7.
            </p>
            <p className="text-lg text-white/60 italic mb-8 leading-relaxed">
              "Pre-qualified leads are just a friendly call away."
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Answers inbound calls 24/7, routing them to the right person",
                "Qualifies and books meetings with pre-vetted leads 24/7",
                "Provides friendly, professional follow-up and lead nurturing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/consultation">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-13 px-8 text-base font-semibold">
                  Book with Anna Now
                </Button>
              </Link>
              <Link href="/services/anna-ai-intake">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base">
                  Get Anna for Your Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Anna does */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Always On</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
              Intelligent, polished, and always available.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Anna is Gantt & Karr's proprietary AI intake assistant — designed to provide immediate support, qualify leads, and keep your pipeline moving while you focus on delivering results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7 flex gap-5 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Anna works inside G&K */}
      <section className="py-20 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Inside G&K</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                Your seamless first step into the Gantt & Karr experience.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When you reach out to Gantt & Karr — by phone, form, or chat — Anna is your first point of contact. She gathers your information, answers your initial questions, routes your inquiry to the right specialist, and books your consultation — all without you having to wait for business hours.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                By the time you speak with Loresa or Kaileyanne, Anna has already made sure they have everything they need to make your consultation as productive as possible.
              </p>
              <Link href="/consultation">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start with Anna <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "24/7", label: "Always available" },
                { stat: "< 60s", label: "Average response time" },
                { stat: "100%", label: "Leads followed up" },
                { stat: "0", label: "Missed opportunities" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <p className="font-serif font-bold text-3xl text-primary mb-1">{stat}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Anna for your business */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-4">For Your Business</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
                Love Anna? Get her working for you.
              </h2>
              <p className="text-primary-foreground/75 leading-relaxed mb-8">
                We offer AI Intake Setup as a service to our clients — helping you implement an intelligent assistant like Anna for your own growing business. Never miss a lead. Never leave a client waiting. Scale your intake without scaling your payroll.
              </p>
              <Link href="/services/anna-ai-intake">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-13 px-8 font-semibold">
                  Learn About AI Intake Setup <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <ul className="space-y-4">
              {[
                "Custom AI receptionist trained on your services",
                "Books appointments directly to your calendar",
                "Qualifies leads before they reach your team",
                "Professional follow-up sequences included",
                "Works with your existing phone system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/85 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
