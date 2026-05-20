import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "01",
    title: "Consult",
    desc: "Book a free startup consultation. We'll discuss your vision, evaluate your needs, and recommend the best formation path and service bundle for your specific goals."
  },
  {
    num: "02",
    title: "Document",
    desc: "We coordinate and prepare the necessary internal documentation, including your operating agreements and compliance checklists, ensuring everything is organized flawlessly."
  },
  {
    num: "03",
    title: "Form",
    desc: "We file your paperwork with the state, secure your EIN, coordinate your registered agent, and handle any required notarizations to legally establish your entity."
  },
  {
    num: "04",
    title: "Launch",
    desc: "With your foundation set, we help you implement operational systems like Anna AI for intake, set up your business phone, and connect you with our network of professionals for tax and legal needs."
  }
];

export default function HowItWorks() {
  return (
    <>
      <SEO title="How It Works | The Process" />
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">A clear path to launch.</h1>
          <p className="text-xl text-primary-foreground/80">Our four-step process takes the guesswork out of starting your business.</p>
        </div>
      </div>
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-6xl font-serif font-bold text-secondary/30 shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 bg-muted rounded-3xl text-center border border-border">
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Ready to begin?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need a simple LLC filing or a comprehensive launch package, the first step is a conversation.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/consultation">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
