import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 pl-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function TermsOfService() {
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
                <FileText className="w-3.5 h-3.5" /> Legal
              </div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Terms of Service
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
            Welcome to Gantts Key Formation Group. These Terms of Service ("Terms") govern your access to and use of our website, services, forms, communications, and related offerings. By using our website or contacting us through our site, forms, or messaging systems, you agree to these Terms.
          </p>

          <Section title="1. Company Services">
            <p>Gantts Key Formation Group provides business support services related to business formation and related administrative support. Our services may include assistance with:</p>
            <BulletList items={[
              "LLC filings",
              "EIN guidance",
              "Registered agent-related support",
              "Notary-related support",
              "Business setup coordination",
              "General administrative and business filing support",
            ]} />
            <p className="pt-1">
              <strong className="text-white/90">Gantts Key Formation Group is not a law firm.</strong> We do not provide legal advice, legal representation, or legal counsel. Nothing on this website or in our communications constitutes legal advice. For legal questions or legal needs, please consult a licensed attorney.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <p>By using our services, you represent that you are at least 18 years old and have the legal authority to agree to these Terms on your own behalf or on behalf of a business entity you represent.</p>
          </Section>

          <Section title="3. Scope of Services">
            <p>Gantts Key Formation Group provides administrative filing support and business coordination services. We assist clients in preparing and submitting documents to state agencies and other relevant entities. We do not guarantee outcomes related to approvals, processing times, or decisions made by third-party agencies.</p>
            <p>Service availability, timelines, and pricing are subject to change. Any specific timelines communicated are estimates and not guarantees.</p>
          </Section>

          <Section title="4. Client Responsibilities">
            <p>By using our services, you agree to:</p>
            <BulletList items={[
              "Provide accurate and complete information when requested",
              "Promptly respond to requests for clarification or additional documentation",
              "Notify us of any changes to information already provided",
              "Review all documents and filings before submission",
              "Understand that you are responsible for the accuracy of information you provide",
            ]} />
          </Section>

          <Section title="5. Payments and Fees">
            <p>Service fees are communicated at the time of engagement. By agreeing to services, you authorize payment as outlined. Fees may include both our service charges and applicable state or government filing fees.</p>
            <p>Refund eligibility depends on the stage of service delivery and will be addressed on a case-by-case basis. State filing fees paid to government agencies are generally non-refundable once submitted.</p>
          </Section>

          <Section title="6. Communications">
            <p>By contacting us or submitting your information through our website, you consent to receive communications from us related to your inquiry or service, including by phone, email, or SMS.</p>
            <p>If you provide your phone number and opt in to receive text messages, you consent to receive SMS communications related to your service. Message and data rates may apply. You may opt out at any time by replying STOP.</p>
          </Section>

          <Section title="7. No Attorney-Client Relationship">
            <p>Use of our website or services does not create an attorney-client relationship. Gantts Key Formation Group is not a law firm and does not employ attorneys for the purpose of providing legal advice to clients. Any information provided on this website is for general informational purposes only.</p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>All content on this website — including text, design, graphics, and other materials — is owned by or licensed to Gantts Key Formation Group. You may not copy, reproduce, distribute, or create derivative works from this content without our prior written permission.</p>
          </Section>

          <Section title="9. Third-Party Links and Services">
            <p>Our website may contain links to third-party websites, services, or tools. We are not responsible for the content, accuracy, or practices of any third-party services. Links do not constitute an endorsement.</p>
          </Section>

          <Section title="10. Disclaimers">
            <p>Our services are provided "as is" without warranties of any kind, express or implied. We do not warrant that our services will be error-free, uninterrupted, or meet your specific expectations.</p>
            <p>We are not responsible for delays or outcomes caused by government agencies, processing systems, third-party providers, or factors outside our reasonable control.</p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, Gantts Key Formation Group shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of our services or this website. Our total liability in connection with any claim shall not exceed the amount you paid to us for the service giving rise to the claim.</p>
          </Section>

          <Section title="12. Indemnification">
            <p>You agree to indemnify and hold harmless Gantts Key Formation Group, its owners, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys' fees) arising out of your use of our services, your violation of these Terms, or your violation of any applicable law.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Missouri, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of Clay County, Missouri.</p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the updated Terms.</p>
          </Section>

          <Section title="15. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="bg-white/4 border border-white/10 rounded-xl p-5 mt-3 space-y-1.5">
              <p className="font-semibold text-white/90">Gantts Key Formation Group</p>
              <p>Liberty, Missouri — Serving Kansas City Metro</p>
              <p>
                Phone:{" "}
                <a href="tel:8165530595" className="text-white underline decoration-white/40 hover:decoration-white">(816) 553-0595</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@ganttformation.com" className="text-white underline decoration-white/40 hover:decoration-white break-all">
                  info@ganttformation.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://ganttformationgroup.com" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/40 hover:decoration-white">
                  ganttformationgroup.com
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
