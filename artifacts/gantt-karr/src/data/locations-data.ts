export const locationsData: Record<string, { name: string; info: string; animal?: string; fruit?: string; cities: string[] }> = {
  "missouri": {
    name: "Missouri",
    info: "The Show-Me State offers a robust environment for entrepreneurs. We provide comprehensive business formation support across Missouri.",
    animal: "Missouri Mule",
    fruit: "Norton/Cynthiana Grape",
    cities: ["kansas-city", "liberty", "st-louis"]
  },
  "arizona": {
    name: "Arizona",
    info: "The Grand Canyon State is a booming hub for innovation. Let us help you establish your business in Arizona's dynamic market.",
    cities: ["phoenix", "scottsdale", "chandler"]
  },
  "north-carolina": {
    name: "North Carolina",
    info: "A top destination for business, North Carolina provides incredible opportunities for startups and established companies alike.",
    cities: ["charlotte", "raleigh", "durham"]
  },
  "georgia": {
    name: "Georgia",
    info: "The Peach State is recognized globally for its business-friendly climate. We support entrepreneurs across Georgia.",
    cities: ["atlanta", "alpharetta", "savannah"]
  },
  "tennessee": {
    name: "Tennessee",
    info: "With no state income tax, Tennessee is a magnet for ambitious founders. Let's build your foundation here.",
    cities: ["nashville", "franklin", "knoxville"]
  }
};

export const cityData: Record<string, { name: string; context: string }> = {
  "kansas-city": { name: "Kansas City", context: "A vibrant market bridging two states, perfect for innovative startups." },
  "liberty": { name: "Liberty", context: "A growing community with a strong focus on local, family-owned businesses." },
  "st-louis": { name: "St. Louis", context: "Rich in history and ripe with opportunities for new ventures." },
  "phoenix": { name: "Phoenix", context: "One of the fastest-growing cities for tech and service businesses." },
  "scottsdale": { name: "Scottsdale", context: "A premium market ideal for luxury, boutique, and consulting services." },
  "chandler": { name: "Chandler", context: "An innovation hub with a highly skilled workforce." },
  "charlotte": { name: "Charlotte", context: "A major financial center offering a massive network for new businesses." },
  "raleigh": { name: "Raleigh", context: "Part of the Research Triangle, drawing top talent and bold ideas." },
  "durham": { name: "Durham", context: "A diverse and creative city, perfect for unique startups." },
  "atlanta": { name: "Atlanta", context: "The economic engine of the Southeast, bustling with entrepreneurial energy." },
  "alpharetta": { name: "Alpharetta", context: "Known as the Technology City of the South." },
  "savannah": { name: "Savannah", context: "A historic coastal city with a thriving logistics and tourism market." },
  "nashville": { name: "Nashville", context: "Beyond music, a rapidly expanding center for healthcare and tech." },
  "franklin": { name: "Franklin", context: "A wealthy, fast-growing suburb ideal for premium services." },
  "knoxville": { name: "Knoxville", context: "A strong community-focused market with a loyal local customer base." }
};
