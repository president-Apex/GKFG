import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-medium">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: May 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <p>
          Gantt & Karr Formation Group ("we," "us," or "our") is committed to protecting your privacy.
          This Privacy Policy describes how we collect, use, disclose, and safeguard your information when
          you visit our website or use our services. Please read it carefully.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit a form or book a consultation.</li>
          <li><strong>Business Information:</strong> Business name, structure, and state of formation when you use our intake forms.</li>
          <li><strong>Usage Data:</strong> Pages visited, time on site, device type, browser type, and referring URLs via cookies and analytics tools.</li>
          <li><strong>Communications:</strong> Messages you send us via contact forms, email, or chat widgets.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve our services</li>
          <li>Respond to your inquiries and fulfill service requests</li>
          <li>Send appointment confirmations, follow-ups, and service updates</li>
          <li>Analyze website traffic and improve user experience</li>
          <li>Comply with applicable laws and regulations</li>
          <li>Prevent fraud and maintain security</li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website. You can
          manage your cookie preferences at any time via our{" "}
          <Link href="/cookie-policy" className="text-emerald-600 hover:underline">Cookie Policy</Link> page
          or our cookie consent tool. See our full{" "}
          <Link href="/cookie-policy" className="text-emerald-600 hover:underline">Cookie Policy</Link> for details.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul>
          <li><strong>Service providers</strong> who assist us in operating our website and delivering services (e.g., scheduling platforms, CRM tools, form processors)</li>
          <li><strong>Government agencies</strong> when required by law (e.g., state filing offices)</li>
          <li><strong>Professional partners</strong> when you request a referral to a licensed attorney, CPA, or other professional</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this
          policy, comply with our legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Request restriction of processing or object to processing</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>To exercise any of these rights, contact us at privacy@gkformation.com.</p>

        <h2>7. Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical security measures to protect your
          personal information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices of those sites and encourage you to read their privacy policies.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not knowingly collect personal
          information from minors.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of material changes by updating
          the "Last updated" date at the top of this page.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us:<br />
          <strong>Gantt & Karr Formation Group</strong><br />
          privacy@gkformation.com<br />
          1-800-GANTT-KARR
        </p>

        <div className="flex flex-wrap gap-4 mt-12 text-sm text-gray-500 border-t pt-6">
          <Link href="/cookie-policy" className="hover:text-emerald-600">Cookie Policy</Link>
          <Link href="/terms-of-service" className="hover:text-emerald-600">Terms of Service</Link>
          <Link href="/messaging-terms" className="hover:text-emerald-600">Messaging Terms</Link>
          <Link href="/disclaimer" className="hover:text-emerald-600">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
