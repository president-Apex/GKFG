import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { resourcesData } from "@/data/resources-data";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export default function ResourcesHub() {
  const resourceTypes = Object.keys(resourcesData).filter(k => k !== "professional-center");

  return (
    <>
      <SEO
        title="Professional Resources Center | Gantt Key Formation Group"
        description="Find licensed attorneys, CPAs, and business professionals through our curated Professional Resources Center — vetted partners for every stage of your business journey."
        schema={[
          itemListSchema({
            name: "Professional Resources Center",
            description: "Curated directory of licensed professionals supporting Gantt Key clients.",
            url: "/resources",
            items: resourceTypes.map((type) => ({
              name: resourcesData[type].title,
              url: `/resources/${type}`,
              description: resourcesData[type].description,
            })),
          }),
          breadcrumbSchema([{ name: "Resources", href: "/resources" }]),
        ]}
      />
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Professional Resources Center</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            {resourcesData["professional-center"].description}
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceTypes.map((type) => {
              const res = resourcesData[type];
              return (
                <Link key={type} href={`/resources/${type}`}>
                  <div className="block group p-8 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-lg transition-all h-full flex flex-col">
                    <h3 className="font-serif font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">{res.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{res.description}</p>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center">
                      Find a {res.expectedRole} <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-16 p-8 bg-muted rounded-2xl border border-border text-center">
            <h3 className="font-bold text-lg mb-2">Are you a licensed professional?</h3>
            <p className="text-muted-foreground mb-4">We are always looking to expand our network with trusted partners.</p>
            <Link href="/become-a-partner" className="text-secondary font-bold hover:underline">Apply to Join Our Professional Network</Link>
          </div>
        </div>
      </section>
    </>
  );
}
