import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-medium">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Disclaimer</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: May 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="text-amber-900 font-medium text-sm leading-relaxed m-0">
            <strong>Important:</strong> Gantt & Karr Formation Group is not a law firm, accounting firm,
            tax advisory firm, or financial advisory firm, and does not provide legal, tax, accounting, or
            financial advice.
          </p>
        </div>

        <h2>Not Legal Advice</h2>
        <p>
          All information provided on this website and through our services is for general informational
          and educational purposes only. Nothing on this site should be construed as legal advice, and no
          attorney-client relationship is formed by your use of this website or our services. You should
          consult a licensed attorney for any legal questions related to your business, contracts, or
          compliance obligations.
        </p>

        <h2>Not Tax or Financial Advice</h2>
        <p>
          We do not provide tax, accounting, financial planning, or investment advice. Business formation
          decisions can have significant tax and financial implications. Please consult a licensed CPA,
          enrolled agent, financial planner, or other qualified professional before making decisions about
          your business structure, elections, or financial strategy.
        </p>

        <h2>Nature of Our Services</h2>
        <p>
          Gantt & Karr Formation Group provides business formation assistance, document coordination,
          notary support, startup guidance, and administrative support. We are a document preparation and
          support services company. Our role is to assist you in organizing, preparing, and submitting
          documents — not to provide professional advice on their legal or tax effect.
        </p>

        <h2>Government Filings and Processing Times</h2>
        <p>
          We assist in preparing and submitting documents to government agencies; however, we have no
          control over government processing times, approval decisions, or agency requirements.
          Processing times vary by state and are subject to change. We cannot guarantee specific
          turnaround times for state or federal filings.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          We strive to provide accurate and up-to-date information on our website. However, laws and
          regulations change frequently and vary by state. We make no warranties about the completeness,
          accuracy, or current applicability of any information on this site. You should always verify
          information with the appropriate state agency or a qualified professional.
        </p>

        <h2>Third-Party Links and Referrals</h2>
        <p>
          Our website may link to or refer third-party services, professionals, or organizations. We do
          not endorse, guarantee, or take responsibility for the services, advice, or products of any
          third party. Any reliance on a third-party referral is at your own discretion and risk.
        </p>

        <h2>Demo Notifications</h2>
        <p>
          This website may display social proof notifications for demonstration purposes. These notifications
          use randomized sample data and do not represent actual real-time client activity or live
          transactions unless explicitly stated.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Gantt & Karr Formation Group, its owners,
          team members, and affiliates shall not be liable for any direct, indirect, incidental, special,
          or consequential damages arising from your use of, or reliance on, information or services
          provided by this company or website.
        </p>

        <div className="flex flex-wrap gap-4 mt-12 text-sm text-gray-500 border-t pt-6">
          <Link href="/privacy-policy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-emerald-600">Cookie Policy</Link>
          <Link href="/terms-of-service" className="hover:text-emerald-600">Terms of Service</Link>
          <Link href="/messaging-terms" className="hover:text-emerald-600">Messaging Terms</Link>
        </div>
      </div>
    </div>
  );
}
