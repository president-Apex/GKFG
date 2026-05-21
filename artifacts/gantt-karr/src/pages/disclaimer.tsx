import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/disclaimer",
    name: "Disclaimer | Gantt & Karr Formation Group",
    description: "Gantt & Karr Formation Group is not a law firm and does not provide legal, tax, accounting, or financial advice. Read our full disclaimer.",
    breadcrumbItems: [{ name: "Disclaimer", href: "/disclaimer" }],
  }),
  breadcrumbSchema([{ name: "Disclaimer", href: "/disclaimer" }]),
];

export default function DisclaimerPage() {
  return (
    <>
      <SEO
        title="Disclaimer | Gantt & Karr Formation Group"
        description="Gantt & Karr Formation Group is not a law firm and does not provide legal, tax, accounting, or financial advice. We provide business formation assistance and administrative support services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Disclaimer</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Last updated: May 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-amber-900 font-semibold text-sm leading-relaxed m-0">
              Important: Gantt & Karr Formation Group is not a law firm, accounting firm, tax advisory
              firm, or financial advisory firm, and does not provide legal, tax, accounting, or financial advice.
            </p>
          </div>

          <h2>Not Legal Advice</h2>
          <p>
            All information provided on this website and through our services is for general informational
            and educational purposes only. Nothing on this site, in our communications, or through any
            interaction with our team should be construed as legal advice. No attorney-client relationship
            is formed by your use of this website, our intake forms, or any of our services.
          </p>
          <p>
            You should consult a licensed attorney for any legal questions related to your business
            structure, contracts, liability, compliance obligations, or any other legal matter.
          </p>

          <h2>Not Tax or Financial Advice</h2>
          <p>
            We do not provide tax, accounting, financial planning, payroll, or investment advice. Business
            formation decisions — including entity type selection, tax elections, and financial structure —
            can have significant tax and financial implications that vary based on your individual
            circumstances. Please consult a licensed CPA, enrolled agent, financial planner, or other
            qualified professional before making decisions about your business structure or financial
            strategy.
          </p>

          <h2>Nature of Our Services</h2>
          <p>
            Gantt & Karr Formation Group provides the following types of services:
          </p>
          <ul>
            <li>Business formation assistance and document coordination</li>
            <li>EIN application assistance</li>
            <li>Registered agent coordination (Missouri)</li>
            <li>BOI reporting assistance and general information</li>
            <li>Notary services (online and mobile, where applicable by state)</li>
            <li>Startup guidance, planning support, and operational setup</li>
            <li>AI intake support through Anna, our Apex-built receptionist</li>
          </ul>
          <p>
            We are a document preparation and administrative support company. Our role is to assist you in
            organizing, preparing, coordinating, and submitting documents — not to provide professional
            advice on their legal, tax, or financial effect.
          </p>

          <h2>Government Filings and Processing Times</h2>
          <p>
            We assist in preparing and coordinating submissions to government agencies; however, we have
            no control over government processing times, approval decisions, rejection notices, or changes
            in agency requirements. Processing times vary by state and are subject to change at any time.
            We cannot guarantee specific turnaround times for state or federal filings.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide accurate, current, and useful information on our website. However, laws,
            regulations, and filing requirements change frequently and vary by state. We make no warranties
            about the completeness, accuracy, reliability, or applicability of any information on this
            site. You should always verify requirements with the appropriate state agency or a qualified
            licensed professional.
          </p>

          <h2>Third-Party Links and Referrals</h2>
          <p>
            Our website may link to or refer to third-party services, professionals, or organizations. We
            do not endorse, guarantee, or take responsibility for the services, advice, qualifications, or
            products of any third party. Any reliance on a third-party referral is at your own discretion
            and risk.
          </p>

          <h2>Demo Notifications</h2>
          <p>
            This website may display social proof notifications for demonstration and illustrative purposes.
            These notifications use randomized sample data and do not represent actual real-time client
            activity or live transactions unless explicitly stated.
          </p>

          <h2>Anna — AI Receptionist</h2>
          <p>
            Anna is an AI receptionist built through Apex Key Group Holdings, Inc. and is used to support
            client intake for Gantt & Karr Formation Group. Anna does not provide legal advice, notary
            advice, or make legal decisions. All substantive guidance and decisions are made by licensed
            or qualified members of our team or our professional network. Gantt & Karr Formation Group
            remains responsible for all client service and business support decisions.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Gantt & Karr Formation Group, its owners,
            members, team members, and affiliates shall not be liable for any direct, indirect, incidental,
            special, or consequential damages arising from your use of, or reliance on, information or
            services provided by this company or website.
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
          </div>
        </div>
      </div>
    </>
  );
}
