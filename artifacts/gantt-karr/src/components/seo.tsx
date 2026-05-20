import { useEffect } from "react";
import { useLocation } from "wouter";
import { SITE_URL, SITE_NAME } from "@/lib/schema";

const DEFAULT_DESCRIPTION =
  "Gantt & Karr Formation Group — family-led business formation, notary services, and startup support across Missouri, Arizona, North Carolina, Georgia, Tennessee, and Montana.";
const DEFAULT_IMAGE = `${SITE_URL}/gantt-karr/opengraph.jpg`;

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  schema?: object | object[];
  noindex?: boolean;
}

function setMeta(selector: string, attrName: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const parts = selector.replace(/[\[\]"]/g, "").split("=");
    el.setAttribute(parts[0], parts[1]);
    document.head.appendChild(el);
  }
  el.setAttribute(attrName, value);
}

function injectSchema(data: object | object[]) {
  const existing = document.getElementById("gk-ld-json");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "gk-ld-json";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(Array.isArray(data) ? data : [data]);
  document.head.appendChild(script);
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  schema,
  noindex = false,
}: SEOProps) {
  const [location] = useLocation();
  const canonical = `${SITE_URL}${location === "/" ? "" : location}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = fullTitle;

    // Core meta
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex,nofollow" : "index,follow");

    // Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Open Graph
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:locale"]', "content", "en_US");

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setMeta('meta[name="twitter:image:alt"]', "content", `${SITE_NAME} — Business Formation & Notary`);

    // JSON-LD structured data
    if (schema) {
      injectSchema(schema);
    } else {
      document.getElementById("gk-ld-json")?.remove();
    }
  }, [fullTitle, description, canonical, image, schema, noindex]);

  return null;
}
