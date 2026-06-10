import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const SCHEMA = [
  webPageSchema({
    url: "/cookie-policy",
    name: "Cookie Policy | Gantt Key Formation Group",
    description: "Cookie Policy for Gantt Key Formation Group. Learn about the cookies we use, why we use them, and how to manage your preferences.",
    breadcrumbItems: [{ name: "Cookie Policy", href: "/cookie-policy" }],
  }),
  breadcrumbSchema([{ name: "Cookie Policy", href: "/cookie-policy" }]),
];

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy | Gantt Key Formation Group"
        description="Cookie Policy for Gantt Key Formation Group. Learn about the cookies we use, why we use them, and how to manage your preferences through our consent tool."
        schema={SCHEMA}
      />
      <div className="bg-background min-h-screen">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-secondary text-sm uppercase tracking-widest mb-3 font-semibold">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">Cookie Policy</h1>
            <p className="text-primary-foreground/70 mt-4 text-sm">Last updated: May 2026</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
          <p>
            This Cookie Policy explains how Gantt Key Formation Group ("we," "us," or "our") uses
            cookies and similar tracking technologies on our website at ganttformationgroup.com. It should be read
            alongside our <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help websites
            recognize your device, remember your preferences, and provide a more consistent experience across
            visits. Similar technologies include web beacons, tracking pixels, and browser local storage.
          </p>

          <h2>Categories of Cookies We Use</h2>

          <h3>Essential Cookies — Always Active</h3>
          <p>
            These cookies are strictly necessary for our website to function and cannot be disabled. They
            enable core features such as security, session management, form functionality, and secure
            appointment scheduling. No personal information is shared with third parties through essential
            cookies.
          </p>
          <ul>
            <li>Session identifiers and security tokens</li>
            <li>Cookie consent preference storage</li>
            <li>Form submission integrity</li>
          </ul>

          <h3>Performance & Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website — which pages are visited,
            how long users spend on each page, and where traffic originates — so we can improve our content
            and services. Data collected is aggregated and does not identify you personally.
          </p>
          <ul>
            <li><strong>Google Analytics (planned):</strong> Page views, session duration, traffic sources, and device type</li>
          </ul>

          <h3>Functional Preferences Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization. They may be set by us or by
            third-party providers whose services we have added to our website, such as scheduling tools or
            chat widgets.
          </p>
          <ul>
            <li>Scheduling tool session data (e.g., embedded calendar tools)</li>
            <li>Live chat widget preferences</li>
            <li>Saved form preferences and region settings</li>
          </ul>

          <h3>Marketing & Advertising Cookies</h3>
          <p>
            These cookies may be set by us or our advertising partners to build a profile of your interests
            and display relevant ads on other websites. They work by uniquely identifying your browser.
            We do not sell your personal information to advertisers. These cookies are only active if you
            explicitly opt in.
          </p>
          <ul>
            <li><strong>Meta Pixel (planned):</strong> Tracks conversions from Facebook and Instagram advertising</li>
            <li><strong>Google Ads (planned):</strong> Measures ad effectiveness and supports remarketing campaigns</li>
          </ul>

          <h2>Managing Your Cookie Preferences</h2>
          <p>
            When you first visit our website, you will see a cookie consent banner with the following
            options:
          </p>
          <ul>
            <li><strong>Accept All Cookies</strong> — enables all cookie categories</li>
            <li><strong>Manage Preferences</strong> — opens a panel where you can enable or disable individual categories</li>
            <li><strong>Decline Non-Essential Cookies</strong> — accepts only essential cookies required for the site to function</li>
          </ul>
          <p>
            Your preferences are stored in your browser's local storage and respected on future visits.
            You may clear your preferences at any time by clearing your browser's local storage or cookies,
            which will cause the consent banner to reappear on your next visit.
          </p>

          <h2>Browser-Level Controls</h2>
          <p>
            You can also control cookies directly through your browser settings. Note that disabling all
            cookies may affect certain site functionality, including form submission and scheduling tools.
            For guidance, refer to your browser's help documentation:
          </p>
          <ul>
            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
            <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
            <li>Safari: Preferences → Privacy → Manage Website Data</li>
            <li>Edge: Settings → Privacy, search, and services → Cookies</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies may be placed by third-party services embedded in our pages (e.g., scheduling
            tools, chat widgets, analytics platforms). We do not control these third-party cookies and
            their use is governed by the respective third-party privacy and cookie policies.
          </p>

          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy to reflect changes in our practices, the technologies we use,
            or applicable law. The "Last updated" date at the top of this page will reflect any revisions.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about our use of cookies or your privacy rights?<br />
            <a href="mailto:Info@ganttformationgroup.com" className="text-secondary hover:underline">Info@ganttformationgroup.com</a>
          </p>

          <div className="flex flex-wrap gap-4 mt-12 text-sm text-muted-foreground border-t border-border pt-6">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="/messaging-terms" className="hover:text-secondary transition-colors">Messaging Terms</Link>
            <Link href="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
}
