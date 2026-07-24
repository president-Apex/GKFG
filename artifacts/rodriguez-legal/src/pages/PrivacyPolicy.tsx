import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const EFFECTIVE_DATE = "April 21, 2025";
const LAST_UPDATED   = "April 21, 2025";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-heading font-bold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
      <div className="space-y-3 text-sm text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold text-white/90 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 pl-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="bg-primary min-h-screen pt-20">

        {/* Hero */}
        <section className="py-16 lg:py-20 border-b border-white/8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent/4 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                <Shield className="w-3.5 h-3.5" /> Legal
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-white/70 text-sm">
                Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last Updated: {LAST_UPDATED}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl"
        >
          <p className="text-sm text-white/75 leading-relaxed mb-10">
            Gantts Key Formation Group ("Company," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you provide through our website, forms, messaging tools, and related services. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit ganttformationgroup.com or otherwise interact with us.
          </p>

          <Section title="1. Information We Collect">
            <SubSection title="Personal Information You Provide">
              <p>When you contact us, complete a form, request a consultation, subscribe to updates, or communicate with us, we may collect:</p>
              <BulletList items={[
                "Full name",
                "Email address",
                "Phone number",
                "Business name",
                "Business details related to formation or compliance needs",
                "Any information you voluntarily submit through forms, messages, or calls",
              ]} />
            </SubSection>

            <SubSection title="Automatically Collected Information">
              <p>When you visit our website, we may automatically collect certain technical and usage information, including:</p>
              <BulletList items={[
                "IP address",
                "Browser type",
                "Device information",
                "Operating system",
                "Referral source",
                "Pages viewed",
                "Time spent on pages",
                "Website interactions",
              ]} />
            </SubSection>

            <SubSection title="Communication Data">
              <p>If you contact us by email, phone, contact form, or SMS, we may keep records of those communications for customer service, quality assurance, and business operations.</p>
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We may use your information to:</p>
            <BulletList items={[
              "Respond to inquiries",
              "Provide requested services",
              "Schedule consultations",
              "Deliver customer support",
              "Communicate about services, updates, or onboarding",
              "Send transactional emails or SMS messages",
              "Improve our website, content, and user experience",
              "Maintain internal records",
              "Comply with legal obligations",
              "Protect against fraud, abuse, or unauthorized activity",
            ]} />
          </Section>

          <Section title="3. SMS and Messaging Use">
            <p>If you provide your phone number and opt in to receive text messages from us, we may send messages related to:</p>
            <BulletList items={[
              "Appointment scheduling",
              "Service updates",
              "Follow-up communications",
              "Customer care",
              "Business formation process updates",
            ]} />
            <div className="bg-white/4 border border-white/10 rounded-xl p-4 mt-4 space-y-1.5 text-xs text-white/75">
              <p>Message and data rates may apply.</p>
              <p>Message frequency may vary.</p>
              <p>You may opt out at any time by replying <strong className="text-white/85">STOP</strong>.</p>
              <p>For help, reply <strong className="text-white/85">HELP</strong> or contact us directly.</p>
            </div>
          </Section>

          <Section title="4. How We Share Information">
            <p>We do not sell your personal information.</p>
            <p>We may share information with trusted service providers that help us operate our business, such as:</p>
            <BulletList items={[
              "Website hosting providers",
              "CRM and communication platforms",
              "Scheduling tools",
              "Payment processors",
              "Analytics providers",
              "Email and SMS service providers",
            ]} />
            <p className="pt-1">We may also disclose information:</p>
            <BulletList items={[
              "If required by law",
              "To protect our legal rights",
              "To prevent fraud or misuse",
              "In connection with a business transfer, merger, acquisition, or asset sale",
            ]} />
          </Section>

          <Section title="5. Cookies and Tracking Technologies">
            <p>Our website may use cookies, analytics tools, and similar technologies to improve functionality, understand usage, and enhance user experience.</p>
            <p>You can control cookies through your browser settings. Disabling cookies may affect certain site features.</p>
          </Section>

          <Section title="6. Data Security">
            <p>We use reasonable administrative, technical, and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is guaranteed to be completely secure.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain information for as long as reasonably necessary to:</p>
            <BulletList items={[
              "Provide services",
              "Maintain records",
              "Comply with legal obligations",
              "Resolve disputes",
              "Enforce agreements",
            ]} />
          </Section>

          <Section title="8. Third-Party Links">
            <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of third-party sites.</p>
          </Section>

          <Section title="9. Your Choices">
            <p>You may:</p>
            <BulletList items={[
              "Contact us to update or correct your information",
              "Unsubscribe from marketing emails through the unsubscribe link",
              "Opt out of SMS by replying STOP",
              "Disable cookies through your browser settings",
            ]} />
          </Section>

          <Section title="10. Children's Privacy">
            <p>Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have questions about this Privacy Policy or our data practices, please contact:</p>
            <div className="bg-white/4 border border-white/10 rounded-xl p-5 mt-3 space-y-1.5">
              <p className="font-semibold text-white/90">Gantts Key Formation Group</p>
              <p>Website:{" "}
                <a href="https://ganttformationgroup.com" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 hover:decoration-white">
                  ganttformationgroup.com
                </a>
              </p>
              <p>Email:{" "}
                <a href="mailto:info@ganttformation.com" className="text-white underline decoration-white/40 hover:decoration-white break-all">
                  info@ganttformation.com
                </a>
              </p>
              <p>Phone:{" "}
                <a href="tel:8165530595" className="text-white underline decoration-white/40 hover:decoration-white">
                  (816) 553-0595
                </a>
              </p>
            </div>
          </Section>
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
