import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO title="Contact Us" />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Contact Us</h1>
          <p className="text-xl text-muted-foreground">We're here to support your business journey. Reach out with any questions.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-8 text-primary">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">How can we help you?</label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-primary text-primary-foreground p-10 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-2 uppercase tracking-wider">Email</h4>
                    <p className="text-lg">contact@gkformation.com</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-2 uppercase tracking-wider">Phone</h4>
                    <p className="text-lg">1-800-GANTT-KARR</p>
                    <p className="text-sm text-primary-foreground/60 mt-1">Available 9am - 5pm EST</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-secondary mb-2 uppercase tracking-wider">Mailing Address</h4>
                    <p className="text-lg leading-relaxed">
                      Gantt & Karr Formation Group<br />
                      123 Executive Plaza, Suite 400<br />
                      Charlotte, NC 28202
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">Ready to Start?</h4>
                  <Link href="/consultation">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
