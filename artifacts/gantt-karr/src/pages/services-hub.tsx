import { SEO } from "@/components/seo";
import { Link } from "wouter";

const services: { title: string; slug: string; desc: string; badge?: string }[] = [
  { title: "LLC Formation Assistance", slug: "llc-formation", desc: "Start your business structure" },
  { title: "Business Formation Assistance", slug: "business-formation", desc: "General formation support" },
  { title: "EIN Assistance", slug: "ein-assistance", desc: "Secure your tax ID" },
  { title: "Registered Agent Services", slug: "registered-agent", desc: "Missouri only — maintain state compliance", badge: "Missouri Only" },
  { title: "Operating Agreement Support", slug: "operating-agreement", desc: "Internal structure documentation" },
  { title: "Business Name Search Guidance", slug: "business-name-search", desc: "Clear your desired name" },
  { title: "Business Address & Mailbox Guidance", slug: "business-address", desc: "Professional physical presence" },
  { title: "Notary Services", slug: "notary", desc: "Document notarization" },
  { title: "Mobile Notary Services", slug: "mobile-notary", desc: "We come to you" },
  { title: "Document Preparation Support", slug: "document-preparation", desc: "Professional document handling" },
  { title: "Document Organization Support", slug: "document-organization", desc: "Structuring your files" },
  { title: "Startup Compliance Checklist", slug: "startup-compliance", desc: "Stay on the right side of regulations" },
  { title: "Business Launch Packages", slug: "launch-packages", desc: "Bundled services for a quick start" },
  { title: "Startup Consultation", slug: "startup-consultation", desc: "Strategic advice for founders" },
  { title: "Entrepreneur Support Services", slug: "entrepreneur-support", desc: "Ongoing operational support" },
  { title: "AI Intake Setup with Anna", slug: "anna-ai-intake", desc: "Automate your client intake" },
  { title: "Website & Digital Launch Guidance", slug: "website-digital-launch", desc: "Get your business online" },
  { title: "Business Phone & Intake Setup", slug: "business-phone-intake", desc: "Professional comms setup" },
  { title: "Google Business Profile Setup", slug: "google-business-profile", desc: "Local search presence" },
  { title: "Startup Systems & Operations Support", slug: "startup-systems", desc: "Internal workflows optimized" },
];

export default function ServicesHub() {
  return (
    <>
      <SEO title="Our Services | Business Setup & Formation" />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Comprehensive Setup Services</h1>
          <p className="text-xl text-muted-foreground">Everything you need to form, structure, and launch your business with confidence.</p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <div className="block group p-6 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    {s.badge && (
                      <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-2 py-0.5 leading-tight">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground flex-grow">{s.desc}</p>
                  <div className="mt-6 text-secondary text-sm font-medium flex items-center">
                    Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
