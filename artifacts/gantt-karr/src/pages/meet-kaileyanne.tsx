import { SEO } from "@/components/seo";

export default function MeetKaileyanne() {
  return (
    <>
      <SEO title="Meet Kaileyanne Karr" />
      <div className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
             <div className="text-4xl font-serif text-primary opacity-50">KK</div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Kaileyanne Karr</h1>
            <p className="text-xl text-secondary font-medium mb-6 uppercase tracking-wider">Director of Client Experience & Operations</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Every client deserves an experience that feels seamless, supported, and perfectly coordinated."
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <p>
            As the Director of Client Experience & Operations, Kaileyanne Karr is the operational heartbeat of Gantt & Karr Formation Group. She ensures that every entrepreneur who walks through our doors—whether physically or digitally—receives a premium, boutique experience.
          </p>
          <p>
            Kaileyanne oversees the intricate coordination required for business setup, from managing document flows and notary schedules to liaising with our network of professional partners. Her meticulous attention to detail ensures that no step is missed and that our clients feel informed and confident throughout the entire process.
          </p>
          <p>
            Working closely with Founder Loresa Gantt, Kaileyanne helps maintain the firm's family-led ethos, bringing warmth, professionalism, and executive polish to every client interaction.
          </p>
        </div>
      </section>
    </>
  );
}
