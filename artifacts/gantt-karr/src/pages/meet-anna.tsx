import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Clock, PhoneCall, Calendar, Zap, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  annaSoftwareSchema,
  webPageSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

const capabilities = [
  {
    icon: PhoneCall,
    title: "Answers Common Questions",
    body: "Anna handles frequently asked questions about our services, availability, and next steps — so clients get clear answers right away.",
  },
  {
    icon: Calendar,
    title: "Routes Appointment Requests",
    body: "She directs clients to the right next step with our team — whether that's booking a consultation, completing an intake form, or reaching Loresa or Kaileyanne directly.",
  },
  {
    icon: Zap,
    title: "Collects Basic Intake Details",
    body: "Before your consultation, Anna gathers the essential information our team needs — saving time and making every meeting more productive.",
  },
  {
    icon: Clock,
    title: "Ensures No Inquiry Is Missed",
    body: "Anna is available when the team isn't. Every client inquiry is captured, acknowledged, and routed — nothing falls through the cracks.",
  },
];

const FAQS = [
  {
    q: "What is Anna and who built her?",
    a: "Anna is an AI receptionist supporting Gantt & Karr Formation Group, built through Apex Key Group Holdings, Inc. She is designed to answer common questions, route appointment requests, collect basic intake details, and ensure no client inquiry is missed.",
  },
  {
    q: "Does Anna provide legal or notary advice?",
    a: "No. Anna does not provide legal advice, notary advice, or make legal decisions of any kind. She helps direct clients to the right next step with the Gantt & Karr team. All substantive guidance comes from Loresa, Kaileyanne, or a licensed professional in our network.",
  },
  {
    q: "Is Anna available 24/7?",
    a: "Yes. Anna is available around the clock to respond to inquiries, collect intake information, and route requests to the appropriate team member — so no inquiry goes unanswered regardless of business hours.",
  },
  {
    q: "Who is responsible for client service — Anna or Gantt & Karr?",
    a: "Gantt & Karr Formation Group remains fully responsible for all client service, appointment handling, and business support decisions. Anna is a support tool that helps ensure clients reach the right person promptly.",
  },
  {
    q: "Can I speak with a real person instead of Anna?",
    a: "Absolutely. Anna's job is to connect you with our team — not replace them. After interacting with Anna, you will be routed to Loresa, Kaileyanne, or another team member for your consultation.",
  },
];

const ANNA_SCHEMA = [
  annaSoftwareSchema(),
  webPageSchema({
    url: "/meet-anna",
    name: "Meet Anna — Our Apex-Built Receptionist | Gantt & Karr Formation Group",
    description:
      "Anna is Gantt & Karr's AI receptionist, built through Apex Key Group Holdings, Inc. She answers common questions, routes appointment requests, collects intake details, and ensures no client inquiry is missed.",
    breadcrumbItems: [{ name: "Meet Anna", href: "/meet-anna" }],
  }),
  faqSchema(FAQS),
  breadcrumbSchema([{ name: "Meet Anna", href: "/meet-anna" }]),
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-card hover:bg-muted/40 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed bg-muted/20 border-t border-border">
          {a}
        </div>
      )}
    </div>
  );
}

export default function MeetAnna() {
  return (
    <>
      <SEO
        title="Meet Anna — Our Apex-Built Receptionist | Gantt & Karr Formation Group"
        description="Anna is Gantt & Karr's AI receptionist, built through Apex Key Group Holdings, Inc. She answers common questions, routes appointment requests, collects intake details, and ensures no client inquiry is missed."
        schema={ANNA_SCHEMA}
      />

      {/* Hero — dark, tech-forward, full-bleed image */}
      <section className="relative overflow-hidden bg-[#0a0a14] text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%]">
          <img
            src="/gantt-karr/anna-ai.png"
            alt="Anna — Gantt & Karr AI Receptionist, built through Apex Key Group Holdings, Inc."
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-xl py-28 lg:py-36">
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold mb-6 uppercase tracking-widest">
              Built by Apex Key Group Holdings, Inc.
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4 speakable">
              Meet Anna.
            </h1>
            <p className="text-xl text-white/70 font-medium mb-2 uppercase tracking-widest">
              Our Apex-Built Receptionist
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md speakable">
              Anna is the AI receptionist supporting Gantt & Karr Formation Group. She helps answer common questions, route appointment requests, collect basic intake details, and make sure client inquiries are never missed.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Answers common questions about our services",
                "Routes appointment requests to the right team member",
                "Collects basic intake details before your consultation",
                "Ensures no client inquiry slips through the cracks",
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
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What Anna Does</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5 speakable">
              A smarter first step for every client.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Anna is available to help clients get answers, schedule time with our team, and start the intake process — so no one has to wait. She does not provide legal advice, notary advice, or make legal decisions. She helps direct clients to the right next step with our team.
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
              <h2 className="font-serif text-3xl font-bold text-primary mb-5 speakable">
                Your seamless first step into the Gantt & Karr experience.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When you reach out to Gantt & Karr, Anna is your first point of contact. She answers common questions about our services, collects your basic intake details, and routes your request to the right team member — all without you having to wait for business hours.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                By the time you connect with Loresa or Kaileyanne, Anna has already made sure they have the context they need to make your consultation focused and productive. Anna does not give legal or notary advice — she simply helps you reach the right person at the right time.
              </p>
              <Link href="/consultation">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start with Anna <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "24/7", label: "Always available" },
                { stat: "< 60s", label: "Average response time" },
                { stat: "100%", label: "Inquiries captured" },
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

      {/* FAQ — visible content for SEO + GEO extraction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Common Questions</p>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4 speakable">
              Frequently Asked About Anna
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Everything you need to know about how Anna works and what she can — and cannot — do.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
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

      <section className="py-12 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            Anna is provided through <strong className="text-foreground">Apex Key Group Holdings, Inc.</strong> Gantt & Karr Formation Group remains responsible for client service, appointment handling, and business support decisions.
          </p>
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
