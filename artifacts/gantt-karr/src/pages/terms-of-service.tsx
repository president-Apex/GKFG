import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/terms-of-service",
    name: "Terms of Service | Gantt Key Formation Group",
    description: "Terms of Service governing use of the Gantt Key Formation Group website and services.",
    breadcrumbItems: [{ name: "Terms of Service", href: "/terms-of-service" }],
  }),
  breadcrumbSchema([{ name: "Terms of Service", href: "/terms-of-service" }]),
];

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Gantt Key Formation Group"
        description="Terms of Service governing use of the Gantt Key Formation Group website and services. Read before using our business formation, notary, or startup support services."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Terms of Service</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            Welcome to Gantt Key Formation Group ("Company," "we," "our," or "us"). By accessing or
            using our website, services, forms, content, and communications, you agree to these Terms of
            Service ("Terms"). If you do not agree with these Terms, please discontinue use of our website
            and services.
          </p>

          <h2>1. Services</h2>
          <p>Gantt Key Formation Group provides business support and administrative services, which may include:</p>
          <ul>
            <li>Business formation assistance</li>
            <li>Registered agent support</li>
            <li>Notary-related services</li>
            <li>Business compliance assistance</li>
            <li>Referral resources</li>
            <li>Educational information</li>
            <li>Administrative support services</li>
          </ul>
          <p>Services may be modified, updated, suspended, or discontinued at any time without notice.</p>

          <h2>2. No Legal, Tax, or Financial Advice</h2>
          <p>
            Gantt Key Formation Group is not a law firm and does not provide legal advice, legal
            representation, tax advice, accounting advice, or financial advice.
          </p>
          <p>
            Information on this website is provided for general informational and educational purposes only.
          </p>
          <p>
            You should consult licensed attorneys, accountants, tax professionals, or other qualified
            advisors regarding your specific situation.
          </p>
          <p>Use of this website does not create:</p>
          <ul>
            <li>Attorney-client relationship</li>
            <li>Fiduciary relationship</li>
            <li>Partnership relationship</li>
            <li>Joint venture relationship</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>By using this website, you agree:</p>
          <ul>
            <li>Information you provide is accurate and complete</li>
            <li>You will not submit false or misleading information</li>
            <li>You will not use our website for unlawful purposes</li>
            <li>You will not interfere with website operation or security</li>
          </ul>

          <h2>4. Payments</h2>
          <p>Fees for services are disclosed before purchase or engagement.</p>
          <p>You agree to pay all applicable charges for services requested.</p>
          <p>Failure to provide required information or documentation may delay processing.</p>

          <h2>5. Refunds</h2>
          <p>
            Refund eligibility is subject to our{" "}
            <Link href="/refund-policy" className="text-secondary hover:underline">Refund and Cancellation Policy</Link>.
          </p>
          <p>
            Government filing fees, third-party fees, state fees, and fees already incurred on your
            behalf may be non-refundable.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>All website content including:</p>
          <ul>
            <li>Logos</li>
            <li>Text</li>
            <li>Graphics</li>
            <li>Branding</li>
            <li>Images</li>
            <li>Documents</li>
            <li>Website design</li>
            <li>Materials</li>
          </ul>
          <p>
            remain property of Gantt Key Formation Group and may not be copied, reproduced,
            distributed, or used without written permission.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our website may include links to third-party providers, software, scheduling systems, payment
            processors, referral partners, or external resources.
          </p>
          <p>We are not responsible for:</p>
          <ul>
            <li>Third-party content</li>
            <li>Privacy practices</li>
            <li>Availability</li>
            <li>Actions or omissions of third parties</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Gantt Key Formation Group shall not be liable for:</p>
          <ul>
            <li>Indirect damages</li>
            <li>Incidental damages</li>
            <li>Consequential damages</li>
            <li>Lost profits</li>
            <li>Business interruption</li>
            <li>Data loss</li>
            <li>Delays caused by government agencies or third parties</li>
          </ul>
          <p>Services are provided on an "as-is" and "as-available" basis.</p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Gantt Key Formation Group, its owners,
            employees, affiliates, and contractors from claims arising from:
          </p>
          <ul>
            <li>Your use of services</li>
            <li>Violation of these Terms</li>
            <li>Misuse of information or materials</li>
          </ul>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of Missouri without regard to
            conflict-of-law provisions.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updated Terms become effective upon
            posting to our website.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            <strong>Gantt Key Formation Group</strong><br />
            Website: <a href="https://www.ganttformationgroup.com" className="text-secondary hover:underline">www.ganttformationgroup.com</a><br />
            Email: <a href="mailto:info@ganttformationgroup.com" className="text-secondary hover:underline">info@ganttformationgroup.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
            <Link href="/refund-policy" className="hover:text-secondary transition-colors">Refund Policy</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
