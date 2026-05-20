import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MeetAnna() {
  return (
    <>
      <SEO title="Meet Anna - AI Intake Assistant" />
      
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-6 uppercase tracking-wider">
            24/7 Digital Assistant
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Meet Anna.</h1>
          <p className="text-xl text-primary-foreground/80">Your seamless first step into the Gantt & Karr experience.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Intelligent, polished, and always available.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Anna is our proprietary AI Intake Assistant, designed to provide you with immediate support, route your inquiries to the right team member, and help you schedule consultations without delay.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>24/7 Appointment Booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Initial Service Routing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Basic FAQ Resolution</span>
                </li>
              </ul>
              <Link href="/consultation">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Book with Anna Now
                </Button>
              </Link>
            </div>
            <div className="bg-muted p-12 rounded-3xl border border-border flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
               <div className="w-48 h-48 rounded-full bg-white shadow-2xl flex items-center justify-center z-10">
                 <span className="text-5xl font-serif font-bold text-primary">A.</span>
               </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mb-12">
            <h3 className="font-serif font-bold text-2xl mb-4 text-primary">We also set up Anna for your business.</h3>
            <p className="text-muted-foreground mb-6">
              Love the seamless experience Anna provides? We offer AI Intake Setup as a service to our clients, helping you implement an intelligent assistant for your own growing business.
            </p>
            <Link href="/services/anna-ai-intake">
              <Button variant="outline">Learn About AI Intake Setup</Button>
            </Link>
          </div>

          <Disclaimer />
        </div>
      </section>
    </>
  );
}
