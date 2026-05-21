import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/terms-of-service",
    name: "Terms of Service | Gantt & Karr Formation Group",
    description: "Terms of Service governing use of the Gantt & Karr Formation Group website and services.",
    breadcrumbItems: [{ name: "Terms of Service", href: "/terms-of-service" }],
  }),
  breadcrumbSchema([{ name: "Terms of Service", href: "/terms-of-service" }]),
];

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Gantt & Karr Formation Group"
        description="Terms of Service governing use of the Gantt & Karr Formation Group website and services. Read before using our business formation, notary, or startup support services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Terms of Service</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Last updated: May 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            Please read these Terms of Service ("Terms") carefully before using the website or services
            offered by Gantt & Karr Formation Group ("Company," "we," "us," or "our"). By accessing our
            website at ganttkarr.com or engaging our services, you agree to be bound by these Terms. If
            you do not agree, please do not use our website or services.
          </p>

          <h2>1. Nature of Our Services</h2>
          <p>
            Gantt & Karr Formation Group provides business formation assistance, document coordination,
            notary services, startup guidance, registered agent coordination, EIN application assistance,
            and related administrative support services.
          </p>
          <p>
            <strong>We are not a law firm, accounting firm, tax advisory firm, or financial advisory firm.
            We do not provide legal, tax, accounting, investment, or financial advice.</strong> Nothing on
            this website or communicated by our team constitutes legal or professional advice. You should
            consult a licensed attorney, CPA, tax professional, or financial advisor for guidance specific
            to your situation.
          </p>

          <h2>2. No Attorney-Client Relationship</h2>
          <p>
            Use of our website or services does not create an attorney-client relationship, a CPA-client
            relationship, or any other professional advisory relationship. Any documents we assist in
            preparing or coordinating are for your review and submission. You are solely responsible for
            their accuracy, completeness, and legal sufficiency. We strongly encourage you to have any
            documents reviewed by a licensed professional before filing.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years of age to use our services. By using our website, you represent
            and warrant that you are of legal age and have the full legal capacity and authority to enter
            into this agreement.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>By using our website and services, you agree not to:</p>
          <ul>
            <li>Use our services for any unlawful, deceptive, or fraudulent purpose</li>
            <li>Submit false, inaccurate, or misleading information in any intake form or communication</li>
            <li>Attempt to access data, systems, or accounts you are not authorized to access</li>
            <li>Interfere with or disrupt the operation or security of our website</li>
            <li>Use our services to form or operate entities intended for fraudulent, illegal, or harmful activity</li>
            <li>Reproduce, sell, or exploit any portion of our services without written permission</li>
          </ul>

          <h2>5. Payments and Fees</h2>
          <p>
            Service fees are disclosed prior to engagement and confirmed in writing. Government filing fees,
            state fees, registered agent fees, and other third-party costs are separate from our service
            fees and remain your responsibility unless explicitly included in your selected package or
            confirmed in writing.
          </p>
          <p>
            All service fees are non-refundable once work has commenced. If work has not yet begun, please
            contact us promptly at <a href="mailto:Info@ganttkarr.com" className="text-secondary hover:underline">Info@ganttkarr.com</a> to
            discuss your options.
          </p>

          <h2>6. Government Filings and Processing Times</h2>
          <p>
            We assist in coordinating the preparation and submission of documents to government agencies.
            We have no control over government processing times, approval decisions, rejections, or agency
            requirements. Processing times vary by state and are subject to change without notice. We
            cannot guarantee specific turnaround times for state or federal filings.
          </p>

          <h2>7. Document Submissions</h2>
          <p>
            When you submit documents through our secure portal or via email, you represent that you have
            the right to share those documents and that they do not violate any applicable law or
            third-party rights. We will handle your documents in accordance with our{" "}
            <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, service names, and design — is
            the property of Gantt & Karr Formation Group or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, modify, or create derivative
            works without our prior written permission.
          </p>

          <h2>9. Third-Party Services and Referrals</h2>
          <p>
            We may refer you to or integrate with third-party services (e.g., registered agent providers,
            scheduling tools, document platforms, payment processors, or professional partners). We are not
            responsible for the acts, omissions, quality, or pricing of any third-party service provider.
            Any referral to a licensed professional does not constitute an endorsement of that professional's
            specific advice.
          </p>

          <h2>10. SMS Communications</h2>
          <p>
            If you opt in to receive SMS communications, your use of our messaging services is governed by
            our <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms</Link>.
            Consent to receive SMS is never a condition of purchase or service.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            Our website and services are provided "as is" and "as available" without warranty of any kind,
            express or implied. We do not warrant that our services will be error-free, uninterrupted, or
            that any particular business outcome will result from using our services.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Gantt & Karr Formation Group, its owners,
            members, team members, and affiliates shall not be liable for any indirect, incidental,
            consequential, special, or punitive damages arising from your use of our services or website,
            including but not limited to: business losses, filing delays caused by government agencies,
            rejection of filings, or reliance on any information provided on our website.
          </p>

          <h2>13. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the State of Missouri, without regard to conflict of
            law provisions. Any disputes shall be resolved in courts of competent jurisdiction located in
            Missouri. You waive any objection to personal jurisdiction or venue in Missouri.
          </p>

          <h2>14. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Updated Terms will be posted on this
            page with a revised "Last updated" date. Continued use of our website or services after changes
            are posted constitutes your acceptance of the revised Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms? Contact us:<br />
            <strong>Gantt & Karr Formation Group</strong><br />
            <a href="mailto:Info@ganttkarr.com" className="text-secondary hover:underline">Info@ganttkarr.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
