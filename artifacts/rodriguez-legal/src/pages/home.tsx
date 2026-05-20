import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Clock, Shield, FileText, MapPin, Phone, ChevronRight, Star, Gavel, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Gavel,
    title: "Process Serving",
    description: "Professional service of process for summons, subpoenas, complaints, and all legal documents. GPS-verified, timestamped proof of service included.",
  },
  {
    icon: UserCheck,
    title: "Skip Tracing",
    description: "Can't locate your defendant? Our skip tracing service uses advanced methods to locate individuals who have moved or are actively avoiding service.",
  },
  {
    icon: FileText,
    title: "Notary Services",
    description: "Mobile notary available throughout Missouri. Loan signings, acknowledgements, jurats, and more — we come to you.",
  },
  {
    icon: Clock,
    title: "Rush & Same-Day",
    description: "Need it served today? Our rush service ensures time-sensitive legal documents are served without delay, even on short notice.",
  },
];

const trustItems = [
  { icon: Shield, text: "Licensed & Insured in Missouri" },
  { icon: CheckCircle, text: "GPS Timestamped Proof of Service" },
  { icon: FileText, text: "Electronic Affidavits Provided" },
  { icon: Clock, text: "Rush Same-Day Service Available" },
  { icon: MapPin, text: "Statewide Missouri Coverage" },
  { icon: Star, text: "Trusted by 200+ Law Firms" },
];

const steps = [
  { number: "01", title: "Submit Your Documents", description: "Send us your legal documents electronically or by mail. We review and confirm service details same-day." },
  { number: "02", title: "We Locate & Serve", description: "Our licensed process servers locate the recipient and execute service — with GPS tracking and documentation." },
  { number: "03", title: "Receive Your Affidavit", description: "You receive a notarized affidavit of service with full details — ready to file with the court." },
];

const cities = [
  "St. Louis", "Kansas City", "Springfield", "Columbia",
  "Jefferson City", "Cape Girardeau", "Joplin", "Independence",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#004182] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004182] via-[#003370] to-[#08352E] opacity-90" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#0E584D]/30 border border-[#0E584D]/50 text-[#a8e6d9] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Shield className="w-3.5 h-3.5" />
              Licensed Missouri Process Server
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 font-[Montserrat]">
              Missouri's Trusted<br />
              <span className="text-[#a8e6d9]">Process Serving</span><br />
              Professionals
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Law firms and attorneys across Missouri rely on Rodriguez Legal Support Services for fast, accurate, and legally compliant service of process — every time.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0E584D] hover:bg-[#0E584D]/90 text-white border-2 border-[#08352E] rounded-xl text-base font-semibold px-8 py-6"
              >
                <Link href="/contact" data-testid="button-hero-get-started">
                  Get Started Today
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 rounded-xl text-base font-semibold px-8 py-6"
              >
                <Link href="/attorneys" data-testid="button-hero-attorneys">
                  For Attorneys
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#003370] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-blue-200 text-sm">
                <item.icon className="w-4 h-4 text-[#a8e6d9]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Our Services</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">
                Complete Legal Support Services
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                From standard process serving to complex skip tracing and notary services — we handle every step with precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc) => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                  data-testid={`card-service-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 bg-[#004182]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0E584D]/10 transition-colors">
                    <svc.icon className="w-6 h-6 text-[#004182] group-hover:text-[#0E584D] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#004182] mb-3 font-[Montserrat]">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">The Process</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">
                How It Works
              </h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Simple, transparent, and reliable — from document submission to affidavit of service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gray-100" />
              {steps.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="text-center relative">
                  <div className="w-20 h-20 bg-[#004182] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <span className="text-2xl font-black text-white font-[Montserrat]">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#004182] mb-3 font-[Montserrat]">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#004182]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#a8e6d9] mb-3">Why Rodriguez Legal</div>
              <h2 className="text-3xl md:text-4xl font-black text-white font-[Montserrat]">
                The Standard Law Firms<br />Hold Us To
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Statewide Missouri Coverage", body: "From St. Louis to Kansas City and everywhere in between — we cover all 114 Missouri counties." },
                { title: "GPS-Verified Service", body: "Every serve is GPS timestamped with exact location data, providing irrefutable proof of service." },
                { title: "Same-Day Rush Available", body: "When your client can't wait, neither can we. Rush service available 7 days a week." },
                { title: "Electronic Affidavits", body: "Receive court-ready, notarized affidavits electronically — filed directly with your office." },
                { title: "Skip Tracing Experts", body: "When a subject can't be found, we find them. Advanced skip tracing with high success rates." },
                { title: "Attorney-First Service", body: "We understand the stakes. Confidential, professional handling of all matters — every time." },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors"
                  data-testid={`card-feature-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CheckCircle className="w-6 h-6 text-[#a8e6d9] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2 font-[Montserrat]">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <div className="text-center mb-10">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Coverage Area</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">
                Serving All of Missouri
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/process-server-${city.toLowerCase().replace(/\s+/g, "-")}-mo`}
                  className="bg-white border border-gray-200 hover:border-[#0E584D] hover:text-[#0E584D] text-gray-700 rounded-xl px-5 py-2.5 text-sm font-medium transition-all shadow-sm hover:shadow-md"
                  data-testid={`link-city-${city.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {city}, MO
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E584D] mb-3">Get In Touch</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#004182] font-[Montserrat]">
                Ready to Get Your Documents Served?
              </h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Fill out the form below and we'll respond within one business hour.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp}>
                <ContactForm />
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="bg-[#004182] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold font-[Montserrat] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0E584D] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-blue-200 text-xs mb-0.5">Phone</div>
                        <a href="tel:+13145551234" className="font-semibold hover:text-blue-200 transition-colors" data-testid="link-contact-phone">(314) 555-1234</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0E584D] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-blue-200 text-xs mb-0.5">Service Area</div>
                        <span className="font-semibold">All of Missouri — Statewide</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7F5F3] rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#004182] font-[Montserrat] mb-3">Hours of Operation</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium">8:00 AM – 7:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="font-medium">9:00 AM – 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-[#0E584D]">By Appointment</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                    Rush and emergency service available 24/7 — call directly.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
