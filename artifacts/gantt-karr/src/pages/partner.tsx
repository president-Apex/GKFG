import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Partner() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thank you for applying to our Professional Network. We will review your application and be in touch soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO
        title="Become a Partner | Professional Network | Gantt Key"
        description="Join Gantt Key's curated network of attorneys, CPAs, and business experts. Partner with a trusted business formation group serving entrepreneurs across 7 states."
        schema={[
          webPageSchema({
            url: "/partner",
            name: "Partner With Gantt Key Formation Group",
            description: "Apply to join our curated professional network of attorneys, CPAs, and business experts supporting entrepreneurs across 7 states.",
            breadcrumbItems: [{ name: "Partner With Us", href: "/partner" }],
          }),
          breadcrumbSchema([{ name: "Partner With Us", href: "/partner" }]),
        ]}
      />
      
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-6 uppercase tracking-wider">
            Professional Network
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Partner With Us</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Join our curated network of attorneys, CPAs, and business experts supporting the next generation of entrepreneurs.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Partner With Gantt Key?</h2>
              <div className="prose prose-lg text-muted-foreground mb-10">
                <p>
                  Gantt Key Formation Group helps entrepreneurs build a solid foundation. While we handle the formation, notary, and organizational setup, our clients frequently need specialized, licensed advice as they grow.
                </p>
                <p>
                  We refer our clients to our trusted Professional Network for legal counsel, tax strategy, complex accounting, trademarking, and funding. By partnering with us, you gain access to a stream of serious, prepared entrepreneurs ready to engage professional services.
                </p>
              </div>

              <h3 className="text-xl font-bold mb-6">Who We Partner With</h3>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Business & Corporate Attorneys</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Certified Public Accountants (CPAs)</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Tax Professionals & Advisors</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Commercial Insurance Agents</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Bookkeepers</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Business Bankers & Lenders</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary rounded-full" /> Trademark & IP Professionals</li>
              </ul>

              <div className="bg-muted p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Professional Standards</h3>
                <p className="text-muted-foreground">
                  All partners must hold active, valid licenses in their respective states and professions. We prioritize partners who share our commitment to a premium, empowering client experience.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card shadow-xl border border-border rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-serif font-bold mb-6 text-primary">Apply to Join the Network</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <Input required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <Input required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company/Firm Name *</label>
                    <Input required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Professional Category *</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="attorney">Attorney / Law Firm</SelectItem>
                        <SelectItem value="cpa">CPA / Accounting</SelectItem>
                        <SelectItem value="tax">Tax Professional</SelectItem>
                        <SelectItem value="insurance">Business Insurance</SelectItem>
                        <SelectItem value="bookkeeper">Bookkeeper</SelectItem>
                        <SelectItem value="banker">Business Banking/Funding</SelectItem>
                        <SelectItem value="trademark">Trademark/IP</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone *</label>
                      <Input type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website</label>
                    <Input type="url" placeholder="https://" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City *</label>
                      <Input required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">State *</label>
                      <Input required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">States Served</label>
                    <Input placeholder="e.g. NC, SC, GA or Nationwide" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">License / Credential Type & Number</label>
                    <Input placeholder="e.g. NC State Bar #12345" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Services Offered</label>
                    <Textarea rows={3} placeholder="Briefly describe the main services you provide to entrepreneurs..." required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
