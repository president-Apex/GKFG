import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Users, Zap, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import loreSaPhoto from "@/assets/loresa-gantt.png";

const stats = [
  { number: "$51", label: "Missouri state fee — one of the lowest in the nation" },
  { number: "24hr", label: "Turnaround on priority filings" },
  { number: "100%", label: "Filings reviewed before submission" },
  { number: "Local", label: "Kansas City based — real people, real phone" },
];

const pillars = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: "Local Kansas City Roots",
    desc: "Based in Liberty, MO. We know the local business landscape and serve clients throughout Missouri personally.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Family-Led, Relationship-First",
    desc: "We're a family-run team that takes pride in the relationships we build. Every client matters personally to us.",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Fast, Accurate Turnarounds",
    desc: "Priority filings go same or next business day. Every document is reviewed before submission.",
  },
  {
    icon: <PhoneCall className="w-5 h-5 text-primary" />,
    title: "Paige Answers First — Our Team Finalizes",
    desc: "Paige, our AI intake assistant, responds 24/7 — capturing your details, booking consultations, and routing your request. Our team reviews, supports, and finalizes everything behind the scenes.",
  },
];

const compareRows = [
  { feature: "24/7 intake response",                them: "✗ Wait days",     us: "✓ Paige replies instantly" },
  { feature: "Real team reviews your filing",       them: "✗",               us: "✓ Every time" },
  { feature: "Local Kansas City knowledge",         them: "✗",               us: "✓ Built in" },
  { feature: "Family-led, personal service",        them: "✗",               us: "✓ Always" },
  { feature: "Can reach a human when it matters",   them: "✗ Ticket system", us: "✓ Direct line" },
  { feature: "Hidden renewal fees",                 them: "Common",          us: "✓ Never" },
  { feature: "Guided onboarding & roadmap",         them: "✗",               us: "✓ Premium package" },
];

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-0">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-semibold tracking-widest uppercase text-primary whitespace-nowrap">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function About() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="about" className="bg-background py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO SPLIT ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
              Kansas City's Trusted Formation Specialists
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              We Help Entrepreneurs{" "}
              <span className="text-primary italic font-medium">Build With Confidence.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most online formation services are just forms on a website. No one to call. No one who knows your name. When something goes wrong, you're on your own.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Gantts Key Formation Group is different.{" "}
              <span className="text-primary font-medium">A real family-led team, local to Kansas City</span>, who handles your formation with care and answers when you call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-13 px-8 font-semibold rounded-xl"
                onClick={scrollToContact}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-primary text-primary hover:bg-primary/8 h-13 px-8 font-semibold rounded-xl"
                onClick={() => (window.location.href = "tel:8165530595")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Book a Free Call
              </Button>
            </div>
          </motion.div>

          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute left-0 top-[10%] bottom-[10%] w-0.5 bg-primary z-10 rounded-full" />
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl shadow-primary/8">
                <img
                  src={loreSaPhoto}
                  alt="Loresa Gantt — Founder & CEO of Gantts Key Formation Group"
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-border rounded-xl px-6 py-3 text-center whitespace-nowrap shadow-lg"
              >
                <p className="font-heading font-bold text-foreground text-sm">Loresa Gantt</p>
                <p className="text-primary text-[11px] uppercase tracking-widest mt-0.5">Founder &amp; CEO</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── LEADERSHIP TEAM ── */}
        <div className="mb-20">
          <div className="mb-10">
            <Divider label="Our Leadership" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {/* Loresa */}
            <div className="bg-white border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-heading font-bold text-lg">LG</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg leading-tight">Loresa Gantt</h4>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mt-1">Founder &amp; CEO</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Vision, strategy, partnerships, and growth."
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Loresa leads Gantts Key Formation Group with a focus on building strong businesses from day one — combining Missouri formation expertise with a partnership-first approach to every client relationship.
              </p>
            </div>
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Family-led. <span className="text-primary font-medium not-italic">Powered by Paige.</span> Built for entrepreneurs who want to launch with confidence.
          </p>
        </div>

        {/* ── STATS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 border border-border rounded-2xl overflow-hidden mb-20 bg-white"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-8 text-center ${i < 3 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border lg:border-b-0" : ""}`}
            >
              <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── WHY SECTION ── */}
        <div className="mb-20">
          <div className="mb-10">
            <Divider label="Why Gantts Key Formation Group" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground leading-tight mb-6">
                Built for Entrepreneurs, Not{" "}
                <span className="text-primary italic font-medium">Algorithms.</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>When you file with large online services, you're a ticket number. Your documents get processed in a queue and you get an email days later.</p>
                <p>
                  <span className="text-primary font-medium">Here, your filing gets reviewed personally before it ever touches the state system.</span> We catch errors that cause rejections. We know Missouri's requirements because we file here every day.
                </p>
                <p>Powered by <span className="text-primary font-medium">Paige, our AI intake assistant</span>, we respond to new business owners 24/7 — capturing the right information, booking consultations, and routing each client to our team for final review and support. You always get a human where it matters.</p>
                <p className="text-foreground font-medium">That's the difference between a service and a partner.</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 items-start bg-white border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COMPARISON TABLE ── */}
        <div className="mb-20">
          <div className="mb-8">
            <Divider label="How We Compare" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border rounded-2xl overflow-hidden bg-white"
          >
            <div className="grid grid-cols-3 bg-secondary border-b border-border">
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Feature</div>
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground text-center">Online Services</div>
              <div className="px-6 py-4 text-xs font-semibold tracking-widest uppercase text-primary text-center">Gantts Key</div>
            </div>
            {compareRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-border/50 last:border-0 hover:bg-secondary/50 transition-colors ${i % 2 === 0 ? "bg-background" : "bg-white"}`}
              >
                <div className="px-6 py-4 text-sm text-foreground/70">{row.feature}</div>
                <div className="px-6 py-4 text-sm text-red-400 text-center font-medium">{row.them}</div>
                <div className="px-6 py-4 text-sm text-primary text-center font-medium">{row.us}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── CONTACT STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Ready to Start Your Business?</h3>
            <p className="text-white/85 text-sm leading-relaxed max-w-lg">
              Get started directly or schedule a consultation. Most filings are submitted within 24 hours.{" "}
              Call or text:{" "}
              <a href="tel:8165530595" className="text-white/90 font-semibold hover:text-white transition-colors">(816) 553-0595</a>
              {" · "}
              <a href="mailto:info@ganttformation.com" className="text-white/90 hover:text-white transition-colors">info@ganttformation.com</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 rounded-xl"
              onClick={scrollToContact}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold px-6 rounded-xl"
              onClick={() => (window.location.href = "tel:8165530595")}
            >
              Book a Free Call
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
