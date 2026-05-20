import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, MapPin, Clock, FileText, ChevronRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    title: "Loan Signing Services",
    description: "Certified loan signing agent available for mortgage closings, refinances, and home equity documents throughout Missouri.",
    items: ["Purchase closings", "Refinances", "Home equity loans", "Reverse mortgages"],
  },
  {
    title: "General Notary Services",
    description: "We handle all general notarizations including acknowledgements, jurats, oaths, and affirmations.",
    items: ["Acknowledgements", "Jurats & oaths", "Copy certifications", "Affidavits & declarations"],
  },
  {
    title: "Legal Document Notarization",
    description: "Experienced with legal documents requiring precise notarization — power of attorney, wills, trusts, and more.",
    items: ["Power of attorney", "Wills & trusts", "Court documents", "Corporate resolutions"],
  },
  {
    title: "Business Notarization",
    description: "On-site notary services for businesses, banks, title companies, and law firms requiring volume notarizations.",
    items: ["Corporate filings", "Contracts & agreements", "HR & employment docs", "Title company support"],
  },
];

const benefits = [
  { icon: MapPin, title: "Mobile — We Come to You", body: "We travel to your home, office, hospital, or any location throughout Missouri." },
  { icon: Clock, title: "Flexible Scheduling", body: "Available evenings and weekends. We work around your schedule." },
  { icon: Star, title: "Certified Signing Agent", body: "NNA certified loan signing agent with background screening clearance." },
  { icon: CheckCircle, title: "Error-Free Guarantee", body: "We review documents thoroughly before notarizing to prevent costly errors." },
  { icon: FileText, title: "Digital Records", body: "Electronic records of all notarizations provided for your files." },
  { icon: Phone, title: "Responsive Communication", body: "Fast responses to scheduling requests — typically within 30 minutes." },
];

export default function NotaryServices() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0E584D] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E584D] to-[#08352E]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star className="w-3.5 h-3.5" />
              Certified Mobile Notary
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white font-[Montserrat] mb-6 max-w-3xl leading-tight">
              Mobile Notary Services<br />
              <span className="text-green-200">Across All of Missouri</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-green-100 text-lg max-w-2xl leading-relaxed mb-10">
              We bring professional notary services to you — at your home, office, hospital, or wherever is most convenient. Loan signings, legal documents, and more.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0E584D] hover:bg-white/90 border-2 border-white/50 rounded-xl text-base font-semibold px-8 py-6"
              >
                <Link href="/contact" data-testid="button-notary-book">
                  Book a Notary
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <a
                href="tel:+13145551234"
                className="flex items-center gap-2 justify-center sm:justify-start text-white border-2 border-white/30 hover:bg-white/10 rounded-xl px-8 py-3 text-base font-semibold transition-colors"
                data-testid="link-notary-phone"
              >
                <Phone className="w-4 h-4" />
                (314) 555-1234
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Notary Services</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">What We Notarize</h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">Comprehensive notary services for individuals, legal professionals, and businesses.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc) => (
                <motion.div key={svc.title} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm" data-testid={`card-notary-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <h3 className="text-xl font-bold text-[#004182] font-[Montserrat] mb-3">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{svc.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0E584D] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">The Rodriguez Difference</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeUp} className="flex gap-4 p-6 bg-[#F7F5F3] rounded-2xl border border-gray-100" data-testid={`card-notary-benefit-${b.title.toLowerCase().replace(/[\s—-]+/g, "-")}`}>
                  <div className="w-11 h-11 bg-[#0E584D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-5 h-5 text-[#0E584D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004182] font-[Montserrat] mb-1 text-sm">{b.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">Schedule a Notary Appointment</h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">Ready to book? Fill out the form and we'll confirm your appointment within the hour.</p>
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
