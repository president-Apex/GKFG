import { Link } from "wouter";

export default function MessagingTerms() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-medium">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Messaging Terms</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: May 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <p>
          These Messaging Terms govern SMS, MMS, and other electronic communications sent by or on behalf
          of Gantt & Karr Formation Group ("we," "us," or "our"). By providing your phone number and
          opting in to receive messages, you agree to these terms.
        </p>

        <h2>1. Types of Messages</h2>
        <p>By opting in, you may receive the following types of messages from us:</p>
        <ul>
          <li>Appointment confirmations and reminders</li>
          <li>Service updates and status notifications regarding your formation or filing</li>
          <li>Follow-up messages related to your consultation or intake request</li>
          <li>Promotional messages about services, offers, or resources (only if you explicitly opt in to marketing messages)</li>
        </ul>

        <h2>2. Opt-In and Consent</h2>
        <p>
          You provide consent to receive SMS messages by submitting a form on our website that includes
          your phone number, by texting a designated keyword to our number, or by verbally or written
          agreement during a consultation. Consent is not a condition of purchase or use of our services.
        </p>

        <h2>3. Message Frequency</h2>
        <p>
          Message frequency varies depending on your service engagement. You may receive up to 4–8
          messages per month during an active service engagement. Promotional messages, if consented to,
          will not exceed 4 per month.
        </p>

        <h2>4. Message and Data Rates</h2>
        <p>
          Standard message and data rates may apply depending on your mobile carrier and plan. We are not
          responsible for charges from your carrier related to receiving our messages.
        </p>

        <h2>5. How to Opt Out</h2>
        <p>
          You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any
          message we send. After opting out, you will receive a single confirmation message and no further
          messages will be sent, except as required by law.
        </p>
        <p>
          To opt back in, reply <strong>START</strong> or contact us directly.
        </p>

        <h2>6. Help</h2>
        <p>
          For assistance, reply <strong>HELP</strong> to any message or contact us at:<br />
          Info@ganttkarr.com<br />
          1-800-GANTT-KARR
        </p>

        <h2>7. Supported Carriers</h2>
        <p>
          Messaging is available on most major U.S. carriers, including AT&T, Verizon, T-Mobile, Sprint,
          Boost Mobile, Cricket, and others. Service may not be available on all carriers.
        </p>

        <h2>8. Privacy</h2>
        <p>
          We will not share your mobile number with third parties for marketing purposes. Your information
          is handled in accordance with our{" "}
          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Messaging Terms at any time. Continued use of our messaging services after
          changes are posted constitutes acceptance of the updated terms.
        </p>

        <div className="flex flex-wrap gap-4 mt-12 text-sm text-gray-500 border-t pt-6">
          <Link href="/privacy-policy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-emerald-600">Cookie Policy</Link>
          <Link href="/terms-of-service" className="hover:text-emerald-600">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-emerald-600">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
