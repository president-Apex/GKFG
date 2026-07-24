export interface CityData {
  slug: string;
  name: string;
  county: string;
  population: string;
  description: string;
  localNote: string;
  courthouse: string;
}

export const cities: CityData[] = [
  {
    slug: "kansas-city",
    name: "Kansas City",
    county: "Jackson County",
    population: "500,000+",
    description: "Missouri's largest city and the heart of the metro area",
    localNote: "Serving clients across all Kansas City neighborhoods including Midtown, Westport, the Plaza, River Market, and beyond.",
    courthouse: "Jackson County 16th Circuit Court",
  },
  {
    slug: "liberty",
    name: "Liberty",
    county: "Clay County",
    population: "32,000+",
    description: "Home base of Gantts Key Formation Group — fast local service",
    localNote: "As a Liberty-based company, we know every street and neighborhood. Same-day service is frequently available.",
    courthouse: "Clay County Circuit Court",
  },
  {
    slug: "independence",
    name: "Independence",
    county: "Jackson County",
    population: "120,000+",
    description: "One of the KC metro's largest and most active communities",
    localNote: "Serving Independence and surrounding Jackson County areas including Sugar Creek and Blue Summit.",
    courthouse: "Jackson County 16th Circuit Court (Independence Branch)",
  },
  {
    slug: "lees-summit",
    name: "Lee's Summit",
    county: "Jackson County",
    population: "100,000+",
    description: "Fast-growing KC suburb with high demand for legal support",
    localNote: "Serving Lee's Summit residential, commercial, and industrial areas throughout Jackson County.",
    courthouse: "Jackson County 16th Circuit Court",
  },
  {
    slug: "blue-springs",
    name: "Blue Springs",
    county: "Jackson County",
    population: "55,000+",
    description: "Eastern KC suburb — flat-rate metro pricing applies",
    localNote: "Blue Springs falls within our KC metro flat-rate zone. No mileage charges, predictable pricing.",
    courthouse: "Jackson County 16th Circuit Court",
  },
  {
    slug: "smithville",
    name: "Smithville",
    county: "Clay County",
    population: "11,000+",
    description: "Growing Clay County community north of Liberty",
    localNote: "Smithville is right in our backyard — Clay County expertise with fast turnaround.",
    courthouse: "Clay County Circuit Court",
  },
  {
    slug: "kearney",
    name: "Kearney",
    county: "Clay County",
    population: "12,000+",
    description: "Rapidly growing Clay County community",
    localNote: "Kearney and surrounding areas are served under our flat-rate KC metro pricing structure.",
    courthouse: "Clay County Circuit Court",
  },
  {
    slug: "plattsburg",
    name: "Plattsburg",
    county: "Clinton County",
    population: "2,400+",
    description: "Clinton County seat — rural Missouri pricing applies",
    localNote: "Plattsburg is served under our rural Missouri base + mileage model. Prepayment required for all rural serves.",
    courthouse: "Clinton County Circuit Court",
  },
  {
    slug: "gladstone",
    name: "Gladstone",
    county: "Clay County",
    population: "27,000+",
    description: "Established Clay County suburb bordering Kansas City",
    localNote: "Gladstone is fully within our KC metro service zone — flat-rate pricing, no mileage surcharges.",
    courthouse: "Clay County Circuit Court",
  },
  {
    slug: "parkville",
    name: "Parkville",
    county: "Platte County",
    population: "9,000+",
    description: "Scenic Platte County community along the Missouri River",
    localNote: "Parkville and greater Platte County are covered under our KC metro flat-rate pricing.",
    courthouse: "Platte County Circuit Court",
  },
  {
    slug: "lathrop",
    name: "Lathrop",
    county: "Clinton County",
    population: "2,200+",
    description: "Clinton County community — one of the few servers who makes the drive",
    localNote: "Most KC-area servers won't cover Lathrop. Gantts Key Formation Group does — base + mileage pricing, prepayment required.",
    courthouse: "Clinton County Circuit Court",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
