import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Clock, Shield, FileText, Gavel, ChevronRight, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const documentTypes = [
  "Summons & Complaints",
  "Subpoenas (Deposition & Trial)",
  "Restraining Orders / TROs",
  "Divorce & Family Law Filings",
  "Small Claims Court Documents",
  "Eviction / Unlawful Detainer",
  "Wage Garnishments",
  "Bankruptcy Notices",
  "Corporate & Business Filings",
  "Citation & Notice to Appear",
  "Writs & Orders",
  "Immigration Documents",
];

const features = [
  {
    icon: Scale,
    title: "Court-Ready Affidavits",
    description: "Every service includes a notarized affidavit of service meeting Missouri court standards. Electronic delivery within 24 hours.",
  },
  {
    icon: Clock,
    title: "Rush & Emergency Service",
    description: "Same-day and emergency service available. We understand court deadlines — your urgency is our priority.",
  },
  {
    icon: Shield,
    title: "Skip Tracing",
    description: "When defendants can't be found, our skip tracing experts locate them using advanced investigative databases.",
  },
  {
    icon: CheckCircle,
    title: "GPS Documentation",
    description: "Every serve is GPS timestamped with exact coordinates — unimpeachable proof of service location and time.",
  },
];

const process = [
  { step: "01", title: "Submit Documents", body: "Email, upload, or mail your documents. We confirm receipt and service details same business day." },
  { step: "02", title: "Prompt Service", body: "Our servers execute service — first attempt typically within 24-48 hours of receipt." },
  { step: "03", title: "Real-Time Updates", body: "We keep you informed on each attempt. You'll never wonder where your serve stands." },
  { step: "04", title: "Affidavit Delivery", body: "Court-ready, notarized affidavit of service delivered electronically within 24 hours of completion." },
];

export default function Attorneys() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#004182] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004182] to-[#003370]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#0E584D]/30 border border-[#0E584D]/50 text-[#a8e6d9] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Gavel className="w-3.5 h-3.5" />
              For Attorneys &amp; Law Firms
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white font-[Montserrat] mb-6 max-w-3xl leading-tight">
              Process Serving Built<br />
              <span className="text-[#a8e6d9]">for Legal Professionals</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-10">
              Missouri attorneys trust Rodriguez Legal Support Services for reliable, timely service of process — with the documentation your cases demand.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0E584D] hover:bg-[#0E584D]/90 text-white border-2 border-[#08352E] rounded-xl text-base font-semibold px-8 py-6"
              >
                <Link href="/contact" data-testid="button-attorneys-contact">
                  Open an Account
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <a
                href="tel:+13145551234"
                className="flex items-center gap-2 justify-center sm:justify-start text-white border-2 border-white/30 hover:bg-white/10 rounded-xl px-8 py-3 text-base font-semibold transition-colors"
                data-testid="link-attorneys-phone"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Attorney Services</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">What We Handle for Your Firm</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex gap-6" data-testid={`card-attorney-feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-12 h-12 bg-[#004182]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-6 h-6 text-[#004182]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#004182] mb-2 font-[Montserrat]">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Document Types</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">We Serve All Legal Documents</h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">From standard summons to specialized writs — if it needs to be served, we handle it.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {documentTypes.map((doc) => (
                <div key={doc} className="flex items-center gap-3 bg-[#F7F5F3] rounded-xl px-5 py-4 border border-gray-100" data-testid={`item-doc-type-${doc.toLowerCase().replace(/[\s&/]/g, "-")}`}>
                  <CheckCircle className="w-4 h-4 text-[#0E584D] flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium">{doc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#004182]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-widest text-[#a8e6d9] mb-3">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-black text-white font-[Montserrat]">From Filing to Affidavit</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <motion.div key={p.step} variants={fadeUp} className="bg-white/10 border border-white/20 rounded-2xl p-7">
                  <div className="text-4xl font-black text-[#a8e6d9] font-[Montserrat] mb-4">{p.step}</div>
                  <h3 className="text-lg font-bold text-white font-[Montserrat] mb-2">{p.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">Open Your Firm Account</h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Set up a law firm account today and get priority service, volume rates, and a dedicated point of contact.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
