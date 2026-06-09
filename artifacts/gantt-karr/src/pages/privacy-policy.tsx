import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/privacy-policy",
    name: "Privacy Policy | Gantt Key Formation Group",
    description: "Privacy Policy for Gantt Key Formation Group. Learn how we collect, use, and protect your personal information.",
    breadcrumbItems: [{ name: "Privacy Policy", href: "/privacy-policy" }],
  }),
  breadcrumbSchema([{ name: "Privacy Policy", href: "/privacy-policy" }]),
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Gantt Key Formation Group"
        description="Privacy Policy for Gantt Key Formation Group. Learn how we collect, use, and protect your personal information when you use our website or services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Privacy Policy</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            Welcome to Gantt Key Formation Group ("Company," "we," "our," or "us"). We value your
            privacy and are committed to protecting your personal information. This Privacy Policy explains
            how we collect, use, protect, and disclose information obtained through our website, forms,
            communications, and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information including:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Mailing address</li>
            <li>Information submitted through forms</li>
            <li>Appointment details</li>
            <li>Business formation information provided by you</li>
            <li>Website usage information and analytics data</li>
            <li>IP address and browser/device information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We may use your information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Provide requested services</li>
            <li>Process business formation requests</li>
            <li>Schedule consultations or appointments</li>
            <li>Send updates regarding services</li>
            <li>Provide customer support</li>
            <li>Improve website functionality and user experience</li>
            <li>Communicate service announcements and business updates</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. SMS Communications</h2>
          <p>
            By providing your phone number and opting in, you consent to receive SMS text messages from
            Gantt Key Formation Group, including:
          </p>
          <ul>
            <li>Appointment reminders</li>
            <li>Business formation updates</li>
            <li>Customer service notifications</li>
            <li>Service-related communications</li>
            <li>Follow-up communications</li>
          </ul>
          <p>Message frequency may vary.</p>
          <p>Message and data rates may apply.</p>
          <p>Reply <strong>STOP</strong> at any time to unsubscribe.</p>
          <p>Reply <strong>HELP</strong> for assistance.</p>
          <p>SMS consent is not a condition of purchase.</p>
          <p>
            SMS consent and phone numbers collected for SMS purposes will not be shared, sold, rented,
            or disclosed to third parties for marketing purposes.
          </p>

          <h2>4. Sharing Information</h2>
          <p>We do not sell your personal information.</p>
          <p>We may share information with:</p>
          <ul>
            <li>Trusted service providers assisting our operations</li>
            <li>Payment processors</li>
            <li>Scheduling providers</li>
            <li>Technology platforms used to deliver services</li>
            <li>Legal or regulatory authorities if required by law</li>
          </ul>
          <p>
            All third-party providers are expected to maintain appropriate confidentiality and security
            standards.
          </p>

          <h2>5. Cookies and Analytics</h2>
          <p>Our website may use:</p>
          <ul>
            <li>Cookies</li>
            <li>Analytics tools</li>
            <li>Tracking technologies</li>
          </ul>
          <p>
            These tools help us understand website performance and improve user experience. You may
            disable cookies through your browser settings. See our{" "}
            <Link href="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</Link>{" "}
            for full details.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement commercially reasonable safeguards designed to protect your information against
            unauthorized access, disclosure, alteration, or destruction. However, no electronic
            transmission or storage system can be guaranteed as completely secure.
          </p>

          <h2>7. Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their
            privacy practices or content.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18, and we do not knowingly
            collect information from minors.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Updated versions will be
            posted with a revised effective date.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact us:<br />
            <strong>Gantt Key Formation Group</strong><br />
            Website: <a href="https://www.ganttformation.com" className="text-secondary hover:underline">www.ganttformation.com</a><br />
            Email: <a href="mailto:info@ganttformation.com" className="text-secondary hover:underline">info@ganttformation.com</a>
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
