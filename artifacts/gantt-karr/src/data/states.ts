export type ServiceStatus = "available" | "coming-soon" | "by-request" | "late-2026";

export interface StateService {
  name: string;
  status: ServiceStatus;
  note?: string;
}

export interface StateReason {
  title: string;
  body: string;
}

export interface StateFaq {
  q: string;
  a: string;
}

export interface StateTestimonial {
  quote: string;
  attribution: string;
}

export interface StateData {
  slug: string;
  name: string;
  region: string;
  seoTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  trustBar: string[];
  cities: string[];
  citiesNote: string;
  services: StateService[];
  filingFacts: string[];
  callout: string;
  reasons: StateReason[];
  testimonial: StateTestimonial;
  faqs: StateFaq[];
  accentColor: string;
  showMoKsBadge?: boolean;
}

const stateList: StateData[] = [
  {
    slug: "missouri",
    name: "Missouri",
    region: "Kansas City Metro",
    seoTitle: "LLC Formation & Notary Services in Missouri | Gantt Key Formation Group",
    metaDescription: "Founded in Liberty, MO — GKFG helps Missouri entrepreneurs form LLCs, get EINs, and notarize documents. Same-day mobile notary and RON available across the KC metro and statewide.",
    heroLabel: "HOME STATE · MISSOURI",
    heroHeadline: "Missouri's Formation + Notary Team — Right in Your Backyard.",
    heroSubheadline: "From Liberty to Kansas City, Lee's Summit to St. Louis, we handle your LLC, EIN, registered agent, and notary — all in one place.",
    heroCta: "Start My Missouri LLC →",
    trustBar: ["$50 MO Filing Fee", "Same-Day RON Available", "Mobile Notary KC Metro", "Missouri Registered Agent"],
    cities: [
      "Kansas City", "Liberty", "Lee's Summit", "Independence", "Blue Springs", "Raytown",
      "Overland Park KS", "Shawnee KS", "Olathe KS", "Lenexa KS", "Leawood KS",
      "St. Louis", "Springfield", "Columbia", "Jefferson City", "Joplin", "O'Fallon",
    ],
    citiesNote: "Mobile notary available in-person in the KC metro and Liberty area. RON (online notarization) available statewide and in all 7 states we serve.",
    services: [
      { name: "LLC Formation", status: "available", note: "$50 MO state filing fee (separate)" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available" },
      { name: "DBA / Assumed Name", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Missouri Registered Agent", status: "available", note: "MO & KS Exclusive" },
      { name: "Mobile Notary — KC Metro", status: "available", note: "MO & KS Exclusive" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Statewide + all 7 states" },
      { name: "Loan Signing Agent", status: "available", note: "MO & KS Exclusive" },
      { name: "Startup Consultation (free)", status: "available" },
    ],
    filingFacts: [
      "State filing fee: $50 (Articles of Organization)",
      "Processing time: 1–3 business days online",
      "Annual report: NOT required (Missouri has no annual report for LLCs)",
      "Registered agent: Required — must have MO address",
      "Operating agreement: Not legally required but strongly recommended",
    ],
    callout: "Missouri is one of the most affordable states to form an LLC. No annual report, $50 filing fee, and quick online processing. We handle all of it.",
    reasons: [
      { title: "We're here.", body: "GKFG is founded and operated in Liberty, MO. We are your neighbors. We understand Missouri's 1% KC earnings tax, cross-border MO/KS business issues, and the Northland business community." },
      { title: "Mobile + Online.", body: "We hold active Missouri AND Kansas notary commissions. We can come to you in the KC metro, or meet you online via RON from anywhere in the state." },
      { title: "One stop.", body: "We file your LLC, get your EIN, notarize your documents, and serve as your registered agent. No juggling multiple vendors. One call, one team." },
    ],
    testimonial: {
      quote: "Loresa filed my LLC in two days and was at my kitchen table to notarize my operating agreement the same week. I didn't have to go anywhere or figure anything out. Worth every dollar.",
      attribution: "Marcus T., Kansas City MO · LLC Formation + Mobile Notary",
    },
    faqs: [
      { q: "How long does it take to form an LLC in Missouri?", a: "Most Missouri LLCs are processed within 1–3 business days when filed online. We handle the filing and notify you the moment it's active." },
      { q: "Does Missouri require an annual report for LLCs?", a: "No — Missouri is one of the few states with no annual LLC report requirement. Your LLC stays active as long as your registered agent information is current." },
      { q: "Can you notarize documents after business hours?", a: "Yes. Mobile notary is available until 9pm Monday–Saturday. RON (online) is available 24/7 through Anna AI booking." },
      { q: "Do you serve the Kansas side of Kansas City?", a: "Yes. We hold active notary commissions in both Missouri and Kansas. We cover the entire KC metro on both sides of the state line." },
    ],
    accentColor: "#C9A84C",
    showMoKsBadge: true,
  },
  {
    slug: "kansas",
    name: "Kansas",
    region: "KC Metro & Johnson County",
    seoTitle: "LLC Formation & Notary Services in Kansas | Gantt Key Formation Group",
    metaDescription: "GKFG serves Kansas entrepreneurs with LLC formation, EIN assistance, mobile notary, and RON in Overland Park, Shawnee, Olathe, and across Johnson County.",
    heroLabel: "KANSAS · KC METRO & JOHNSON COUNTY",
    heroHeadline: "Serving Both Sides of the State Line — Missouri and Kansas.",
    heroSubheadline: "One team, two states. We hold active notary commissions in both Missouri and Kansas — making us the only formation firm in the KC metro that covers the whole metro.",
    heroCta: "Start My Kansas LLC →",
    trustBar: ["$165 KS Filing Fee", "Mobile Notary Johnson County", "RON Available", "MO & KS Commission Held"],
    cities: [
      "Overland Park", "Shawnee", "Olathe", "Lenexa", "Leawood", "Prairie Village",
      "Merriam", "Mission", "Roeland Park", "Fairway", "Westwood", "De Soto",
      "Gardner", "Spring Hill", "Edgerton", "Lansing", "Leavenworth",
    ],
    citiesNote: "Mobile notary available in-person throughout Johnson County and the KS side of the KC metro. RON available for Kansas clients statewide.",
    services: [
      { name: "LLC Formation (Kansas)", status: "available", note: "$165 KS state filing fee (separate)" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Kansas Registered Agent", status: "coming-soon" },
      { name: "Mobile Notary — Johnson County", status: "available", note: "MO & KS Exclusive" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Must be physically in KS for KS RON" },
      { name: "Loan Signing Agent", status: "available", note: "MO & KS Exclusive" },
    ],
    filingFacts: [
      "State filing fee: $165 (Articles of Organization)",
      "Processing time: 2–5 business days online",
      "Annual report: Required — due by April 15 each year, $55 fee",
      "Registered agent: Required — must have KS address",
      "Cross-border note: Many KC businesses operate in both MO and KS — we can form in both",
    ],
    callout: "Kansas LLCs require an annual report (Missouri does not). We'll remind you every year so you never fall out of good standing.",
    reasons: [
      { title: "We cross the state line.", body: "Most formation services are Missouri-only. We hold an active Kansas notary commission and physically serve Johnson County. Drive to Overland Park? We're already there." },
      { title: "We understand the cross-border business.", body: "Operating in both MO and KS creates layered tax obligations. We connect you with our CPA partners who specialize in exactly this situation." },
      { title: "Same team, same trust.", body: "You don't need a different vendor on each side of State Line Road. GKFG is your one contact for formation, notary, and registered agent in both states." },
    ],
    testimonial: {
      quote: "I run my business out of Overland Park and needed documents notarized on a Thursday evening. Loresa was there within an hour. Didn't have to cross into Missouri or find a new notary.",
      attribution: "Priya S., Overland Park KS · Mobile Notary + Operating Agreement",
    },
    faqs: [
      { q: "Is Kansas LLC formation more expensive than Missouri?", a: "Yes — Kansas charges $165 vs. Missouri's $50. Kansas also requires an annual report ($55/year). We'll keep you informed of all costs upfront." },
      { q: "Can you notarize documents for Kansas clients online?", a: "Yes, using our Kansas RON commission. For Kansas RON sessions, we must be physically in Kansas during the notarization — which we are, regularly." },
      { q: "I'm already formed in Missouri — do I need a Kansas LLC too?", a: "Not necessarily. If you're operating in Kansas, you may only need to register your MO LLC as a foreign entity in KS (called a Certificate of Authority). We can advise you on the right path." },
    ],
    accentColor: "#C9A84C",
    showMoKsBadge: true,
  },
  {
    slug: "arizona",
    name: "Arizona",
    region: "Phoenix Metro",
    seoTitle: "LLC Formation & Notary Services in Arizona | Gantt Key Formation Group",
    metaDescription: "GKFG helps Arizona entrepreneurs in Phoenix, Scottsdale, Chandler, Gilbert, and Mesa form LLCs, get EINs, and access RON notarization. Formation + notary in one place.",
    heroLabel: "ARIZONA · PHOENIX METRO",
    heroHeadline: "Phoenix and Scottsdale Entrepreneurs — We're Building Here Too.",
    heroSubheadline: "GKFG is expanding to Arizona. Get your LLC formed, EIN secured, and documents notarized — online or in person — before the crowd catches on.",
    heroCta: "Start My Arizona LLC →",
    trustBar: ["$50 AZ Filing Fee", "No Annual Report Required", "RON Available", "Formation + Notary"],
    cities: [
      "Phoenix", "Scottsdale", "Chandler", "Gilbert", "Mesa", "Tempe",
      "Glendale", "Peoria", "Surprise", "Buckeye", "Goodyear", "Avondale",
      "Paradise Valley", "Fountain Hills", "Queen Creek", "Cave Creek",
    ],
    citiesNote: "RON (online notarization) available now for all Arizona clients. Mobile notary launching in the Phoenix/Scottsdale metro in late 2026.",
    services: [
      { name: "LLC Formation (Arizona)", status: "available", note: "$50 AZ state filing + publication fee" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available", note: "Via RON" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Arizona Statutory Agent", status: "coming-soon" },
      { name: "Mobile Notary — Phoenix Metro", status: "late-2026" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Available now, statewide" },
      { name: "Loan Signing Agent", status: "late-2026" },
    ],
    filingFacts: [
      "State filing fee: $50 (one of the lowest nationally)",
      "Publication requirement: Required within 60 days — $60–$300 for newspaper publication",
      "EXCEPTION: Not required if your statutory agent is in Maricopa or Pima County",
      "No annual report required (like Missouri — saves money every year)",
      "No franchise tax",
      "Processing time: 1–2 business days online",
    ],
    callout: "Arizona requires newspaper publication for new LLCs — UNLESS your statutory agent is in Maricopa or Pima County. We'll navigate this with you so you don't pay unnecessarily.",
    reasons: [
      { title: "We're coming to you.", body: "GKFG's founder is relocating to Scottsdale in December 2026. RON is available to all Arizona clients now. Mobile notary and in-person services launch in the Phoenix metro when we arrive." },
      { title: "We know the publication trap.", body: "Most Arizona entrepreneurs are blindsided by the publication requirement. We surface it upfront and help you avoid unnecessary costs." },
      { title: "One of the lowest-cost states to stay in business.", body: "No annual report, no franchise tax, $50 filing fee. We set you up right the first time so you keep more of what you earn." },
    ],
    testimonial: {
      quote: "I needed my operating agreement notarized online before opening my business bank account. GKFG got it done in the same day over video. Didn't have to leave Scottsdale.",
      attribution: "David P., Scottsdale AZ · RON + EIN Assistance",
    },
    faqs: [
      { q: "What is Arizona's publication requirement?", a: "New Arizona LLCs must publish a notice of formation in a local newspaper for three consecutive weeks within 60 days of formation. This costs $60–$300 depending on the publication. If your statutory agent has a Maricopa or Pima County address, this requirement is waived. We explain this clearly before you pay anything." },
      { q: "Can I get notarized documents online from Arizona?", a: "Yes — RON is available now. Your documents are notarized via secure video call and delivered electronically." },
      { q: "When will in-person mobile notary be available in Phoenix?", a: "We're building toward full mobile service in the Phoenix/Scottsdale metro in late 2026. Sign up for early access via Anna AI and we'll notify you the moment we launch." },
    ],
    accentColor: "#D97706",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    region: "Nashville Metro",
    seoTitle: "LLC Formation & Notary Services in Tennessee | Gantt Key Formation Group",
    metaDescription: "GKFG helps Nashville, Franklin, and Murfreesboro entrepreneurs form LLCs, get EINs, and access same-day RON notarization. Formation and notary in one place.",
    heroLabel: "TENNESSEE · NASHVILLE METRO",
    heroHeadline: "Nashville Is Booming. Your Business Should Be Too.",
    heroSubheadline: "Tennessee entrepreneurs get more with GKFG — LLC formation, EIN assistance, notary services, and online RON. No law firm fees. No faceless portals. Just real support.",
    heroCta: "Start My Tennessee LLC →",
    trustBar: ["$300 TN Filing Fee", "No State Income Tax", "RON Available", "Formation + Notary"],
    cities: [
      "Nashville", "Franklin", "Murfreesboro", "Brentwood", "Spring Hill",
      "Smyrna", "Hendersonville", "Clarksville", "Gallatin", "Lebanon",
      "Nolensville", "Mt. Juliet", "Goodlettsville", "Antioch",
    ],
    citiesNote: "RON (online notarization) available now for all Tennessee clients. Mobile notary available by appointment in the greater Nashville metro.",
    services: [
      { name: "LLC Formation (Tennessee)", status: "available", note: "$300 TN state filing fee (separate)" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Up to $25/session" },
      { name: "Loan Signing Agent", status: "by-request", note: "Contact Anna AI" },
      { name: "Startup Consultation (free)", status: "available" },
    ],
    filingFacts: [
      "State filing fee: $300 (higher than most — plan for it)",
      "Processing time: 3–5 business days online",
      "Annual report: Required — due by April 1 each year, $300 fee",
      "No state income tax on wages (major advantage for business owners)",
      "Franchise & Excise Tax: LLCs doing business in TN may owe this — consult a TN CPA",
    ],
    callout: "Tennessee has no state income tax on wages — a major reason entrepreneurs are flooding into Nashville. But the Franchise & Excise Tax catches many new business owners off guard. We'll make sure you know what's coming before you file.",
    reasons: [
      { title: "Nashville is our kind of market.", body: "Music City's entrepreneurial explosion means thousands of new businesses forming every year. We serve creative professionals, healthcare entrepreneurs, contractors, and service businesses — all at GKFG's transparent flat rates." },
      { title: "RON is active.", body: "Tennessee was one of the first states to authorize RON (2019). We can notarize your documents online same-day from anywhere in the state." },
      { title: "No legal jargon.", body: "TN entrepreneurs often get tripped up by the Franchise & Excise Tax, annual report fees, and the $300 filing cost. We explain everything before you commit." },
    ],
    testimonial: {
      quote: "I was starting a healthcare consulting practice in Nashville and needed an LLC fast. GKFG had it filed in three days and my operating agreement notarized online the same afternoon.",
      attribution: "Nicole M., Nashville TN · RON + LLC Formation",
    },
    faqs: [
      { q: "Why is Tennessee's filing fee so high?", a: "Tennessee charges $300 to file an LLC — one of the highest in the country. It also charges $300 annually to renew. We always disclose this before you start so there are no surprises." },
      { q: "What is Tennessee's Franchise & Excise Tax?", a: "Tennessee LLCs doing business in the state owe both a franchise tax (based on net worth) and an excise tax (based on net earnings). This is separate from the filing fee and is managed through your annual tax filings. We connect you with our Tennessee CPA partners who handle this." },
      { q: "Can I get documents notarized online in Tennessee?", a: "Yes — Tennessee has full RON authorization. Online notarizations through GKFG are available same-day and up to $25 per session." },
    ],
    accentColor: "#166534",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    region: "Charlotte Metro",
    seoTitle: "LLC Formation & Notary Services in North Carolina | Gantt Key Formation Group",
    metaDescription: "GKFG serves Charlotte, Concord, Huntersville, and the greater NC area with LLC formation, EIN assistance, and RON online notarization. Transparent pricing, no surprises.",
    heroLabel: "NORTH CAROLINA · CHARLOTTE METRO",
    heroHeadline: "Charlotte's Growing Fast. Your LLC Should Be Ready.",
    heroSubheadline: "North Carolina entrepreneurs — GKFG files your LLC, secures your EIN, and notarizes your documents online. Flat-rate pricing with no hidden fees.",
    heroCta: "Start My North Carolina LLC →",
    trustBar: ["$128 NC Filing Fee", "79.5% Business Survival Rate", "RON Available", "Formation + Notary"],
    cities: [
      "Charlotte", "Concord", "Huntersville", "Mooresville", "Gastonia",
      "Matthews", "Monroe", "Kannapolis", "Rock Hill SC", "Indian Trail",
      "Pineville", "Mint Hill", "Cornelius", "Davidson", "Waxhaw",
    ],
    citiesNote: "RON available now for all NC clients. Mobile notary by appointment in the Charlotte metro.",
    services: [
      { name: "LLC Formation (NC)", status: "available", note: "$128 NC state filing fee (separate)" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Up to $25/signature" },
      { name: "Loan Signing Agent", status: "by-request" },
      { name: "Startup Consultation (free)", status: "available" },
    ],
    filingFacts: [
      "State filing fee: $128 (Articles of Organization)",
      "Processing time: 3–5 business days",
      "Annual report: Required — due by April 15, $202 fee",
      "Business survival rate: 79.5% — among the highest in the country",
      "NC was CNBC's #1 Top State for Business (2023)",
      "Corporate tax rate: 2.25% (dropping annually through 2030)",
    ],
    callout: "North Carolina has a 79.5% small business survival rate — one of the highest in the country. Starting here is already a smart move. We make sure you start it right.",
    reasons: [
      { title: "Charlotte is our kind of city.", body: "Nearly 40,000 net new jobs added in 2025–2026, outpacing Nashville, Atlanta, and Austin. New businesses are forming daily. GKFG is ready for all of them." },
      { title: "We know NC's RON rules.", body: "NC charges up to $25/signature for RON — among the highest in the country. We price to the market, not the minimum, and deliver premium service." },
      { title: "We always advise on travel.", body: "NC requires mileage-based travel fees to be agreed in writing before any mobile notary visit. We handle that paperwork automatically." },
    ],
    testimonial: {
      quote: "I launched a consulting firm in Charlotte and needed documents notarized before my first client signed. GKFG did the whole thing over video in 20 minutes.",
      attribution: "Amanda S., Charlotte NC · RON + Operating Agreement",
    },
    faqs: [
      { q: "How much does it cost to form an LLC in North Carolina?", a: "North Carolina charges $128 to file your Articles of Organization, plus $202 per year for the annual report. We always give you the full cost picture upfront." },
      { q: "Can wills or trusts be notarized online in NC?", a: "No — North Carolina prohibits RON for wills, trusts, advance healthcare directives, and absentee ballots. All other documents can be notarized online." },
      { q: "Do you serve South Carolina clients from Charlotte?", a: "We can serve SC clients via RON using our Missouri commission. For in-person mobile notary in SC, contact us for availability." },
    ],
    accentColor: "#1D4ED8",
  },
  {
    slug: "georgia",
    name: "Georgia",
    region: "Atlanta Metro",
    seoTitle: "LLC Formation & Notary Services in Georgia | Gantt Key Formation Group",
    metaDescription: "GKFG helps Atlanta, Alpharetta, and Marietta entrepreneurs form LLCs, get EINs, and access notary services. Georgia's RON gap? We've got a compliant solution.",
    heroLabel: "GEORGIA · ATLANTA METRO",
    heroHeadline: "Atlanta Entrepreneurs — Launch Compliant, Launch Confident.",
    heroSubheadline: "Georgia's booming startup scene deserves a formation partner who knows the rules. GKFG handles your LLC, EIN, notary, and more — with full transparency on Georgia's unique requirements.",
    heroCta: "Start My Georgia LLC →",
    trustBar: ["$100 GA Filing Fee", "Formation + Notary", "Compliance-First", "Atlanta + Suburbs"],
    cities: [
      "Atlanta", "Alpharetta", "Marietta", "Roswell", "Sandy Springs",
      "Smyrna", "Kennesaw", "Woodstock", "Canton", "Duluth",
      "Peachtree City", "Newnan", "Stockbridge", "Decatur", "Johns Creek",
    ],
    citiesNote: "RON for Georgia clients is performed via our Missouri commission under interstate recognition law. All RON notarizations are valid in Georgia. Mobile notary by appointment in the Atlanta metro.",
    services: [
      { name: "LLC Formation (Georgia)", status: "available", note: "$100 GA state filing fee (separate)" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available", note: "In-person or via RON (see note)" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "Via MO commission — valid in GA" },
      { name: "Loan Signing Agent", status: "by-request", note: "Atlanta metro" },
      { name: "Startup Consultation (free)", status: "available" },
    ],
    filingFacts: [
      "State filing fee: $100 (Articles of Organization)",
      "Processing time: 7–10 business days (longer than most states)",
      "Annual registration: Required — due April 1, $50 fee",
      "RON status: Georgia does NOT have its own RON law (as of 2026)",
      "HOWEVER: Georgia recognizes RON performed under another state's law",
      "GKFG performs Georgia RON via our Missouri commission, valid under GA interstate recognition statutes",
      "Fee cap: $2/notarial act — GKFG travel and service fees are disclosed and charged separately",
    ],
    callout: "Georgia doesn't have its own RON law — but that doesn't mean you can't get documents notarized online. Georgia recognizes notarizations performed under Missouri's RON law. GKFG uses our Missouri commission to serve Georgia clients online, fully legally.",
    reasons: [
      { title: "We solved the Georgia RON problem.", body: "Most notaries tell Georgia clients 'we can't do that online.' GKFG does — legally — using Missouri interstate recognition. We're one of the only formation firms who know and offer this." },
      { title: "Atlanta's startup ecosystem is exploding.", body: "Fintech, logistics, health tech — Georgia is one of the fastest-growing states for new businesses. We're here for all of them." },
      { title: "Compliance-first, always.", body: "Georgia's $2/act notary cap and annual registration requirements trip up new businesses. We surface every cost before you commit." },
    ],
    testimonial: {
      quote: "I didn't know online notarization was even possible in Georgia. GKFG explained the interstate recognition law and had my docs notarized over video the same afternoon. Legitimate, compliant, and fast.",
      attribution: "Carla K., Atlanta GA · RON + LLC Formation",
    },
    faqs: [
      { q: "Can documents be notarized online in Georgia?", a: "Georgia doesn't have its own RON law, but it recognizes notarizations performed under another state's law. GKFG performs your RON using our Missouri commission — fully valid in Georgia under O.C.G.A. §§ 44-2-21 and related statutes. Always confirm with your receiving party that they accept electronically notarized documents." },
      { q: "How long does Georgia LLC formation take?", a: "Georgia processes online filings in 7–10 business days — longer than most states. Plan accordingly, especially if you need your LLC active before signing a contract or opening a bank account." },
      { q: "What is Georgia's annual registration fee?", a: "Georgia LLCs must file an annual registration by April 1 each year and pay a $50 fee. Missing this can result in administrative dissolution." },
    ],
    accentColor: "#B91C1C",
  },
  {
    slug: "montana",
    name: "Montana",
    region: "Missoula · Bozeman · Statewide",
    seoTitle: "LLC Formation & Notary Services in Montana | Gantt Key Formation Group",
    metaDescription: "GKFG helps Montana entrepreneurs and out-of-state investors form Montana LLCs, get EINs, and access RON notarization online. $35 filing fee. No sales tax.",
    heroLabel: "MONTANA · MISSOULA · BOZEMAN · STATEWIDE",
    heroHeadline: "The $35 LLC State — Set Up Right Before the Rules Change.",
    heroSubheadline: "Montana's low filing fee, no sales tax, and privacy-friendly laws make it one of the smartest states to form a business. GKFG handles your Montana LLC from anywhere in the country.",
    heroCta: "Start My Montana LLC →",
    trustBar: ["$35 MT Filing Fee", "No Sales Tax", "RON Available", "Out-of-State Investors Welcome"],
    cities: [
      "Missoula", "Bozeman", "Billings", "Great Falls", "Helena",
      "Kalispell", "Whitefish", "Butte", "Havre", "Livingston",
      "Big Fork", "Flathead Valley", "Bozeman Suburbs", "Gallatin Valley",
    ],
    citiesNote: "Montana formation is available to clients nationwide — you do not need to be a Montana resident to form a Montana LLC. RON available for all Montana clients online.",
    services: [
      { name: "LLC Formation (Montana)", status: "available", note: "$35 MT state filing fee — lowest nationally" },
      { name: "S-Corp / C-Corp Filing", status: "available" },
      { name: "EIN Assistance", status: "available" },
      { name: "Operating Agreement (notarized)", status: "available" },
      { name: "DBA Filing", status: "available" },
      { name: "BOI Reporting", status: "available", note: "Domestic MT LLCs currently exempt" },
      { name: "Remote Online Notarization (RON)", status: "available", note: "MT RON available — \"reasonable fee\"" },
      { name: "RIN (Remote Ink Notarization)", status: "available", note: "Paper documents signed remotely" },
      { name: "Startup Consultation (free)", status: "available" },
    ],
    filingFacts: [
      "State filing fee: $35 (lowest in the country)",
      "Processing time: 5–6 business days standard (expedited 24-hr for +$20)",
      "Annual report: Required — due April 15, $20 fee ($35 if late)",
      "No statewide sales tax (major advantage for product businesses)",
      "BOI status: As of March 2025, domestic MT LLCs are EXEMPT from BOI reporting",
      "Montana LLC popular with: real estate investors, out-of-state entrepreneurs, RV/vehicle registrations",
    ],
    callout: "Montana LLCs are popular with out-of-state investors and entrepreneurs for their low fees, no sales tax, and privacy protections. We form Montana LLCs for clients in all 50 states.",
    reasons: [
      { title: "We serve Montana clients nationwide.", body: "You don't need to live in Montana to form a Montana LLC. GKFG handles everything remotely for investors and entrepreneurs across the country who want Montana's advantages." },
      { title: "RON and RIN both available.", body: "Montana uniquely offers both RON (electronic docs) and RIN (Remote Ink Notarization for paper documents). We're equipped for both." },
      { title: "We know the real cost.", body: "$35 to file + $20/year annual report. That's it. No franchise tax. No hidden fees. We give you the full picture." },
    ],
    testimonial: {
      quote: "I'm a real estate investor in Kansas City and needed a Montana LLC for a vehicle. GKFG handled the whole thing remotely — filing, EIN, operating agreement — without me leaving my house.",
      attribution: "Real Estate Investor Client · Montana LLC Formation",
    },
    faqs: [
      { q: "Do I need to live in Montana to form a Montana LLC?", a: "No. Non-residents can form Montana LLCs. You must have a Montana registered agent with a physical address. GKFG can assist with the formation and connect you with registered agent services." },
      { q: "Why do people form Montana LLCs if they don't live there?", a: "Montana's $35 filing fee, no sales tax, and privacy-friendly statutes make it appealing for real estate investors, vehicle registrations, and out-of-state entrepreneurs who want low ongoing costs." },
      { q: "Is RON available for Montana documents?", a: "Yes — Montana has authorized RON since 2019. Montana also allows RIN (Remote Ink Notarization) for clients who need wet ink signatures on paper documents notarized remotely." },
    ],
    accentColor: "#065F46",
  },
];

export const stateData: Record<string, StateData> = Object.fromEntries(
  stateList.map((s) => [s.slug, s])
);

export const allStates = stateList;
