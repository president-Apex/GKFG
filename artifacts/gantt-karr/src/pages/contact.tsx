import { useState } from "react";
import { SEO } from "@/components/seo";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Shield } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentSms, setConsentSms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentTerms) return;
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
    setConsentTerms(false);
    setConsentSms(false);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Gantt Key Formation Group. We're here to support your business journey — reach out with questions about formation, notary, or startup support."
        schema={[
          contactPageSchema(),
          breadcrumbSchema([{ name: "Contact", href: "/contact" }]),
        ]}
      />
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
                    <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">How can we help you? *</label>
                  <Textarea id="message" rows={5} required />
                </div>

                {/* Consent Section */}
                <div className="border border-border rounded-xl p-4 space-y-4 bg-muted/30">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Consent & Acknowledgments</p>

                  {/* Terms + Privacy — required */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={consentTerms}
                      onChange={(e) => setConsentTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                      required
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      <strong className="text-foreground">Required:</strong> I have read and agree to the{" "}
                      <Link href="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
                      I understand that Gantt Key Formation Group is not a law firm and does not provide legal, tax, or financial advice.
                    </span>
                  </label>

                  {/* SMS consent — optional */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={consentSms}
                      onChange={(e) => setConsentSms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      I agree to receive SMS text messages from Gantt Key Formation Group regarding my inquiry, appointments, service updates, account notifications, and related communications. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase.{" "}
                      <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
                      {" "}·{" "}
                      <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms & Conditions</Link>
                    </span>
                  </label>
                </div>

                <div className="bg-muted/50 border border-border rounded-xl p-4">
                  <p className="text-xs font-semibold text-foreground mb-1">Before You Submit</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gantt Key Formation Group provides business support and administrative services. We do not provide legal representation, legal advice, tax advice, or financial advice.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!consentTerms}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-primary-foreground p-10 rounded-2xl">
                <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-secondary mb-1 uppercase tracking-wider">Email</h4>
                      <a href="mailto:Info@ganttformation.com" className="text-lg hover:text-secondary transition-colors">Info@ganttformation.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-secondary mb-1 uppercase tracking-wider">Phone</h4>
                      <p className="text-lg">1-800-GANTT-KARR</p>
                      <p className="text-sm text-primary-foreground/60 mt-1">Available Mon–Fri, 9am–6pm CST</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-secondary mb-4 uppercase tracking-wider">Ready to Start?</h4>
                  <Link href="/consultation">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">Secure Document Submission</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Need to send us documents? Use our secure upload portal — no email attachments needed.
                </p>
                <Link href="/documents">
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10 text-sm">
                    Go to Secure Upload Portal →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
