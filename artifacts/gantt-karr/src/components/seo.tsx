import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export function SEO({ title, description = "Gantt & Karr Formation Group provides family-led business formation, notary, and startup support." }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Gantt & Karr Formation Group`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
