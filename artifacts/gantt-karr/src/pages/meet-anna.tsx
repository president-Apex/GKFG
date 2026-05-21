import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  CheckCircle, Clock, PhoneCall, Calendar, Zap, ArrowRight,
  ChevronDown, MessageSquare, Shield, Sparkles, Bot,
} from "lucide-react";
import { useState } from "react";
import {
  annaSoftwareSchema, webPageSchema, faqSchema, breadcrumbSchema,
} from "@/lib/schema";

const capabilities = [
  {
    icon: PhoneCall,
    title: "Answers Common Questions — 24/7",
    body: "Anna handles frequently asked questions about our services, availability, pricing, and next steps — so clients get clear answers immediately, even at 10pm.",
  },
  {
    icon: Calendar,
    title: "Routes Appointment Requests",
    body: "She directs clients to the right next step with our team — whether that's booking a consultation, completing an intake form, or reaching Loresa or Kaileyanne directly.",
  },
  {
    icon: Zap,
    title: "Collects Intake Details",
    body: "Before your consultation, Anna gathers the essential information our team needs — saving time and making every meeting more productive.",
  },
  {
    icon: Clock,
    title: "Ensures No Inquiry Is Missed",
    body: "Anna is available when the team isn't. Every client inquiry is captured, acknowledged, and routed — nothing falls through the cracks.",
  },
  {
    icon: MessageSquare,
    title: "Qualifies Your Service Needs",
    body: "Anna walks through a brief conversation to understand what you're trying to accomplish — so by the time you connect with our team, everyone is already on the same page.",
  },
  {
    icon: Shield,
    title: "Compliant by Design",
    body: "Anna is trained to clearly communicate that Gantt & Karr Formation Group is not a law firm and does not provide legal, tax, or financial advice — every interaction is transparent.",
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
  {
    q: "What is Apex Key Group Holdings, Inc.?",
    a: "Apex Key Group Holdings, Inc. is the technology infrastructure company behind Anna. Gantt & Karr Formation Group is your trusted service provider — Apex powers the technology that helps us serve you better. As Anna scales, she will also support other businesses within the Apex ecosystem.",
  },
];

const ANNA_SCHEMA = [
  annaSoftwareSchema(),
  webPageSchema({
    url: "/meet-anna",
    name: "Meet Anna — Your 24/7 Formation Intake Assistant | Gantt & Karr Formation Group",
    description: "Anna is Gantt & Karr's AI intake assistant, built through Apex Key Group Holdings, Inc. She answers questions, routes appointments, and captures intake details 24/7.",
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
        <ChevronDown className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactSubmitted(true);
  }

  const inputClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition";

  return (
    <>
      <SEO
        title="Meet Anna — Your 24/7 Formation Intake Assistant | Gantt & Karr Formation Group"
        description="Anna is Gantt & Karr's AI intake assistant, built through Apex Key Group Holdings, Inc. She answers questions, routes appointments, and starts your intake process 24/7 — so you never have to wait."
        schema={ANNA_SCHEMA}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0a14] text-white min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%]">
          <img
            src="/gantt-karr/anna-ai.png"
            alt="Anna — Gantt & Karr AI Intake Assistant, built by Apex Key Group Holdings, Inc."
            className="h-full w-full object-cover object-center opacity-80"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-xl py-28 lg:py-36">
            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold mb-6 uppercase tracking-widest">
              Built by Apex Key Group Holdings, Inc.
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-4">
              Meet Anna — Your 24/7 Formation Intake Assistant
            </h1>
            <p className="text-lg text-white/70 italic mb-2">
              "Anna answers first. We review, support, and finalize behind the scenes."
            </p>
            <p className="text-base text-white/60 leading-relaxed mb-10 max-w-md">
              Anna helps new business owners get directed to the right formation, notary,
              registered agent, or referral service — without waiting for office hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/anna-demo">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-13 px-8 text-base font-semibold">
                  <Sparkles className="h-4 w-4 mr-2" /> Try Live Demo
                </Button>
              </Link>
              <Link href="/consultation">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Anna Does ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">What Anna Does</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
              A smarter first step for every client.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Anna is available 24/7 to help clients get answers, start the intake process, and route their request
              to the right team member. She does not provide legal, tax, or notary advice — she simply
              helps you reach the right person at the right time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:border-secondary hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary mb-2 text-base">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Demo Preview ── */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Interactive Demo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            See Anna in action — right now.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-3 leading-relaxed">
            The demo walks you through Anna's full intake conversation — from greeting to lead capture.
            Try one of six service paths and see how she qualifies and routes your inquiry.
          </p>
          <p className="text-purple-300/80 text-sm mb-8">
            Meet Anna — Our Apex-Built Receptionist &nbsp;·&nbsp;
            <span className="font-semibold">Powered by Apex Key Group Holdings, Inc.</span>
          </p>

          <div className="bg-[#12111a] rounded-2xl border border-white/10 p-8 mb-8 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Anna</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white/40 text-xs">Online — 24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-[#1e1b2e] rounded-xl rounded-bl-sm px-4 py-3 text-sm text-white/80 leading-relaxed mb-4">
              "Thank you for contacting Gantt & Karr Formation Group. I'm Anna. What are you trying to accomplish today?"
            </div>
            <div className="flex flex-wrap gap-2">
              {["Start an LLC", "Get an EIN", "Need notary help", "Not sure yet"].map((opt) => (
                <span key={opt} className="text-xs border border-purple-500/40 text-purple-300 rounded-lg px-3 py-1.5">
                  {opt}
                </span>
              ))}
            </div>
          </div>

          <Link href="/anna-demo">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-14 px-10 text-base font-semibold">
              <Sparkles className="h-4 w-4 mr-2" /> Launch Interactive Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Anna Inside G&K ── */}
      <section className="py-20 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Inside G&K</p>
              <h2 className="font-serif text-3xl font-bold text-primary mb-5">
                Your seamless first step into the Gantt & Karr experience.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                When you reach out to Gantt & Karr, Anna is your first point of contact. She answers common
                questions about our services, collects your basic intake details, and routes your request to
                the right team member — all without you having to wait for business hours.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                By the time you connect with Loresa or Kaileyanne, Anna has already made sure they have the
                context they need to make your consultation focused and productive. Anna does not give legal
                or notary advice — she simply helps you reach the right person at the right time.
              </p>
              <Link href="/anna-demo">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Anna Now <ArrowRight className="h-4 w-4 ml-2" />
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

      {/* ── FAQ ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Common Questions</p>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
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

      {/* ── Contact Form ── */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">Prefer to reach the team directly?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Send us a message and Loresa or Kaileyanne will follow up personally.
            </p>
          </div>

          {contactSubmitted ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                <CheckCircle className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">Message Received</h3>
              <p className="text-muted-foreground text-sm">A team member will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Full Name <span className="text-secondary">*</span>
                  </label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Email Address <span className="text-secondary">*</span>
                </label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} placeholder="How can we help you?" />
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gantt & Karr Formation Group is not a law firm and does not provide legal advice, tax advice, or financial advice. Information is for administrative and general informational purposes only.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* ── Apex Attribution + Disclaimer ── */}
      <section className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-3 text-center">
          <p className="text-xs text-muted-foreground">
            Anna is provided through{" "}
            <strong className="text-foreground">Apex Key Group Holdings, Inc.</strong>{" "}
            Gantt & Karr Formation Group remains responsible for client service, appointment handling, and business support decisions.
          </p>
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
