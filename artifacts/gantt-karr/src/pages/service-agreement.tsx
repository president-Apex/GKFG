import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/service-agreement",
    name: "Service Agreement | Gantt & Karr Formation Group",
    description: "Client Service Agreement for Gantt & Karr Formation Group. Understand the scope of services, responsibilities, fees, and terms before engaging our business formation support.",
    breadcrumbItems: [{ name: "Service Agreement", href: "/service-agreement" }],
  }),
  breadcrumbSchema([{ name: "Service Agreement", href: "/service-agreement" }]),
];

export default function ServiceAgreement() {
  return (
    <>
      <SEO
        title="Service Agreement | Client Agreement | Gantt & Karr Formation Group"
        description="Client Service Agreement for Gantt & Karr Formation Group. Review scope of services, payment terms, limitations of liability, and client responsibilities before engaging."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Service Agreement</h1>
            <p className="text-primary-foreground/60 mt-1 text-sm">Client Agreement</p>
            <p className="text-primary-foreground/70 mt-2 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            This Service Agreement ("Agreement") is entered into between Gantt & Karr Formation Group
            ("Company," "we," "our," or "us") and the client ("Client," "you," or "your").
          </p>
          <p>
            By purchasing, requesting, or using services provided by Gantt & Karr Formation Group, you
            agree to the following terms.
          </p>

          <h2>1. Scope of Services</h2>
          <p>
            Gantt & Karr Formation Group may provide administrative and business support services including:
          </p>
          <ul>
            <li>LLC formation assistance</li>
            <li>Corporation formation assistance</li>
            <li>Registered agent support</li>
            <li>Notary services</li>
            <li>EIN guidance assistance</li>
            <li>Business compliance support</li>
            <li>Document preparation support</li>
            <li>Business resource referrals</li>
            <li>General business administrative services</li>
          </ul>
          <p>
            Specific services, pricing, timelines, and deliverables may vary based on client needs.
          </p>

          <h2>2. No Legal, Tax, or Financial Advice</h2>
          <p>
            Gantt & Karr Formation Group is not a law firm and does not provide legal representation,
            legal advice, tax advice, accounting advice, or financial advice.
          </p>
          <p>
            Any information provided is for educational and administrative purposes only.
          </p>
          <p>
            Clients are encouraged to seek advice from licensed attorneys, accountants, tax professionals,
            or other qualified professionals.
          </p>
          <p>Nothing within this Agreement creates:</p>
          <ul>
            <li>Attorney-client relationship</li>
            <li>Fiduciary relationship</li>
            <li>Partnership relationship</li>
            <li>Employment relationship</li>
          </ul>

          <h2>3. Client Responsibilities</h2>
          <p>Client agrees to:</p>
          <ul>
            <li>Provide complete and accurate information</li>
            <li>Provide requested documentation promptly</li>
            <li>Review all submitted documents before filing</li>
            <li>Notify Company immediately of errors or changes</li>
            <li>Maintain responsibility for all business decisions</li>
          </ul>
          <p>
            The Company is not responsible for delays caused by incomplete or inaccurate information.
          </p>

          <h2>4. Filing and Government Processing</h2>
          <p>Government agencies control processing timelines.</p>
          <p>Gantt & Karr Formation Group cannot guarantee:</p>
          <ul>
            <li>State approval times</li>
            <li>Filing times</li>
            <li>Government processing times</li>
            <li>Approval outcomes</li>
          </ul>
          <p>State agencies may reject filings for reasons beyond Company control.</p>

          <h2>5. Fees and Payment</h2>
          <p>
            Client agrees to pay all fees associated with requested services, including:
          </p>
          <ul>
            <li>Service fees</li>
            <li>State filing fees</li>
            <li>Registered agent fees</li>
            <li>Notary fees</li>
            <li>Third-party fees</li>
            <li>Government fees</li>
          </ul>
          <p>Unless otherwise agreed in writing:</p>
          <ul>
            <li>Payment may be required before work begins.</li>
            <li>Outstanding balances may delay services.</li>
          </ul>

          <h2>6. Refunds</h2>
          <p>
            Refund eligibility is governed by our{" "}
            <Link href="/refund-policy" className="text-secondary hover:underline">Refund and Cancellation Policy</Link>.
          </p>
          <p>The following are generally non-refundable once incurred:</p>
          <ul>
            <li>State filing fees</li>
            <li>Government fees</li>
            <li>Third-party fees</li>
            <li>Registered agent filings already completed</li>
            <li>Work substantially completed on behalf of Client</li>
          </ul>

          <h2>7. Registered Agent Services</h2>
          <p>If Client purchases registered agent services:</p>
          <ul>
            <li>Client remains responsible for maintaining accurate contact information.</li>
            <li>Client remains responsible for legal and compliance obligations.</li>
            <li>Failure to maintain active service may affect business compliance status.</li>
          </ul>
          <p>Additional registered agent terms may apply.</p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Gantt & Karr Formation Group shall not be liable for:
          </p>
          <ul>
            <li>Lost profits</li>
            <li>Business losses</li>
            <li>Indirect damages</li>
            <li>Consequential damages</li>
            <li>Government filing delays</li>
            <li>Denied filings</li>
            <li>Client errors</li>
            <li>Third-party actions</li>
          </ul>

          <h2>9. Indemnification</h2>
          <p>
            Client agrees to defend, indemnify, and hold harmless Gantt & Karr Formation Group and its
            owners, employees, affiliates, contractors, and representatives from claims resulting from:
          </p>
          <ul>
            <li>Client-provided information</li>
            <li>Misuse of services</li>
            <li>Client actions or omissions</li>
            <li>Violation of laws or regulations</li>
          </ul>

          <h2>10. Governing Law</h2>
          <p>
            This Agreement shall be governed under the laws of the State of Missouri.
          </p>

          <h2>11. Electronic Acceptance</h2>
          <p>
            Client agrees that electronic signatures, online acceptance, and electronic communications
            constitute legally binding acceptance of this Agreement.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            <strong>Gantt & Karr Formation Group</strong><br />
            Website: <a href="https://www.ganttkarr.com" className="text-secondary hover:underline">www.ganttkarr.com</a><br />
            Email: <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-secondary transition-colors">Refund Policy</Link>
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
