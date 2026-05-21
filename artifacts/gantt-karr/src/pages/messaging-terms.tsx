import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/messaging-terms",
    name: "Messaging Terms & Conditions | Gantt & Karr Formation Group",
    description: "SMS Terms of Service for Gantt & Karr Formation Group. Opt-in, opt-out, message frequency, and carrier information for our text messaging program.",
    breadcrumbItems: [{ name: "Messaging Terms", href: "/messaging-terms" }],
  }),
  breadcrumbSchema([{ name: "Messaging Terms", href: "/messaging-terms" }]),
];

export default function MessagingTerms() {
  return (
    <>
      <SEO
        title="Messaging Terms & Conditions | SMS Terms | Gantt & Karr Formation Group"
        description="SMS Terms of Service for Gantt & Karr Formation Group. Learn about our text messaging program, how to opt out, and your rights as a recipient."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Messaging Terms &amp; Conditions</h1>
            <p className="text-primary-foreground/70 mt-2 text-sm font-medium">SMS Terms of Service</p>
            <p className="text-primary-foreground/60 mt-1 text-sm">Effective Date: May 21, 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            Welcome to Gantt & Karr Formation Group. These Messaging Terms & Conditions govern
            participation in our SMS/text messaging program.
          </p>

          <div className="bg-muted border border-border rounded-xl p-5 my-6 not-prose">
            <p className="text-sm font-semibold text-foreground mb-3">Quick Reference</p>
            <ul className="text-sm text-muted-foreground space-y-1.5 list-none">
              <li>• <strong className="text-foreground">Opt-out:</strong> Reply <strong className="text-foreground">STOP</strong> to any message</li>
              <li>• <strong className="text-foreground">Help:</strong> Reply <strong className="text-foreground">HELP</strong> or email <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a></li>
              <li>• <strong className="text-foreground">Rates:</strong> Message and data rates may apply</li>
              <li>• <strong className="text-foreground">Consent:</strong> Not a condition of purchase</li>
              <li>• <strong className="text-foreground">Your number:</strong> Never sold or shared for marketing</li>
            </ul>
          </div>

          <h2>1. SMS Program Description</h2>
          <p>
            By providing your phone number and opting into our messaging program, you agree to receive
            text messages from Gantt & Karr Formation Group, including but not limited to:
          </p>
          <ul>
            <li>Appointment reminders</li>
            <li>Consultation confirmations</li>
            <li>Business formation updates</li>
            <li>Document notifications</li>
            <li>Service-related updates</li>
            <li>Customer support communications</li>
            <li>Follow-up communications</li>
          </ul>
          <p>
            Message frequency may vary based on your interaction with us and requested services.
          </p>

          <h2>2. User Consent</h2>
          <p>
            By submitting your phone number through our website, forms, scheduling pages, applications,
            or other communication methods, you expressly consent to receive text messages from Gantt &
            Karr Formation Group at the phone number provided.
          </p>
          <p>
            <strong>Consent is not a condition of purchase.</strong>
          </p>

          <h2>3. Message and Data Rates</h2>
          <p>
            Message and data rates may apply according to your wireless carrier plan. Charges are
            determined by your mobile carrier and are your responsibility.
          </p>

          <h2>4. Opt-Out Instructions</h2>
          <p>You may opt out of receiving SMS messages at any time by replying:</p>
          <p><strong>STOP</strong></p>
          <p>
            After opting out, you may receive one confirmation message verifying your removal from
            future SMS communications.
          </p>

          <h2>5. Help Instructions</h2>
          <p>For assistance, reply:</p>
          <p><strong>HELP</strong></p>
          <p>You may also contact us at:</p>
          <ul>
            <li>Website: <a href="https://www.ganttkarr.com" className="text-secondary hover:underline">www.ganttkarr.com</a></li>
            <li>Email: <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a></li>
          </ul>

          <h2>6. Carrier Disclaimer</h2>
          <p>
            Wireless carriers are not responsible for delayed or undelivered messages. Delivery timing
            depends on carrier networks and device capabilities.
          </p>

          <h2>7. Privacy</h2>
          <p>Your privacy is important to us.</p>
          <p>
            Phone numbers and SMS consent information collected for texting purposes will not be sold,
            rented, shared, or disclosed to third parties for marketing purposes.
          </p>
          <p>
            Please review our{" "}
            <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>{" "}
            for additional information regarding our collection and use of information.
          </p>

          <h2>8. Changes to Messaging Terms</h2>
          <p>
            Gantt & Karr Formation Group reserves the right to modify these Messaging Terms at any time.
            Any updates will become effective upon posting to our website.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            <strong>Gantt & Karr Formation Group</strong><br />
            Website: <a href="https://www.ganttkarr.com" className="text-secondary hover:underline">www.ganttkarr.com</a><br />
            Email: <a href="mailto:info@ganttkarr.com" className="text-secondary hover:underline">info@ganttkarr.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
