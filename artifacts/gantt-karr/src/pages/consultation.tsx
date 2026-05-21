import { SEO } from "@/components/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Consultation() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received",
      description: "Anna has routed your request. We will be in touch shortly to confirm your time.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO
        title="Book a Free Startup Consultation"
        description="Book a free startup consultation with Gantt & Karr Formation Group. Discuss your vision, choose the right business structure, and get a clear launch plan."
        schema={[
          serviceSchema({
            name: "Free Startup Consultation",
            description: "A complimentary consultation to evaluate your business vision, recommend the right entity structure, and outline the exact steps to launch your business correctly.",
            url: "/consultation",
            category: "Business Consulting",
          }),
          breadcrumbSchema([{ name: "Book Consultation", href: "/consultation" }]),
        ]}
      />
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Book a Startup Consultation</h1>
          <p className="text-xl text-primary-foreground/80">Let's discuss your vision and outline the exact steps to launch your business correctly.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card shadow-xl border border-border rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold mb-8 text-primary">Your Details</h2>
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
                <label className="text-sm font-medium">What state are you located in? *</label>
                <Input required placeholder="e.g. North Carolina" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">What is your primary goal? *</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="start">I need to start/form a new business</SelectItem>
                    <SelectItem value="notary">I need notary services</SelectItem>
                    <SelectItem value="organize">I have a business but need it organized</SelectItem>
                    <SelectItem value="ai">I am interested in Anna AI setup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tell us briefly about your business idea or current situation</label>
                <Textarea rows={4} placeholder="I am starting a consulting firm..." />
              </div>

              <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 text-lg">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
