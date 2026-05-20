import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { servicesData } from "@/data/services-data";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <SEO title={`${service.title} | Services`} description={service.description} />
      
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/services" className="text-secondary hover:text-white text-sm font-bold uppercase tracking-wider mb-8 inline-block">&larr; Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{service.description}</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border p-10 rounded-3xl shadow-sm mb-12">
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/consultation">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          <Disclaimer />
        </div>
      </section>
    </>
  );
}
