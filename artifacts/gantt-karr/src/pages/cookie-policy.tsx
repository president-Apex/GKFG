import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-medium">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: May 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <p>
          This Cookie Policy explains how Gantt & Karr Formation Group ("we," "us," or "our") uses
          cookies and similar tracking technologies on our website. It should be read alongside our{" "}
          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They help websites
          recognize your device, remember your preferences, and provide a more personalized experience.
          Similar technologies include web beacons, pixels, and local storage.
        </p>

        <h2>Categories of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are strictly necessary for our website to function. They enable core features such
          as security, session management, and accessibility. You cannot opt out of essential cookies.
        </p>
        <ul>
          <li>Session identifiers</li>
          <li>Security tokens (CSRF protection)</li>
          <li>Cookie consent preference storage</li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website, allowing us to improve
          our content and services. All data collected is aggregated and anonymous.
        </p>
        <ul>
          <li><strong>Google Analytics (planned):</strong> Tracks page views, session duration, and traffic sources</li>
        </ul>

        <h3>Marketing Cookies</h3>
        <p>
          Marketing cookies track your activity across websites to deliver relevant advertisements and
          measure ad campaign performance.
        </p>
        <ul>
          <li><strong>Meta Pixel (planned):</strong> Tracks conversions from Facebook/Instagram ads</li>
          <li><strong>Google Ads (planned):</strong> Measures ad effectiveness and remarketing</li>
        </ul>
        <p>
          We do not sell your personal information to advertisers. These cookies are only active if you
          opt in.
        </p>

        <h3>Functional Cookies</h3>
        <p>
          These cookies enable enhanced functionality such as chat widgets, embedded scheduling tools,
          and remembered preferences.
        </p>
        <ul>
          <li>Live chat / support widget preferences</li>
          <li>Scheduling tool session data (e.g., Calendly, GoHighLevel)</li>
          <li>Language or region preferences</li>
        </ul>

        <h2>Managing Your Cookie Preferences</h2>
        <p>
          You can manage your cookie preferences at any time. When you first visit our site, you will see
          a cookie consent banner offering the following options:
        </p>
        <ul>
          <li><strong>Accept All</strong> — enables all cookie categories</li>
          <li><strong>Customize Preferences</strong> — opens a panel to toggle individual categories</li>
          <li><strong>Reject Optional Cookies</strong> — accepts only essential cookies</li>
        </ul>
        <p>
          Your preferences are stored in your browser's local storage and respected on future visits. You
          may clear your preferences at any time by clearing your browser data, which will cause the
          consent banner to reappear.
        </p>

        <h2>Browser-Level Cookie Controls</h2>
        <p>
          You can also control cookies through your browser settings. Note that disabling all cookies may
          affect site functionality. For guidance, visit your browser's help documentation:
        </p>
        <ul>
          <li>Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
          <li>Firefox: Options &gt; Privacy & Security &gt; Cookies</li>
          <li>Safari: Preferences &gt; Privacy &gt; Cookies</li>
          <li>Edge: Settings &gt; Privacy, search, and services</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control
          these third-party cookies; their use is governed by the privacy policies of those third parties.
        </p>

        <h2>Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy to reflect changes in our practices or applicable law. The
          "Last updated" date at the top of this page will reflect any revisions.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about our use of cookies? Contact us at:<br />
          Info@ganttkarr.com
        </p>

        <div className="flex flex-wrap gap-4 mt-12 text-sm text-gray-500 border-t pt-6">
          <Link href="/privacy-policy" className="hover:text-emerald-600">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-emerald-600">Terms of Service</Link>
          <Link href="/messaging-terms" className="hover:text-emerald-600">Messaging Terms</Link>
          <Link href="/disclaimer" className="hover:text-emerald-600">Disclaimer</Link>
        </div>
      </div>
    </div>
  );
}
