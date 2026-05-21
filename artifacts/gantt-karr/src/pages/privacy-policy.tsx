import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/privacy-policy",
    name: "Privacy Policy | Gantt & Karr Formation Group",
    description: "Privacy Policy for Gantt & Karr Formation Group. Learn how we collect, use, and protect your personal information.",
    breadcrumbItems: [{ name: "Privacy Policy", href: "/privacy-policy" }],
  }),
  breadcrumbSchema([{ name: "Privacy Policy", href: "/privacy-policy" }]),
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Gantt & Karr Formation Group"
        description="Privacy Policy for Gantt & Karr Formation Group. Learn how we collect, use, and protect your personal information when you use our website or services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Privacy Policy</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Last updated: May 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            Gantt & Karr Formation Group ("we," "us," or "our") is committed to protecting your privacy.
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information
            when you visit our website at ganttkarr.com or use our services. Please read this policy carefully.
            If you do not agree with its terms, please discontinue use of our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit a form, request a consultation, or contact us directly.</li>
            <li><strong>Business Information:</strong> Business name, intended business structure, state of formation, and other details you provide through our intake forms.</li>
            <li><strong>Usage Data:</strong> Pages visited, time on site, device type, browser type, and referring URLs collected via cookies and analytics tools.</li>
            <li><strong>Communications:</strong> Messages, inquiries, and documents you send us via contact forms, email, or chat.</li>
            <li><strong>Document Submissions:</strong> Files you upload through our secure document submission portal for the purpose of service fulfillment.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our business formation, notary, and startup support services</li>
            <li>Respond to your inquiries and fulfill service requests</li>
            <li>Send appointment confirmations, follow-up messages, and service status updates</li>
            <li>Send SMS/text messages if you have provided consent (see our <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms</Link>)</li>
            <li>Analyze website traffic and user experience through aggregated analytics</li>
            <li>Comply with applicable state and federal laws</li>
            <li>Prevent fraud, maintain security, and enforce our agreements</li>
          </ul>

          <h2>3. SMS / Text Messaging</h2>
          <p>
            If you provide your phone number and consent to receive text messages, we may send you appointment
            reminders, service updates, and follow-up communications. Consent to receive SMS is not a condition
            of purchasing our services. You may opt out at any time by replying <strong>STOP</strong> to any
            message. See our <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms</Link> for
            complete details. We do not share your mobile number with third parties for marketing purposes.
          </p>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You
            can manage your preferences at any time using our cookie consent tool or through your browser
            settings. See our full <Link href="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</Link> for
            details on the categories of cookies we use and how to control them.
          </p>

          <h2>5. Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share information only in the following circumstances:</p>
          <ul>
            <li><strong>Service providers:</strong> Third-party vendors who help us operate our website and deliver services (e.g., scheduling platforms, CRM systems, form processors, secure document tools). These providers are contractually restricted from using your data for any other purpose.</li>
            <li><strong>Government agencies:</strong> When required by law, such as submitting formation documents to a state filing office on your behalf.</li>
            <li><strong>Professional referrals:</strong> If you request a referral to a licensed attorney, CPA, or other professional in our network, we may share limited information to facilitate that referral with your knowledge.</li>
            <li><strong>Legal compliance:</strong> When required by a valid legal process, court order, or applicable law.</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described in
            this policy, comply with our legal obligations, resolve disputes, and enforce our agreements.
            Document files submitted through our portal are retained only for the duration of active service
            engagement unless a longer retention period is required by law or agreed upon in writing.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data (subject to legal retention requirements)</li>
            <li>Opt out of marketing communications and SMS messages at any time</li>
            <li>Request restriction of processing in certain circumstances</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:Info@ganttkarr.com" className="text-secondary hover:underline">Info@ganttkarr.com</a>.</p>

          <h2>8. Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your
            personal information against unauthorized access, disclosure, alteration, or destruction. Document
            uploads are transmitted using encryption. However, no method of internet transmission is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of those sites and encourage you to read their privacy policies independently.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our services are intended for individuals 18 years of age and older. We do not knowingly collect
            personal information from minors. If we become aware that we have inadvertently collected such
            information, we will promptly delete it.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, technologies,
            or applicable law. Material changes will be indicated by an updated "Last updated" date at the
            top of this page. Continued use of our website following changes constitutes acceptance of the
            revised policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us:<br />
            <strong>Gantt & Karr Formation Group</strong><br />
            <a href="mailto:Info@ganttkarr.com" className="text-secondary hover:underline">Info@ganttkarr.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
