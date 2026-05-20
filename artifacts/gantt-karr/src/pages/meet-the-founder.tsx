import { SEO } from "@/components/seo";

export default function MeetTheFounder() {
  return (
    <>
      <SEO title="Meet the Founder - Loresa Gantt" />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
             <div className="text-4xl font-serif text-primary opacity-50">LG</div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Loresa Gantt</h1>
            <p className="text-xl text-secondary font-medium mb-6 uppercase tracking-wider">Founder & CEO</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Building a business is an act of courage. My goal is to ensure your foundation is as strong as your vision."
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            Loresa Gantt founded Gantt & Karr Formation Group with a clear vision: to bring executive-level precision and warmth to the business formation process. Recognizing that many entrepreneurs—especially women and first-generation founders—often face an intimidating and opaque system when starting out, Loresa set out to create a boutique experience that prioritizes clarity, confidence, and compliance.
          </p>
          <p>
            With a background in business operations and a passion for supporting emerging leaders, Loresa leads the firm with a signature "feminine executive" energy—polished, highly capable, and deeply personal.
          </p>
          <p>
            Under her leadership, Gantt & Karr has grown into a trusted partner for founders across the country, providing everything from LLC formation and notary services to strategic startup consultation and AI integration.
          </p>
        </div>
      </section>
    </>
  );
}
