import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/disclaimer",
    name: "Disclaimer | Gantt Key Formation Group",
    description: "Gantt Key Formation Group is not a law firm and does not provide legal, tax, accounting, or financial advice. Read our full disclaimer.",
    breadcrumbItems: [{ name: "Disclaimer", href: "/disclaimer" }],
  }),
  breadcrumbSchema([{ name: "Disclaimer", href: "/disclaimer" }]),
];

export default function DisclaimerPage() {
  return (
    <>
      <SEO
        title="Disclaimer | Gantt Key Formation Group"
        description="Gantt Key Formation Group is not a law firm and does not provide legal, tax, accounting, or financial advice. We provide business formation assistance and administrative support services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Disclaimer</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            The information provided by Gantt Key Formation Group ("Company," "we," "our," or "us")
            on this website, through communications, forms, consultations, social media, text messages,
            emails, and services is for general informational and educational purposes only.
          </p>
          <p>
            While we strive to provide accurate and current information, we make no representations or
            warranties regarding completeness, reliability, accuracy, suitability, or availability of
            any information contained on this website or through our services.
          </p>

          <h2>Not a Law Firm</h2>
          <p>
            Gantt Key Formation Group is not a law firm and does not provide legal representation,
            legal advice, legal opinions, or legal services.
          </p>
          <p>
            No information provided by Gantt Key Formation Group should be interpreted as legal advice.
          </p>
          <p>Use of our website, forms, communications, or services does not establish:</p>
          <ul>
            <li>Attorney-client relationship</li>
            <li>Legal representation</li>
            <li>Fiduciary relationship</li>
            <li>Partnership relationship</li>
          </ul>
          <p>If legal guidance is needed, we encourage you to consult a licensed attorney.</p>

          <h2>No Tax, Financial, or Accounting Advice</h2>
          <p>Information provided by Gantt Key Formation Group does not constitute:</p>
          <ul>
            <li>Tax advice</li>
            <li>Accounting advice</li>
            <li>Financial advice</li>
            <li>Investment advice</li>
          </ul>
          <p>You should consult licensed professionals regarding your individual circumstances.</p>

          <h2>Business Formation Disclaimer</h2>
          <p>
            Business formation assistance and related services are administrative support services only.
          </p>
          <p>We cannot guarantee:</p>
          <ul>
            <li>State approval of filings</li>
            <li>Government processing times</li>
            <li>Approval outcomes</li>
            <li>Business success</li>
            <li>Tax outcomes</li>
            <li>Regulatory compliance outcomes</li>
          </ul>
          <p>Government agencies may reject filings based on factors outside our control.</p>

          <h2>Third-Party Disclaimer</h2>
          <p>
            This website may include links to third-party resources, websites, referrals, software
            platforms, or service providers.
          </p>
          <p>We do not endorse or guarantee:</p>
          <ul>
            <li>Third-party products</li>
            <li>Third-party services</li>
            <li>Third-party content</li>
            <li>Accuracy of third-party information</li>
          </ul>
          <p>Users interact with third parties at their own discretion and risk.</p>

          <h2>Attorney Referral Notice</h2>
          <p>
            Gantt Key Formation Group may provide referrals to independent attorneys or legal
            professionals for your convenience.
          </p>
          <p>We do not:</p>
          <ul>
            <li>Endorse specific attorneys</li>
            <li>Guarantee outcomes</li>
            <li>Provide legal advice</li>
            <li>Control third-party legal services</li>
          </ul>
          <p>
            Any attorney-client relationship exists solely between you and the attorney you select.
          </p>

          <h2>Testimonials and Results Disclaimer</h2>
          <p>
            Any testimonials, examples, or client experiences shown on this website are intended for
            illustrative purposes only.
          </p>
          <p>Individual results vary.</p>
          <p>Past results do not guarantee future outcomes.</p>

          <h2>Limitation of Liability</h2>
          <p>
            Under no circumstances shall Gantt Key Formation Group, its owners, employees, affiliates,
            contractors, or representatives be liable for any loss or damages arising from use of this
            website, information, or services.
          </p>
          <p>Use of our website and services is at your own risk.</p>

          <h2>Contact Information</h2>
          <p>
            <strong>Gantt Key Formation Group</strong><br />
            Website: <a href="https://www.ganttformationgroup.com" className="text-secondary hover:underline">www.ganttformationgroup.com</a><br />
            Email: <a href="mailto:info@ganttformationgroup.com" className="text-secondary hover:underline">info@ganttformationgroup.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
            <Link href="/refund-policy" className="hover:text-secondary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
}
