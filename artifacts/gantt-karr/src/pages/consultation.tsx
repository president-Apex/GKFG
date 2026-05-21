import { useState } from "react";
import { SEO } from "@/components/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Disclaimer } from "@/components/disclaimer";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function Consultation() {
  const { toast } = useToast();
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentDisclaimer, setConsentDisclaimer] = useState(false);
  const [consentSms, setConsentSms] = useState(false);

  const canSubmit = consentTerms && consentDisclaimer;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    toast({
      title: "Consultation Request Received",
      description: "Our team has received your request and will be in touch shortly to confirm your time.",
    });
    (e.target as HTMLFormElement).reset();
    setConsentTerms(false);
    setConsentDisclaimer(false);
    setConsentSms(false);
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
                    <SelectItem value="start">I need to start / form a new business</SelectItem>
                    <SelectItem value="notary">I need notary services</SelectItem>
                    <SelectItem value="organize">I have a business but need it organized</SelectItem>
                    <SelectItem value="registered-agent">I need registered agent services (Missouri)</SelectItem>
                    <SelectItem value="boi">I need BOI reporting assistance</SelectItem>
                    <SelectItem value="ai">I am interested in Anna AI intake setup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tell us briefly about your business idea or current situation</label>
                <Textarea rows={4} placeholder="I am starting a consulting firm in North Carolina and need help with LLC formation and EIN..." />
              </div>

              {/* Consent Section */}
              <div className="border border-border rounded-xl p-5 space-y-4 bg-muted/30">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Consent & Acknowledgments</p>

                {/* Disclaimer acknowledgment — required */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consentDisclaimer}
                    onChange={(e) => setConsentDisclaimer(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                    required
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    <strong className="text-foreground">Required:</strong> I understand that Gantt & Karr Formation Group is not a law firm and does not provide legal, tax, accounting, or financial advice. I will consult a licensed professional for advice specific to my situation.{" "}
                    <Link href="/disclaimer" className="text-secondary hover:underline">Read our Disclaimer</Link>.
                  </span>
                </label>

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
                    <strong className="text-foreground">Optional — SMS Consent:</strong> By checking this box, you agree to receive text messages from Gantt & Karr Formation Group regarding your inquiry, appointments, business formation services, document updates, reminders, and related follow-up. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe at any time. Reply HELP for assistance. Your consent to receive text messages is not a condition of purchase. We do not sell or share your phone number for marketing purposes. View our{" "}
                    <Link href="/messaging-terms" className="text-secondary hover:underline">Messaging Terms</Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!canSubmit}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Request Consultation
              </Button>

              {!canSubmit && (
                <p className="text-xs text-muted-foreground text-center">
                  Please check the required boxes above to submit.
                </p>
              )}
            </form>
          </div>

          <div className="mt-10">
            <Disclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
