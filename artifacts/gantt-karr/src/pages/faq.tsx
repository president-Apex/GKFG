import { SEO } from "@/components/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions — Business Formation & Notary"
        description="Answers to common questions about LLC formation, corporation filing, EIN assistance, registered agents, notary services, and working with Gantt Key Formation Group."
        schema={[
          faqSchema([
            { q: "How long does it take to form an LLC?", a: "Processing times vary significantly by state. Some states process filings in a few business days, while others may take several weeks. We offer priority processing options and will give you a clear timeline estimate for your specific state during your consultation." },
            { q: "Do you provide legal or tax advice?", a: "No. Gantt Key Formation Group is a business formation service, not a law firm or CPA firm. We handle the administrative filing and document coordination. For specific legal or tax advice, we connect you with our Professional Network of licensed attorneys and CPAs." },
            { q: "What is a Registered Agent and do I need one?", a: "Yes, almost every state requires a formal business entity to have a Registered Agent. This is a person or service authorized to receive official state correspondence and legal notices on behalf of your business during normal business hours." },
            { q: "Are state filing fees included in your packages?", a: "No, our package prices cover our professional service fees. State filing fees are separate because they vary widely from state to state. We will provide an exact quote that includes your specific state's fees." },
            { q: "What is Anna AI and how does it help?", a: "Anna is our AI Intake Assistant. She helps route your inquiries to our team efficiently and allows you to book consultations 24/7. We also offer services to help you set up a similar AI intake system for your own business to capture leads around the clock." },
          ]),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]),
        ]}
      />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Clear answers to help you navigate the formation process.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-serif text-lg font-bold">How long does it take to form an LLC?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Processing times vary significantly by state. Some states process filings in a few business days, while others may take several weeks. We offer priority processing options and will give you a clear timeline estimate for your specific state during your consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-serif text-lg font-bold">Do you provide legal or tax advice?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                No. Gantt Key Formation Group is a business formation service, not a law firm or CPA firm. We handle the administrative filing and document coordination. For specific legal or tax advice, we connect you with our Professional Network of licensed attorneys and CPAs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-serif text-lg font-bold">What is a Registered Agent and do I need one?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes, almost every state requires a formal business entity to have a Registered Agent. This is a person or service authorized to receive official state correspondence and legal notices on behalf of your business during normal business hours. We coordinate this service for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-serif text-lg font-bold">Are state filing fees included in your packages?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                No, our package prices cover our professional service fees. State filing fees are separate because they vary widely from state to state (ranging from $50 to over $500). We will provide an exact quote that includes your specific state's fees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-serif text-lg font-bold">What is Anna AI and how does it help?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Anna is our AI Intake Assistant. She helps route your inquiries to our team efficiently and allows you to book consultations 24/7. We also offer services to help you set up a similar AI intake system for your own business to capture leads around the clock.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-20 p-10 bg-primary text-primary-foreground rounded-3xl text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Still have questions?</h3>
            <p className="text-primary-foreground/80 mb-8">We're happy to discuss your specific situation.</p>
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
