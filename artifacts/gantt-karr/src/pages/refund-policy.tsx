import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/refund-policy",
    name: "Refund & Cancellation Policy | Gantt & Karr Formation Group",
    description: "Refund and cancellation policy for Gantt & Karr Formation Group business formation, notary, and administrative support services.",
    breadcrumbItems: [{ name: "Refund Policy", href: "/refund-policy" }],
  }),
  breadcrumbSchema([{ name: "Refund Policy", href: "/refund-policy" }]),
];

export default function RefundPolicy() {
  return (
    <>
      <SEO
        title="Refund & Cancellation Policy | Gantt & Karr Formation Group"
        description="Refund and cancellation policy for Gantt & Karr Formation Group. Understand refund eligibility, non-refundable items, and how to request a cancellation."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Refund &amp; Cancellation Policy</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            At Gantt & Karr Formation Group, we are committed to providing quality administrative and
            business support services. This Refund & Cancellation Policy explains the terms regarding
            cancellations and refunds for services purchased through our company.
          </p>

          <h2>1. Cancellation Requests</h2>
          <p>
            Clients may request cancellation of services by contacting us in writing before substantial
            work has begun.
          </p>
          <p>Cancellation requests may be submitted through:</p>
          <ul>
            <li>Email: <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a></li>
            <li>Website: <a href="https://www.ganttkarr.com" className="text-secondary hover:underline">www.ganttkarr.com</a></li>
          </ul>
          <p>
            Cancellation requests are not considered effective until confirmed by Gantt & Karr Formation
            Group in writing.
          </p>

          <h2>2. Refund Eligibility</h2>
          <p>
            Refund eligibility depends on the stage of service completion.
          </p>
          <p>Eligible examples may include:</p>
          <ul>
            <li>Duplicate payment submissions</li>
            <li>Billing errors</li>
            <li>Service cancellations requested before work begins</li>
          </ul>
          <p>
            Refund amounts, if approved, may be reduced by administrative costs already incurred.
          </p>

          <h2>3. Non-Refundable Items</h2>
          <p>
            The following are generally non-refundable once incurred, processed, ordered, submitted, or
            initiated:
          </p>
          <ul>
            <li>State filing fees</li>
            <li>Government fees</li>
            <li>Secretary of State filing fees</li>
            <li>Registered agent fees already initiated</li>
            <li>Notary services already performed</li>
            <li>Third-party processing fees</li>
            <li>Payment processing fees</li>
            <li>Expedited filing fees</li>
            <li>Administrative work already completed</li>
            <li>Document preparation already completed</li>
            <li>Custom services performed on behalf of a client</li>
          </ul>

          <h2>4. Business Formation Services</h2>
          <p>
            Once business formation work begins, including but not limited to:
          </p>
          <ul>
            <li>Information review</li>
            <li>Document preparation</li>
            <li>Filing preparation</li>
            <li>Submission processing</li>
            <li>State filing submission</li>
          </ul>
          <p>Partial or full refunds may no longer be available.</p>

          <h2>5. Registered Agent Services</h2>
          <p>Registered agent fees become non-refundable once:</p>
          <ul>
            <li>Service activation begins</li>
            <li>Appointment documentation is processed</li>
            <li>Service has been established</li>
          </ul>

          <h2>6. Chargebacks</h2>
          <p>
            Clients agree to contact Gantt & Karr Formation Group before initiating payment disputes or
            chargebacks.
          </p>
          <p>
            Submitting a chargeback for services already rendered or work already completed may constitute
            a breach of this Agreement.
          </p>
          <p>
            We reserve the right to provide documentation supporting completed work in response to
            chargeback claims.
          </p>

          <h2>7. Refund Processing Time</h2>
          <p>Approved refunds may take approximately:</p>
          <p><strong>5–10 business days</strong></p>
          <p>depending upon banking institutions and payment processors.</p>

          <h2>8. Exceptions</h2>
          <p>
            Gantt & Karr Formation Group reserves the right to review refund requests individually and
            make decisions at its discretion when unusual circumstances exist.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            <strong>Gantt & Karr Formation Group</strong><br />
            Website: <a href="https://www.ganttkarr.com" className="text-secondary hover:underline">www.ganttkarr.com</a><br />
            Email: <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/service-agreement" className="hover:text-secondary transition-colors">Service Agreement</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
