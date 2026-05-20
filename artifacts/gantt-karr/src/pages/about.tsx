import { SEO } from "@/components/seo";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <SEO title="About Us" />
      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Family-Led. Founder-Driven.</h1>
          <p className="text-xl text-primary-foreground/80">We believe that starting a business should feel empowering, not overwhelming.</p>
        </div>
      </div>
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Story</h2>
            <p>
              Gantt & Karr Formation Group was built on a simple premise: entrepreneurs need more than just paperwork filed. They need a partner who understands the gravity of starting a business and treats the process with the respect and precision it deserves.
            </p>
            <p>
              Founded by Loresa Gantt and supported by a family-led team, our firm brings a feminine executive energy to business formation. We understand the nuances of building something from the ground up, particularly for first-generation business owners.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-12">Our Mission</h3>
            <p>
              To provide premium, trustworthy, and professional setup support for ambitious entrepreneurs, ensuring their businesses are structured correctly from day one.
            </p>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-12">Our Values</h3>
            <ul className="list-none pl-0 space-y-4 mt-6">
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">1</span>
                <div>
                  <strong>Precision & Polish:</strong> Every document, every filing, every interaction is handled with executive-level care.
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">2</span>
                <div>
                  <strong>Empowerment:</strong> We demystify the formation process so you can focus on building your vision.
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">3</span>
                <div>
                  <strong>Family-Led Integrity:</strong> We treat your business formation with the same care and dedication we apply to our own.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
