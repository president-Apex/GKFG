export const SITE_URL = "https://gkformation.com";
export const SITE_NAME = "Gantt & Karr Formation Group";

const ORG_BASE = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "G&K Formation Group",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/gantt-karr/opengraph.jpg`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/gantt-karr/opengraph.jpg`,
  description:
    "Family-led business formation, notary services, and startup support powered by Anna AI. Serving entrepreneurs across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana.",
  email: "contact@gkformation.com",
  telephone: "1-800-GANTT-KARR",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kansas City",
    addressRegion: "MO",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.0997,
    longitude: -94.5786,
  },
  areaServed: [
    { "@type": "State", name: "Missouri" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "North Carolina" },
    { "@type": "State", name: "Georgia" },
    { "@type": "State", name: "Tennessee" },
    { "@type": "State", name: "Montana" },
    // Cities
    { "@type": "City", name: "Kansas City", containedInPlace: { "@type": "State", name: "Missouri" } },
    { "@type": "City", name: "Liberty", containedInPlace: { "@type": "State", name: "Missouri" } },
    { "@type": "City", name: "St. Louis", containedInPlace: { "@type": "State", name: "Missouri" } },
    { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Scottsdale", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Chandler", containedInPlace: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Raleigh", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Durham", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
    { "@type": "City", name: "Alpharetta", containedInPlace: { "@type": "State", name: "Georgia" } },
    { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
    { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Franklin", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Knoxville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Bozeman", containedInPlace: { "@type": "State", name: "Montana" } },
    { "@type": "City", name: "Billings", containedInPlace: { "@type": "State", name: "Montana" } },
    { "@type": "City", name: "Missoula", containedInPlace: { "@type": "State", name: "Montana" } },
  ],
  knowsAbout: [
    "LLC Formation",
    "Corporation Filing",
    "Business Formation",
    "EIN Application",
    "Registered Agent Services",
    "BOI Reporting",
    "Notary Services",
    "Mobile Notary",
    "Online Notary",
    "Loan Signing",
    "Startup Support",
  ],
  sameAs: [
    "https://www.facebook.com/gkformationgroup",
    "https://www.instagram.com/gkformationgroup",
    "https://www.linkedin.com/company/gkformationgroup",
  ],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORG_BASE,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Family-led business formation, notary, and startup support across 6 states.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function homePageSchema() {
  return [
    organizationSchema(),
    websiteSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} — Business Formation & Notary Services`,
      description:
        "Family-led business formation, notary services, and startup support across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
    },
  ];
}

export function personSchema(params: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    image: params.image,
    url: params.url,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.category ?? "Business Formation Service",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: [
      { "@type": "State", name: "Missouri" },
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "Georgia" },
      { "@type": "State", name: "Tennessee" },
      { "@type": "State", name: "Montana" },
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function locationSchema(params: {
  city: string;
  state: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — ${params.city}, ${params.state}`,
    description: `Business formation assistance, notary services, and startup support in ${params.city}, ${params.state}.`,
    url: `${SITE_URL}/locations/${params.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "City",
      name: params.city,
      containedInPlace: { "@type": "State", name: params.state },
    },
  };
}
