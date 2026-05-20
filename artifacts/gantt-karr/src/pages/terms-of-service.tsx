import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-medium">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: May 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <p>
          Please read these Terms of Service ("Terms") carefully before using the website or services
          offered by Gantt & Karr Formation Group ("Company," "we," "us," or "our"). By accessing our
          website or engaging our services, you agree to be bound by these Terms.
        </p>

        <h2>1. Services Provided</h2>
        <p>
          Gantt & Karr Formation Group provides business formation assistance, document coordination,
          notary services, startup guidance, and related administrative support services. We are not a
          law firm, accounting firm, tax advisory firm, or financial advisory firm. We do not provide
          legal, tax, accounting, investment, or financial advice.
        </p>
        <p>
          Nothing on this website or communicated by our team constitutes legal or professional advice.
          You should consult a licensed attorney, CPA, tax professional, or financial advisor for
          guidance specific to your situation.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years of age to use our services. By using our website, you represent
          that you are of legal age and have the authority to enter into this agreement.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for any unlawful purpose</li>
          <li>Submit false or misleading information</li>
          <li>Attempt to access systems or data you are not authorized to access</li>
          <li>Interfere with or disrupt the operation of our website</li>
          <li>Use our services to form entities intended for fraudulent activity</li>
        </ul>

        <h2>4. Payments and Fees</h2>
        <p>
          Fees for our services are disclosed prior to engagement. Government filing fees, state fees,
          and third-party costs are separate from our service fees and are your responsibility unless
          explicitly included in your selected package. All fees are non-refundable once work has
          commenced unless otherwise stated in writing.
        </p>

        <h2>5. No Attorney-Client Relationship</h2>
        <p>
          Use of our services does not create an attorney-client relationship. We are not attorneys and
          do not provide legal advice. Any documents we assist in preparing are for your review and
          submission; you are responsible for their accuracy and legal sufficiency.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and design — is the property of
          Gantt & Karr Formation Group or its licensors. You may not reproduce, distribute, or create
          derivative works without our written permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Gantt & Karr Formation Group shall not be liable for
          any indirect, incidental, consequential, or punitive damages arising from your use of our
          services or website, including but not limited to business losses, filing delays caused by
          government agencies, or reliance on information provided on our website.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Our website and services are provided "as is" without warranty of any kind. We do not warrant
          that our services will be error-free, uninterrupted, or that any specific business outcome
          will result from using our services.
        </p>

        <h2>9. Third-Party Services</h2>
        <p>
          We may refer you to or integrate third-party services (e.g., registered agent providers,
          scheduling tools, payment processors). We are not responsible for the acts or omissions of
          third-party service providers.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Missouri, without regard to conflict of
          law provisions. Any disputes shall be resolved in courts located in Missouri.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of our website after
          changes are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms?<br />
          <strong>Gantt & Karr Formation Group</strong><br />
          contact@gkformation.com<br />
          1-800-GANTT-KARR
        </p>

        <div className="flex flex-wrap gap-4 mt-12 text-sm text-gray-500 border-t pt-6">
          <Link href="/privacy-policy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-emerald-600">Cookie Policy</Link>
          <Link href="/messaging-terms" className="hover:text-emerald-600">Messaging Terms</Link>
          <Link href="/disclaimer" className="hover:text-emerald-600">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
