import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin, Phone, Bell, Scale, MonitorSmartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const comingSoonServices = [
  "Remote Online Notarization (RON)",
  "Mobile Notary Services",
  "General Notary Services",
  "Loan Signing Services",
  "Real Estate Loan Closings",
  "Hospital & Healthcare Facility Notary",
  "Nursing Home Notary",
  "Jail Notary",
  "Apostille Assistance",
  "I-9 Employment Verification (where permitted)",
  "After-Hours Notary & Loan Signing",
  "Wedding Officiant Services (FL, SC, MT, NV, ME, TN)",
  "LiveScan Fingerprinting",
];

const serviceStates = [
  "Arizona",
  "California*",
  "Colorado",
  "Florida",
  "Georgia",
  "Illinois",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Nevada",
  "New Jersey",
  "New York",
  "North Carolina",
  "Ohio",
  "Pennsylvania",
  "Texas",
  "Utah",
  "Virginia",
  "Washington",
];

const serviceCategories = [
  {
    title: "Business Formation",
    items: [
      "LLC Formation",
      "PLLC Formation",
      "Corporation Formation",
      "S Corporation Election",
      "LLC to S Corporation Election",
      "LLC & Corporation Dissolution",
      "Foreign Entity Registration",
      "Business Reinstatement",
      "DBA / Fictitious Name Registration",
      "Business Name Availability Searches",
    ],
  },
  {
    title: "Business Compliance",
    items: [
      "Operating Agreements",
      "Corporate Bylaws",
      "Annual Report Assistance",
      "Articles of Amendment",
      "Articles of Correction",
      "Certificates of Good Standing",
      "Compliance Monitoring",
      "Business License Research",
    ],
  },
  {
    title: "Federal Services",
    items: [
      "EIN Applications",
      "IRS Form 2553 (S Corporation Election)",
      "Responsible Party Updates",
      "Business Structure Consultations",
    ],
  },
  {
    title: "Registered Agent Services",
    items: ["Missouri Registered Agent Services"],
  },
];

function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="font-heading font-bold text-foreground text-lg mb-2">You're on the list!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We'll notify you as soon as these services launch. In the meantime, feel free to reach out at{" "}
          <a href="tel:8165530595" className="text-primary font-medium">(816) 553-0595</a> or{" "}
          <a href="mailto:info@ganttformation.com" className="text-primary font-medium">info@ganttformation.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-2">
        <Bell className="w-5 h-5 text-primary" />
        <h3 className="font-heading font-bold text-foreground text-lg">Join the Waitlist</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Be the first to know when our online notary, mobile notary, and loan signing services launch.
      </p>
      <div className="space-y-4">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-12 rounded-xl"
        />
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 rounded-xl"
        />
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold rounded-xl"
        >
          Notify Me When Services Launch
        </Button>
      </div>
    </form>
  );
}

export default function NotaryServices() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />

      <main className="flex-grow pt-24">

        {/* Hero */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/90 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                Serving All 50 States + DC
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight">
                Nationwide Business Formation &amp; Remote Online Notary Services
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl">
                Gantts Key Formation Group proudly provides professional business formation and compliance services for clients in all 50 states and DC — with Remote Online Notary coming soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 h-14 px-8 font-semibold rounded-xl"
                  onClick={() => (window.location.href = "tel:8165530595")}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (816) 553-0595
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-xl"
                  onClick={() =>
                    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Bell className="mr-2 w-5 h-5" />
                  Join the Waitlist
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon — RON */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-primary/25 rounded-2xl p-8 sm:p-10"
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <MonitorSmartphone className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                      Remote Online Notarization (RON)
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 rounded-full px-3.5 py-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Coming Soon
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Get your documents notarized securely from your phone, tablet, or computer. Remote Online Notarization will be performed under our Missouri commission with planned expansion to 20 priority states — launching soon.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "RON Session", val: "$25" },
                    { label: "Mobile Notary", val: "$5/sig + travel" },
                    { label: "Loan Signings", val: "$125–$200" },
                  ].map((row) => (
                    <div key={row.label} className="bg-background border border-border rounded-xl px-4 py-4 text-center">
                      <div className="text-lg font-heading font-bold text-primary">{row.val}</div>
                      <div className="text-xs text-muted-foreground mt-1">{row.label}</div>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-semibold rounded-xl"
                  onClick={() =>
                    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Bell className="mr-2 w-4 h-4" />
                  Join the Waitlist
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full services */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Professional business formation, compliance, and federal filing support for entrepreneurs in all 50 states and DC.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {serviceCategories.map((cat, idx) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white border border-border rounded-2xl p-7"
                  >
                    <h3 className="font-heading font-bold text-foreground text-lg mb-4">{cat.title}</h3>
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {cat.title === "Registered Agent Services" && (
                      <p className="text-[11px] text-muted-foreground mt-4 italic">
                        Registered agent services are currently offered in Missouri, expanding to additional states.
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  These notary and signing services are on our roadmap and will launch soon.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {comingSoonServices.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-4"
                  >
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/90 mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  Where We Serve
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                  All 50 States + DC
                </h2>
                <p className="text-white/85 text-lg max-w-2xl mx-auto">
                  Business formation, compliance, and federal services are available nationwide. Remote Online Notary expansion is planned for these 20 priority states:
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
              >
                {serviceStates.map((state) => (
                  <div
                    key={state}
                    className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-center text-sm text-white font-medium"
                  >
                    {state}
                  </div>
                ))}
              </motion.div>
              <div className="mt-8 bg-white/4 border border-white/10 rounded-xl px-5 py-4 flex gap-3 items-start">
                <Scale className="w-4 h-4 text-white/75 shrink-0 mt-0.5" />
                <p className="text-[11px] text-white/70 leading-relaxed">
                  *Service availability is subject to current state laws and regulations. Remote Online Notarization is performed under our Missouri commission. Registered agent services are offered in Missouri, expanding to additional states. Gantts Key Formation Group is not a law firm and does not provide legal, tax, or financial advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
