export const SITE_URL = "https://ganttformation.com";
export const SITE_NAME = "Gantt Key Formation Group";

const ORG_BASE = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Gantt Key", "Gantt Key Formation"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph.jpg`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/opengraph.jpg`,
  description:
    "Founder-led business formation, notary services, and startup support powered by Anna AI. Serving entrepreneurs across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana.",
  email: "Info@ganttformation.com",
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
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/meet-the-founder#loresa-gantt`,
    name: "Loresa Gantt",
    jobTitle: "Founder & Lead Formation Specialist",
    url: `${SITE_URL}/meet-the-founder`,
  },
  foundingDate: "2022",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Formation & Notary Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "LLC Formation Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporation Filing Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "EIN Application Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Missouri Registered Agent Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "BOI Reporting Assistance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Notary Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Notary Services (MO Only)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loan Signing Services" } },
    ],
  },
  areaServed: [
    { "@type": "State", name: "Missouri" },
    { "@type": "State", name: "Arizona" },
    { "@type": "State", name: "North Carolina" },
    { "@type": "State", name: "Georgia" },
    { "@type": "State", name: "Tennessee" },
    { "@type": "State", name: "Montana" },
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
    "Business Compliance",
    "Operating Agreements",
    "Startup Consulting",
  ],
  sameAs: [
    "https://www.facebook.com/ganttformation",
    "https://www.instagram.com/ganttformation",
    "https://www.linkedin.com/company/ganttformation",
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
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable"],
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
    },
  ];
}

export function webPageSchema(params: {
  url: string;
  name: string;
  description: string;
  breadcrumbItems?: { name: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${params.url}#webpage`,
    url: `${SITE_URL}${params.url}`,
    name: params.name,
    description: params.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    ...(params.breadcrumbItems && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          ...params.breadcrumbItems.map((item, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: item.name,
            item: `${SITE_URL}${item.href}`,
          })),
        ],
      },
    }),
  };
}

export function annaSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/meet-anna#anna`,
    name: "Anna — AI Receptionist",
    alternateName: "Anna AI",
    applicationCategory: "BusinessApplication",
    description:
      "Anna is the AI receptionist supporting Gantt Key Formation Group, built through Apex Key Group Holdings, Inc. She answers common questions, routes appointment requests, collects basic intake details, and ensures no client inquiry is missed. Anna does not provide legal advice or make legal decisions.",
    url: `${SITE_URL}/meet-anna`,
    provider: {
      "@type": "Organization",
      name: "Apex Key Group Holdings, Inc.",
    },
    offers: {
      "@type": "Offer",
      offeredBy: { "@id": `${SITE_URL}/#organization` },
    },
    featureList: [
      "Answers common client questions",
      "Routes appointment requests",
      "Collects basic intake details",
      "Ensures no inquiry is missed",
    ],
    softwareHelp: {
      "@type": "CreativeWork",
      url: `${SITE_URL}/meet-anna`,
    },
  };
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
  statesServed?: string[];
}) {
  const states = params.statesServed ?? [
    "Missouri", "Arizona", "North Carolina", "Georgia", "Tennessee", "Montana",
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    serviceType: params.category ?? "Business Formation Service",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: states.map((s) => ({ "@type": "State", name: s })),
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

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
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

export function itemListSchema(params: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      ...(item.description && { description: item.description }),
    })),
  };
}

export function howToSchema(params: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME}`,
    description: "Get in touch with Gantt Key Formation Group for business formation, notary, and startup support.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "Info@ganttformation.com",
          availableLanguage: "English",
          areaServed: ["US"],
        },
      ],
    },
  };
}

export function offerCatalogSchema(params: {
  packages: { name: string; price: string; description: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Business Formation Packages",
    provider: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/pricing`,
    numberOfItems: params.packages.length,
    itemListElement: params.packages.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Offer",
        name: pkg.name,
        description: pkg.description,
        price: pkg.price.replace(/\D/g, ""),
        priceCurrency: "USD",
        url: `${SITE_URL}${pkg.url}`,
        offeredBy: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  };
}
