import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { locationsData, cityData } from "@/data/locations-data";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export default function LocationsHub() {
  return (
    <>
      <SEO
        title="Locations Served | Gantt Key Formation Group"
        description="Gantt Key Formation Group serves entrepreneurs across 20 states. Find your city and get local business formation support."
        schema={[
          itemListSchema({
            name: "Locations Served by Gantt Key Formation Group",
            description: "Business formation, notary, and startup support across key markets in 20 states.",
            url: "/locations",
            items: Object.entries(locationsData).flatMap(([stateSlug, state]) =>
              state.cities.map((citySlug) => ({
                name: `${cityData[citySlug].name}, ${state.name}`,
                url: `/locations/${stateSlug}/${citySlug}`,
              }))
            ),
          }),
          breadcrumbSchema([{ name: "Locations", href: "/locations" }]),
        ]}
      />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Locations We Serve</h1>
          <p className="text-xl text-muted-foreground">Premium business formation and notary support across key markets.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(locationsData).map(([stateSlug, state]) => (
              <div key={stateSlug} className="space-y-6">
                <Link href={`/locations/${stateSlug}`} className="block group">
                  <h2 className="text-2xl font-serif font-bold text-primary border-b border-border pb-3 mb-4 group-hover:text-secondary transition-colors">
                    {state.name}
                  </h2>
                </Link>
                <ul className="space-y-3">
                  {state.cities.map(citySlug => (
                    <li key={citySlug}>
                      <Link href={`/locations/${stateSlug}/${citySlug}`} className="text-muted-foreground hover:text-secondary font-medium flex items-center transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/20 mr-3" />
                        {cityData[citySlug].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
