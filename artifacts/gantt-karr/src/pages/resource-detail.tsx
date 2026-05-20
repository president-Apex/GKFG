import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { resourcesData } from "@/data/resources-data";
import NotFound from "@/pages/not-found";

export default function ResourceDetail() {
  const { type } = useParams();
  const resource = type ? resourcesData[type] : null;

  if (!resource || type === "professional-center") {
    return <NotFound />;
  }

  // Placeholder professionals
  const professionals = [
    { name: "Sarah Jenkins", business: "Jenkins Legal Group", specialty: resource.expectedRole, phone: "(555) 123-4567", website: "example.com", location: "Charlotte, NC", states: "NC, SC", desc: "Specializing in startup foundation and corporate structuring." },
    { name: "David Chen", business: "Chen & Associates", specialty: resource.expectedRole, phone: "(555) 987-6543", website: "example.com", location: "Atlanta, GA", states: "GA, FL", desc: "Providing expert guidance for growing small businesses." }
  ];

  return (
    <>
      <SEO title={`${resource.title} | Professional Resources`} />
      
      <div className="pt-24 pb-16 bg-muted border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/resources/professional-center" className="text-muted-foreground hover:text-primary text-sm font-bold uppercase tracking-wider mb-8 inline-block">&larr; Professional Center</Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{resource.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">{resource.description}</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-serif font-bold text-primary">Featured {resource.title}</h2>
          </div>

          <div className="grid gap-8 mb-16">
            {professionals.map((prof, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-1">{prof.name}</h3>
                  <p className="text-secondary font-medium mb-4">{prof.business} &bull; {prof.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-4">{prof.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">📍 {prof.location}</span>
                    <span className="flex items-center gap-1">🌎 Serves: {prof.states}</span>
                    <span className="flex items-center gap-1">📞 {prof.phone}</span>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Schedule Consultation
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Need a specific referral?</h3>
              <p className="text-primary-foreground/80">We can help connect you with the right professional for your unique situation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Request Referral</Button>
              <Link href="/become-a-partner">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Apply as Partner</Button>
              </Link>
            </div>
          </div>

          <Disclaimer />
          <div className="mt-4 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
            <strong>Directory Disclaimer:</strong> Gantt & Karr Formation Group does not guarantee, endorse, or supervise third-party professionals. Listings are informational only. Clients are responsible for independently evaluating any provider.
          </div>
        </div>
      </section>
    </>
  );
}
