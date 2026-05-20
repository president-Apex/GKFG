import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#004182] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white font-[Montserrat] mb-4">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-blue-200 text-lg max-w-xl">
              Ready to get your documents served? We respond to all inquiries within one business hour.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-black text-[#004182] font-[Montserrat] mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div variants={fadeUp} className="bg-[#004182] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold font-[Montserrat] mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <a
                    href="tel:+13145551234"
                    className="flex items-start gap-4 group"
                    data-testid="link-contact-page-phone"
                  >
                    <div className="w-10 h-10 bg-[#0E584D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0E584D]/80 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-blue-300 text-xs mb-0.5">Phone</div>
                      <div className="font-semibold group-hover:text-blue-200 transition-colors">(314) 555-1234</div>
                      <div className="text-blue-300 text-xs mt-0.5">Rush/emergency line — call anytime</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@rodriguezlegal.com"
                    className="flex items-start gap-4 group"
                    data-testid="link-contact-page-email"
                  >
                    <div className="w-10 h-10 bg-[#0E584D] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0E584D]/80 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-blue-300 text-xs mb-0.5">Email</div>
                      <div className="font-semibold group-hover:text-blue-200 transition-colors">info@rodriguezlegal.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0E584D] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-blue-300 text-xs mb-0.5">Service Area</div>
                      <div className="font-semibold">All of Missouri</div>
                      <div className="text-blue-300 text-xs mt-0.5">All 114 counties — statewide coverage</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-[#0E584D]" />
                  <h3 className="font-bold text-[#004182] font-[Montserrat]">Hours of Operation</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                    { day: "Sunday", hours: "By Appointment" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{day}</span>
                      <span className="font-medium text-[#004182]">{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500 bg-[#F7F5F3] rounded-lg p-3">
                  Rush and emergency service is available 24 hours a day, 7 days a week. Call the main line for urgent matters.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#0E584D] rounded-2xl p-6 text-white">
                <h3 className="font-bold font-[Montserrat] mb-2">Attorney Accounts</h3>
                <p className="text-green-100 text-sm leading-relaxed mb-4">
                  Law firms with regular process serving needs benefit from our dedicated firm accounts — priority service, volume pricing, and a single point of contact.
                </p>
                <a
                  href="mailto:accounts@rodriguezlegal.com"
                  className="text-white underline underline-offset-2 text-sm font-medium hover:text-green-200 transition-colors"
                  data-testid="link-contact-attorney-accounts"
                >
                  accounts@rodriguezlegal.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
