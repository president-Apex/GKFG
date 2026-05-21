import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/messaging-terms",
    name: "Messaging Terms | Gantt & Karr Formation Group",
    description: "SMS and messaging terms for Gantt & Karr Formation Group. Learn how we use text messages, how to opt out, and your rights as a recipient.",
    breadcrumbItems: [{ name: "Messaging Terms", href: "/messaging-terms" }],
  }),
  breadcrumbSchema([{ name: "Messaging Terms", href: "/messaging-terms" }]),
];

export default function MessagingTerms() {
  return (
    <>
      <SEO
        title="Messaging Terms | SMS Consent | Gantt & Karr Formation Group"
        description="SMS and messaging terms for Gantt & Karr Formation Group. Opt-in, opt-out, message frequency, and privacy information for text communications."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Messaging Terms</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Last updated: May 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            These Messaging Terms govern SMS, MMS, and other electronic communications sent by or on behalf
            of Gantt & Karr Formation Group ("we," "us," or "our"). By providing your phone number and
            consenting to receive messages, you agree to these terms. <strong>Consent to receive SMS messages
            is never a condition of purchasing or using our services.</strong>
          </p>

          <div className="bg-muted border border-border rounded-xl p-5 my-6 not-prose">
            <p className="text-sm font-semibold text-foreground mb-2">SMS Consent Summary</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-none">
              <li>• <strong className="text-foreground">Sender:</strong> Gantt & Karr Formation Group</li>
              <li>• <strong className="text-foreground">Message types:</strong> Appointment reminders, service updates, intake follow-ups</li>
              <li>• <strong className="text-foreground">Frequency:</strong> Up to 4–8 messages/month during active engagement</li>
              <li>• <strong className="text-foreground">Rates:</strong> Message and data rates may apply</li>
              <li>• <strong className="text-foreground">Opt out:</strong> Reply STOP to any message</li>
              <li>• <strong className="text-foreground">Help:</strong> Reply HELP or email Info@ganttkarr.com</li>
            </ul>
          </div>

          <h2>1. Types of Messages</h2>
          <p>By opting in, you may receive the following types of messages from Gantt & Karr Formation Group:</p>
          <ul>
            <li><strong>Transactional messages:</strong> Appointment confirmations, reminders, and scheduling updates</li>
            <li><strong>Service updates:</strong> Status notifications regarding your business formation, filing, or notary service</li>
            <li><strong>Intake follow-ups:</strong> Follow-up messages related to your consultation request or submitted intake form</li>
            <li><strong>Promotional messages:</strong> Information about services, offers, or resources — <em>only</em> if you explicitly opt in to marketing communications as a separate consent</li>
          </ul>

          <h2>2. How to Provide Consent (Opt-In)</h2>
          <p>You may provide consent to receive SMS messages from us in any of the following ways:</p>
          <ul>
            <li>Checking the SMS consent checkbox on our online consultation or contact intake form</li>
            <li>Verbally confirming consent during a phone or in-person consultation, followed by written confirmation</li>
            <li>Texting a designated opt-in keyword to our business number (if applicable)</li>
          </ul>
          <p>
            When you opt in online, you will see the following disclosure before submitting any form that
            includes a phone number and SMS consent checkbox:
          </p>
          <blockquote>
            "By checking this box, you consent to receive text messages from Gantt & Karr Formation Group
            at the phone number provided above. Message frequency varies. Message and data rates may apply.
            Reply STOP to opt out at any time. Reply HELP for help. View our{" "}
            <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms</Link> and{" "}
            <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>."
          </blockquote>
          <p>
            <strong>Consent to SMS is never required to use our services or make a purchase.</strong>
          </p>

          <h2>3. Message Frequency</h2>
          <p>
            Message frequency varies depending on your service engagement. During an active service period,
            you may receive up to 4–8 messages per month. Promotional messages, if separately consented to,
            will not exceed 4 per month.
          </p>

          <h2>4. Message and Data Rates</h2>
          <p>
            Standard message and data rates may apply depending on your mobile carrier and plan. Gantt &
            Karr Formation Group is not responsible for any charges from your carrier related to receiving
            our messages.
          </p>

          <h2>5. How to Opt Out</h2>
          <p>
            You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any
            message we send. After opting out, you will receive a single confirmation message acknowledging
            your opt-out, and no further messages will be sent unless you re-opt in.
          </p>
          <p>
            To opt back in after opting out, reply <strong>START</strong> to our number or contact us directly.
          </p>

          <h2>6. Help</h2>
          <p>
            For assistance related to our messaging, reply <strong>HELP</strong> to any message or contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:Info@ganttkarr.com" className="text-secondary hover:underline">Info@ganttkarr.com</a></li>
          </ul>

          <h2>7. Supported Carriers</h2>
          <p>
            Messaging is available on most major U.S. carriers, including AT&T, Verizon, T-Mobile, US
            Cellular, Boost Mobile, Cricket, and Metro by T-Mobile. Delivery is not guaranteed on all
            carriers. Carriers are not liable for delayed or undelivered messages.
          </p>

          <h2>8. Privacy and Data Handling</h2>
          <p>
            We will not share your mobile phone number with third parties for their marketing purposes.
            Your information is handled in accordance with our{" "}
            <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
            Mobile opt-in data and consent records are retained in accordance with applicable TCPA
            compliance requirements.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Messaging Terms at any time. Updates will be reflected by a revised "Last
            updated" date on this page. Continued use of our messaging services after changes are posted
            constitutes your acceptance of the updated terms.
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
