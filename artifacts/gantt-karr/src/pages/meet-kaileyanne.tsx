import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { personSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export default function MeetKaileyanne() {
  return (
    <>
      <SEO
        title="Meet Kaileyanne Karr | Gantt & Karr Formation Group"
        description="Kaileyanne Karr supports Gantt & Karr Formation Group through client assistance, document coordination, scheduling support, and notary services."
        image={`${SITE_URL}/gantt-karr/kaileyanne-karr.png`}
        schema={[
          personSchema({ name: "Kaileyanne Karr", jobTitle: "Business Support & Notary Specialist", description: "Kaileyanne Karr supports Gantt & Karr Formation Group through client assistance, document coordination, scheduling support, and notary services.", image: `${SITE_URL}/gantt-karr/kaileyanne-karr.png`, url: `${SITE_URL}/meet-kaileyanne` }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Meet Kaileyanne Karr", href: "/meet-kaileyanne" }]),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/about" className="text-secondary hover:text-primary-foreground text-sm font-semibold uppercase tracking-wider mb-10 inline-block">
            &larr; Back to About
          </Link>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-shrink-0">
              <img
                src="/gantt-karr/kaileyanne-karr.png"
                alt="Kaileyanne Karr"
                className="w-52 h-52 md:w-64 md:h-64 rounded-2xl object-cover object-top shadow-xl border-4 border-primary-foreground/10"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                Kaileyanne Karr
              </h1>
              <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-8">
                Business Support & Notary Specialist
              </p>
              <p className="text-primary-foreground/75 text-lg leading-relaxed max-w-2xl italic">
                "Dedicated to making every client feel welcomed, organized, and supported every step of the way."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p>
              Kaileyanne supports Gantt & Karr Formation Group through client assistance, document
              coordination, scheduling support, and notary services. She works closely with Founder
              Loresa Gantt to help clients feel welcomed, organized, and supported throughout the
              startup process.
            </p>
            <p>
              As she continues building her experience in business formation and entrepreneurship,
              Kaileyanne brings dedication, warmth, and attention to detail to the Gantt & Karr team.
            </p>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link href="/consultation">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Meet the Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
