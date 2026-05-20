import { SEO } from "@/components/seo";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { locationsData, cityData } from "@/data/locations-data";
import NotFound from "@/pages/not-found";

export default function LocationDetail() {
  const { state, city } = useParams();
  
  const stateInfo = state ? locationsData[state] : null;
  const cityInfo = city ? cityData[city] : null;

  if (!stateInfo) return <NotFound />;
  if (city && !cityInfo) return <NotFound />;

  const title = city ? `${cityInfo.name}, ${stateInfo.name}` : stateInfo.name;
  const context = city ? cityInfo.context : stateInfo.info;

  return (
    <>
      <SEO title={`Business Formation in ${title}`} />
      
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/locations" className="text-secondary hover:text-white text-sm font-bold uppercase tracking-wider mb-8 inline-block">&larr; All Locations</Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Business Formation in {title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">{context}</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {!city && stateInfo.animal && stateInfo.fruit && (
            <div className="bg-muted border border-border p-8 rounded-2xl mb-12 flex flex-col md:flex-row gap-8 justify-around text-center">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1 block">State Animal</span>
                <span className="text-xl font-serif text-primary font-bold">{stateInfo.animal}</span>
              </div>
              <div className="hidden md:block w-px bg-border" />
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1 block">State Fruit</span>
                <span className="text-xl font-serif text-primary font-bold">{stateInfo.fruit}</span>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary">Establishing your business in {title}</h2>
            <p>
              Whether you are launching a new startup, formalizing a side hustle, or structuring an established venture, proper formation is critical. Our team provides dedicated, polished support to entrepreneurs in {title}.
            </p>
            <p>
              We handle the administrative complexities—from state filings and registered agent coordination to securing your EIN and organizing your operating agreements. With Gantt & Karr, you receive a boutique executive experience tailored to your needs.
            </p>
            
            <h3 className="font-serif text-2xl font-bold mt-8">Services available in {title}</h3>
            <ul>
              <li>LLC and Corporation Formation Filings</li>
              <li>Professional Notary Services</li>
              <li>Startup Consultation & Strategy</li>
              <li>Document Preparation and Organization</li>
              <li>AI Intake Setup with Anna</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Link href="/how-it-works">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto h-14 px-8">
                Start My Business Setup
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {city && (
            <div className="bg-muted p-8 rounded-2xl border border-border text-center mb-16">
              <h3 className="font-bold text-lg mb-2">Looking for local professionals?</h3>
              <p className="text-muted-foreground mb-4">Connect with attorneys, CPAs, and experts serving {title}.</p>
              <Link href="/resources/professional-center">
                <Button variant="outline">Visit Professional Center</Button>
              </Link>
            </div>
          )}

          <Disclaimer />
        </div>
      </section>
    </>
  );
}
