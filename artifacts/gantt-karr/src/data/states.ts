export interface StateFilingFees {
  llcFormation: string;
  annualReport: string;
  dbaFee: string;
  foreignLlc: string;
  nameReservation: string;
  gkfgStarterFee: string;
  totalStarter: string;
}

export interface StateFaq {
  q: string;
  a: string;
}

export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  region: string;
  accentColor: string;
  seoTitle: string;
  metaDescription: string;
  heroSubheadline: string;
  fees: StateFilingFees;
  /** GKFG provides registered agent service directly (Missouri only). */
  registeredAgent: boolean;
  /** In-person mobile notary available (MO & KS only). */
  mobileNotary: boolean;
  /** Loan signing agent available (MO & KS only). */
  loanSigning: boolean;
  /** Headline marketing point — rendered as the state callout. */
  keySellingPoint: string;
  /** Honest operational/compliance note for the state. */
  specialNote: string;
  /** Slugs of 2–3 related states for cross-linking. */
  neighbors: string[];
  /** Marks the MO/KS home-market pair. */
  showMoKsBadge?: boolean;
}

const stateList: StateData[] = [
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    region: "Kansas City Metro — Home State",
    accentColor: "#C9A84C",
    seoTitle: "Missouri LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Missouri LLC with GKFG — our home state. $50 state filing fee, no annual report, registered agent, mobile notary, and RON across the KC metro and statewide.",
    heroSubheadline:
      "Missouri is our home. From Liberty to Kansas City, we handle your LLC, EIN, registered agent, and notary — all in one place, with same-day mobile notary across the metro.",
    fees: {
      llcFormation: "$50 online ($105 by mail)",
      annualReport: "None — Missouri has no annual report",
      dbaFee: "$7 (renews every 5 years)",
      foreignLlc: "$105",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: true,
    mobileNotary: true,
    loanSigning: true,
    keySellingPoint:
      "Missouri is one of only four states with no annual LLC report or fee. Form once, maintain it for free — combined with a $50 filing fee, it's one of the most affordable states in the country.",
    specialNote:
      "Missouri is GKFG's home state. We're founded and operated in Liberty, MO, and serve the entire Kansas City metro in person.",
    neighbors: ["kansas", "iowa", "kentucky"],
    showMoKsBadge: true,
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    region: "KC Metro & Johnson County",
    accentColor: "#C9A84C",
    seoTitle: "Kansas LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Kansas LLC with GKFG. We hold active Missouri and Kansas notary commissions and serve Overland Park, Shawnee, Olathe, and all of Johnson County.",
    heroSubheadline:
      "One team, both sides of the state line. We hold active notary commissions in Missouri and Kansas — covering the whole KC metro for formation, mobile notary, and RON.",
    fees: {
      llcFormation: "$160",
      annualReport: "$55 / year",
      dbaFee: "$35",
      foreignLlc: "$165",
      nameReservation: "$35",
      gkfgStarterFee: "$297",
      totalStarter: "$457",
    },
    registeredAgent: false,
    mobileNotary: true,
    loanSigning: true,
    keySellingPoint:
      "Kansas is a low-regulation state with a straightforward formation process — a strong choice for the many KC businesses that operate across the MO/KS border.",
    specialNote:
      "Kansas City spans both states, so many GKFG clients operate in both MO and KS. We provide registered agent service through a vetted Kansas partner referral.",
    neighbors: ["missouri", "colorado", "iowa"],
    showMoKsBadge: true,
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    region: "Phoenix Metro",
    accentColor: "#D97706",
    seoTitle: "Arizona LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Arizona LLC with GKFG. $50 filing fee, no annual report, and RON available statewide for Phoenix, Scottsdale, Chandler, Gilbert, and Mesa entrepreneurs.",
    heroSubheadline:
      "Phoenix and Scottsdale entrepreneurs — get your LLC formed, EIN secured, and documents notarized online. One of the lowest-cost states to start and stay in business.",
    fees: {
      llcFormation: "$50",
      annualReport: "None — Arizona has no annual report",
      dbaFee: "$10",
      foreignLlc: "$150",
      nameReservation: "$10",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Arizona has no annual report fee — one of the most affordable states for long-term LLC maintenance, with the same low ongoing cost as Missouri.",
    specialNote:
      "Arizona requires newspaper publication for new LLCs unless your statutory agent is in Maricopa or Pima County. We surface this upfront so you don't overpay.",
    neighbors: ["new-mexico", "nevada", "colorado"],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    region: "Nashville Metro",
    accentColor: "#166534",
    seoTitle: "Tennessee LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Tennessee LLC with GKFG. Serving Nashville, Franklin, and Murfreesboro with LLC formation, EIN assistance, and same-day RON. No state income tax.",
    heroSubheadline:
      "Nashville is booming. Tennessee entrepreneurs get more with GKFG — LLC formation, EIN assistance, and online RON, with full transparency on TN's higher fees.",
    fees: {
      llcFormation: "$325",
      annualReport: "$310 / year",
      dbaFee: "$20",
      foreignLlc: "$300",
      nameReservation: "$20",
      gkfgStarterFee: "$297",
      totalStarter: "$622",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Tennessee has no personal income tax and is one of the fastest-growing business markets in the country, anchored by Nashville's explosive growth.",
    specialNote:
      "Tennessee's filing and annual fees are higher than most states — budget about $310/year for ongoing compliance. LLCs may also owe Franchise & Excise Tax; we connect you with TN CPA partners.",
    neighbors: ["georgia", "north-carolina", "kentucky"],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    region: "Charlotte Metro",
    accentColor: "#1D4ED8",
    seoTitle: "North Carolina LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your North Carolina LLC with GKFG. Serving Charlotte, Concord, and Huntersville with LLC formation, EIN assistance, and RON. Transparent, flat-rate pricing.",
    heroSubheadline:
      "Charlotte is growing fast. GKFG files your LLC, secures your EIN, and notarizes your documents online — flat-rate pricing with no hidden fees.",
    fees: {
      llcFormation: "$125",
      annualReport: "$200 / year",
      dbaFee: "$26",
      foreignLlc: "$250",
      nameReservation: "$30",
      gkfgStarterFee: "$297",
      totalStarter: "$422",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "North Carolina is one of the Southeast's fastest-growing business states, with Charlotte ranking as a top financial-services hub and one of the highest small-business survival rates in the country.",
    specialNote:
      "North Carolina's annual report is due April 15 each year. We file it for you so you never fall out of good standing.",
    neighbors: ["south-carolina", "georgia", "virginia"],
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    region: "Atlanta Metro",
    accentColor: "#B45309",
    seoTitle: "Georgia LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Georgia LLC with GKFG. Serving Atlanta, Alpharetta, and Marietta with LLC formation, EIN assistance, and compliant RON notarization via interstate recognition.",
    heroSubheadline:
      "Atlanta entrepreneurs — launch compliant, launch confident. GKFG handles your LLC, EIN, and notary with full transparency on Georgia's unique requirements.",
    fees: {
      llcFormation: "$100",
      annualReport: "$50 / year",
      dbaFee: "$25",
      foreignLlc: "$225",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$397",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Georgia is a major Southeast hub for business formation. Atlanta is one of the top markets in the country for small-business growth.",
    specialNote:
      "Georgia does not have its own RON law, but recognizes RON performed under another state's law. GKFG performs Georgia RON via our Missouri commission, valid under GA interstate recognition statutes.",
    neighbors: ["tennessee", "florida", "south-carolina"],
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    region: "Austin · Dallas · Houston",
    accentColor: "#BE123C",
    seoTitle: "Texas LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Texas LLC with GKFG. No state income tax and no annual fee for most LLCs. Serving Austin, Dallas, Houston, and San Antonio with formation and RON.",
    heroSubheadline:
      "Texas has no state income tax and no annual LLC fee for most businesses. GKFG files your LLC and handles your EIN, notary, and compliance.",
    fees: {
      llcFormation: "$310",
      annualReport: "$0 for most LLCs (under $2.47M revenue)",
      dbaFee: "$25",
      foreignLlc: "$750",
      nameReservation: "$40",
      gkfgStarterFee: "$297",
      totalStarter: "$607",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Texas has no state income tax and no annual LLC fee for most businesses. A higher formation fee but near-zero ongoing costs make it excellent for long-term operations.",
    specialNote:
      "Foreign qualification in Texas costs $750 — the highest of all 20 GKFG states. We alert clients before filing if you're registering an out-of-state company.",
    neighbors: ["new-mexico", "florida", "colorado"],
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    region: "Miami · Orlando · Tampa",
    accentColor: "#0D9488",
    seoTitle: "Florida LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Florida LLC with GKFG. No state income tax and a massive consumer market. Serving Miami, Orlando, and Tampa with formation, EIN assistance, and RON.",
    heroSubheadline:
      "Florida has no state income tax and one of the largest consumer markets in the country. GKFG handles your LLC, EIN, notary, and annual filings.",
    fees: {
      llcFormation: "$155",
      annualReport: "$139 / year",
      dbaFee: "$50",
      foreignLlc: "$125",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$452",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Florida has no state income tax and is one of the most popular states in the country for business formation, with a massive and growing consumer market.",
    specialNote:
      "Florida's annual report is due May 1 each year, with a steep late fee after the deadline. We track and file it for you.",
    neighbors: ["georgia", "south-carolina", "texas"],
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    region: "Denver Metro",
    accentColor: "#2563EB",
    seoTitle: "Colorado LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Colorado LLC with GKFG. One of the lowest annual fees in the country at just $10/year. Serving Denver, Boulder, and Colorado Springs with formation and RON.",
    heroSubheadline:
      "Colorado has one of the lowest annual fees in the country. GKFG files your LLC and handles your EIN, notary, and ongoing compliance.",
    fees: {
      llcFormation: "$50",
      annualReport: "$10 / year",
      dbaFee: "$20",
      foreignLlc: "$100",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Colorado has one of the lowest annual report fees in the country at just $10/year — extremely affordable for long-term maintenance, with a $50 filing fee to match.",
    specialNote:
      "As of July 1, 2025, Colorado requires registered agents to verify state residency. Clients must use a Colorado-based registered agent; we coordinate this through a vetted partner referral.",
    neighbors: ["kansas", "new-mexico", "arizona"],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    region: "Northern Virginia & DC Metro",
    accentColor: "#1E40AF",
    seoTitle: "Virginia LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Virginia LLC with GKFG. Strong market for government contracting and professional services. Serving Northern Virginia, Richmond, and the DC metro with RON.",
    heroSubheadline:
      "Virginia anchors the DC metro and a massive government-contracting sector. GKFG files your LLC and handles your EIN, notary, and compliance.",
    fees: {
      llcFormation: "$104",
      annualReport: "$50 / year",
      dbaFee: "$10",
      foreignLlc: "$100",
      nameReservation: "$10",
      gkfgStarterFee: "$297",
      totalStarter: "$401",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Virginia is home to the DC metro and Northern Virginia's technology and government-contracting sector — a strong market for professional-services businesses.",
    specialNote:
      "Virginia's annual registration fee is due by the last day of your LLC's anniversary month. We track the date and file on time.",
    neighbors: ["maryland", "north-carolina", "tennessee"],
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    region: "Baltimore & DC Suburbs",
    accentColor: "#9333EA",
    seoTitle: "Maryland LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Maryland LLC with GKFG. Ideal for government contractors and federal-facing businesses near DC. Serving Baltimore and the DC suburbs with formation and RON.",
    heroSubheadline:
      "Maryland's proximity to Washington DC makes it ideal for government contractors and federal-facing businesses. GKFG handles your LLC, EIN, and notary.",
    fees: {
      llcFormation: "$100",
      annualReport: "$300 / year",
      dbaFee: "$25",
      foreignLlc: "$100",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$397",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Maryland's proximity to Washington DC makes it ideal for government contractors, consultants, and federal-facing businesses.",
    specialNote:
      "Maryland has one of the higher annual report fees at $300/year. We make sure you budget for it and never miss the deadline.",
    neighbors: ["virginia", "ohio", "north-carolina"],
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    region: "Indianapolis Metro",
    accentColor: "#0891B2",
    seoTitle: "Indiana LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Indiana LLC with GKFG. Biennial reporting means you file only every two years. Serving Indianapolis, Fort Wayne, and Carmel with formation and RON.",
    heroSubheadline:
      "Indiana's biennial report means less paperwork — you file only every two years. GKFG handles your LLC, EIN, notary, and compliance.",
    fees: {
      llcFormation: "$90",
      annualReport: "$30 every 2 years (biennial)",
      dbaFee: "$30",
      foreignLlc: "$90",
      nameReservation: "$20",
      gkfgStarterFee: "$297",
      totalStarter: "$387",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Indiana's biennial report means you only file every two years, cutting your ongoing administrative burden in half. A very business-friendly state.",
    specialNote:
      "Indiana's report is biennial — filed every two years, not annually. We track the cycle so you stay in good standing.",
    neighbors: ["ohio", "michigan", "kentucky"],
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    region: "Des Moines Metro",
    accentColor: "#CA8A04",
    seoTitle: "Iowa LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Iowa LLC with GKFG. One of the lowest DBA fees in the country at just $5. Serving Des Moines, Cedar Rapids, and Davenport with formation and RON.",
    heroSubheadline:
      "Iowa is one of the most affordable states for multi-brand businesses. GKFG files your LLC and handles your EIN, notary, and compliance.",
    fees: {
      llcFormation: "$50",
      annualReport: "$45 every 2 years (biennial)",
      dbaFee: "$5",
      foreignLlc: "$100",
      nameReservation: "$10",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Iowa has one of the lowest DBA fees in the country at just $5 — extremely affordable for businesses running multiple brands, with a $50 filing fee to match.",
    specialNote:
      "Iowa's report is biennial, due April 1 in odd-numbered years. We track the cycle and file for you.",
    neighbors: ["missouri", "minnesota", "kansas"],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    region: "Louisville & Lexington",
    accentColor: "#15803D",
    seoTitle: "Kentucky LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Kentucky LLC with GKFG — the lowest formation fee of all 20 states at just $40. Serving Louisville, Lexington, and Bowling Green with formation and RON.",
    heroSubheadline:
      "Kentucky has the lowest formation fee of all 20 GKFG states. GKFG files your LLC and handles your EIN, notary, and ongoing compliance.",
    fees: {
      llcFormation: "$40",
      annualReport: "$15 / year",
      dbaFee: "$20",
      foreignLlc: "$90",
      nameReservation: "$15",
      gkfgStarterFee: "$297",
      totalStarter: "$337",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Kentucky has the lowest LLC formation fee of all 20 GKFG states at just $40. With a $15 annual fee, it's one of the most affordable states for long-term operations.",
    specialNote:
      "Your total first-year cost with GKFG in Kentucky is just $337 — the most affordable in the entire GKFG portfolio.",
    neighbors: ["tennessee", "ohio", "indiana"],
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    region: "Detroit Metro",
    accentColor: "#4338CA",
    seoTitle: "Michigan LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Michigan LLC with GKFG — the lowest foreign LLC fee of all 20 states at just $50. Serving Detroit, Grand Rapids, and Ann Arbor with formation and RON.",
    heroSubheadline:
      "Michigan is ideal for out-of-state businesses expanding in, with the lowest foreign qualification fee of all 20 GKFG states. GKFG handles your LLC, EIN, and notary.",
    fees: {
      llcFormation: "$50",
      annualReport: "$25 / year",
      dbaFee: "$10",
      foreignLlc: "$50",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Michigan has the lowest foreign LLC qualification fee of all 20 GKFG states at just $50 — ideal for out-of-state businesses expanding into Michigan.",
    specialNote:
      "Michigan's annual statement is due February 15 each year. We track the date and file it for you.",
    neighbors: ["indiana", "ohio", "minnesota"],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    region: "Minneapolis–St. Paul",
    accentColor: "#047857",
    seoTitle: "Minnesota LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Minnesota LLC with GKFG. No annual report fee for LLCs. Serving Minneapolis, St. Paul, and Rochester with formation, EIN assistance, and RON.",
    heroSubheadline:
      "Minnesota has no annual report fee for LLCs — zero ongoing state costs after formation. GKFG handles your LLC, EIN, notary, and compliance.",
    fees: {
      llcFormation: "$155",
      annualReport: "None — Minnesota has no annual fee",
      dbaFee: "$30",
      foreignLlc: "$155",
      nameReservation: "$35",
      gkfgStarterFee: "$297",
      totalStarter: "$452",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Minnesota has no annual report fee for LLCs. A higher formation fee but zero ongoing state costs make it very affordable over the long term.",
    specialNote:
      "No annual renewal fee is required after formation, though an informational annual renewal must be filed to keep the LLC active. We handle it for you.",
    neighbors: ["iowa", "michigan", "missouri"],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    region: "Las Vegas & Reno",
    accentColor: "#6D28D9",
    seoTitle: "Nevada LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Nevada LLC with GKFG. Strong privacy protections and no state corporate income tax. Serving Las Vegas, Reno, and Henderson with formation and RON.",
    heroSubheadline:
      "Nevada offers strong privacy protections and no state corporate income tax — popular for holding companies and asset protection. GKFG handles your LLC, EIN, and notary.",
    fees: {
      llcFormation: "$75 + $200 state business license",
      annualReport: "$350 / year (combined)",
      dbaFee: "$20",
      foreignLlc: "$325",
      nameReservation: "$25",
      gkfgStarterFee: "$297",
      totalStarter: "$572",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Nevada has strong privacy protections and no state corporate income tax or franchise tax — popular for holding companies and asset-protection strategies.",
    specialNote:
      "Nevada has higher ongoing costs than most states at $350/year. It's best suited for clients with specific privacy or asset-protection needs rather than cost-conscious startups.",
    neighbors: ["arizona", "colorado", "new-mexico"],
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    region: "Albuquerque & Santa Fe",
    accentColor: "#C2410C",
    seoTitle: "New Mexico LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your New Mexico LLC with GKFG. No annual report and strong privacy — no public member disclosure. Serving Albuquerque and Santa Fe with formation and RON.",
    heroSubheadline:
      "New Mexico has no annual report and strong privacy — member names are not required in public filings. GKFG handles your LLC, EIN, notary, and compliance.",
    fees: {
      llcFormation: "$50",
      annualReport: "None — New Mexico has no annual fee",
      dbaFee: "$10",
      foreignLlc: "$100",
      nameReservation: "$20",
      gkfgStarterFee: "$297",
      totalStarter: "$347",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "New Mexico is one of only four states with no annual LLC report or fee — and it offers strong privacy, with no requirement to list member names in public filings.",
    specialNote:
      "New Mexico is an underrated choice for privacy-conscious owners — no public member disclosure is required, and there's no annual report to file.",
    neighbors: ["arizona", "texas", "colorado"],
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    region: "Columbus · Cleveland · Cincinnati",
    accentColor: "#B91C1C",
    seoTitle: "Ohio LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your Ohio LLC with GKFG. No annual report fee and a central logistics location. Serving Columbus, Cleveland, and Cincinnati with formation and RON.",
    heroSubheadline:
      "Ohio has no annual report fee and a central location that makes it a strong logistics hub. GKFG handles your LLC, EIN, notary, and compliance.",
    fees: {
      llcFormation: "$99",
      annualReport: "None — Ohio has no annual report",
      dbaFee: "$39",
      foreignLlc: "$99",
      nameReservation: "$39",
      gkfgStarterFee: "$297",
      totalStarter: "$396",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "Ohio has no annual report fee — one of only four states nationwide with zero ongoing LLC costs. Very affordable for long-term business maintenance.",
    specialNote:
      "Ohio's central location makes it a strong logistics and distribution hub, with no annual report to file or pay.",
    neighbors: ["indiana", "michigan", "kentucky"],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    region: "Charleston & Greenville",
    accentColor: "#0E7490",
    seoTitle: "South Carolina LLC Formation Services | Gantt Key Formation Group",
    metaDescription:
      "Form your South Carolina LLC with GKFG. No annual LLC fee and minimal ongoing compliance. Serving Charleston, Greenville, and Columbia with formation and RON.",
    heroSubheadline:
      "South Carolina has no annual LLC fee and minimal ongoing compliance. GKFG files your LLC and handles your EIN, notary, and filings.",
    fees: {
      llcFormation: "$110",
      annualReport: "None — no annual LLC fee",
      dbaFee: "$10",
      foreignLlc: "$110",
      nameReservation: "$10",
      gkfgStarterFee: "$297",
      totalStarter: "$407",
    },
    registeredAgent: false,
    mobileNotary: false,
    loanSigning: false,
    keySellingPoint:
      "South Carolina has no annual LLC fee. Combined with a relatively low formation cost, it's an excellent Southeast option for minimal ongoing compliance.",
    specialNote:
      "South Carolina requires an informational annual filing, but it carries no fee. We handle it for you.",
    neighbors: ["north-carolina", "georgia", "florida"],
  },
];

export const allStates: StateData[] = stateList;

export const stateData: Record<string, StateData> = Object.fromEntries(
  stateList.map((s) => [s.slug, s]),
);

export const stateCount = stateList.length;
