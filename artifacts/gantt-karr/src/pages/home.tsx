import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-6 uppercase tracking-wider">
                Premium Business Setup
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                Build your legacy with confidence.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
                Family-led business formation, notary services, and startup support—powered by Anna AI. We handle the setup so you can focus on the vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/how-it-works">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8 text-base">
                    Start My Business Setup
                  </Button>
                </Link>
                <Link href="/consultation">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto h-14 px-8 text-base">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">A boutique executive experience for modern entrepreneurs.</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Starting a business is a monumental step. Gantt & Karr provides the polished, trustworthy foundation you need. From filing your LLC to structuring your operations with Anna AI, we offer a personal, feminine executive touch to the formation process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-serif font-bold text-xl">1</div>
              <h3 className="font-bold text-xl mb-3">Consult & Plan</h3>
              <p className="text-muted-foreground">Strategic guidance to determine the right structure and steps for your unique vision.</p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-serif font-bold text-xl">2</div>
              <h3 className="font-bold text-xl mb-3">Form & Organize</h3>
              <p className="text-muted-foreground">We handle the paperwork, filings, and essential registrations with precision.</p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-serif font-bold text-xl">3</div>
              <h3 className="font-bold text-xl mb-3">Launch & Grow</h3>
              <p className="text-muted-foreground">Ongoing support, AI intake setup, and professional resources to fuel your success.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
