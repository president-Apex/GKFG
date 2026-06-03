import { SEO } from "@/components/seo";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      title: "The Ultimate Startup Compliance Checklist for 2025",
      excerpt: "Ensure your new business stays on the right side of state and federal regulations with our comprehensive guide.",
      date: "Oct 12, 2024",
      category: "Compliance"
    },
    {
      title: "Why Your Business Needs an Operating Agreement (Even If You're a Solo Founder)",
      excerpt: "Many single-member LLCs skip this crucial document. Here's why that's a mistake and how to fix it.",
      date: "Oct 05, 2024",
      category: "Formation"
    },
    {
      title: "Meet Anna: How AI Intake is Changing the Client Experience",
      excerpt: "A deep dive into how 24/7 digital assistants are elevating boutique service firms.",
      date: "Sep 28, 2024",
      category: "Technology"
    }
  ];

  return (
    <>
      <SEO
        title="Blog & Insights | Business Formation Guides | Gantt Key"
        description="Expert articles on LLC formation, business compliance, operating agreements, EIN applications, and startup strategy from the Gantt Key Formation Group team."
        schema={[
          itemListSchema({
            name: "Gantt Key Formation Group — Blog & Insights",
            description: "Expert guides on business formation, compliance, and startup strategy.",
            url: "/blog",
            items: posts.map((p, i) => ({
              name: p.title,
              url: `/blog/${i}`,
              description: p.excerpt,
            })),
          }),
          breadcrumbSchema([{ name: "Blog", href: "/blog" }]),
        ]}
      />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Insights & Guides</h1>
          <p className="text-xl text-muted-foreground">Expert advice on business formation, operations, and growth.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-primary/5 border-b border-border flex items-center justify-center">
                  <span className="font-serif text-primary/30 text-4xl font-bold">GK</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-primary">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                  <Link href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Read Article &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
