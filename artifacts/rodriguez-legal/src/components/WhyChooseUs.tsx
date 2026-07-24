import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    title: "Simplified Process",
    desc: "We remove the complexity so you can focus on building your business, not filing paperwork.",
  },
  {
    title: "Personalized Support",
    desc: "Real people, real guidance. You're never a ticket number here.",
  },
  {
    title: "Fast Response Times",
    desc: "Most clients hear back the same day. We move at the speed your business needs.",
  },
  {
    title: "Business-First Guidance",
    desc: "Every recommendation is made with your business goals in mind, not upsells.",
  },
  {
    title: "Family-Led Service",
    desc: "We're a family-run team that takes pride in the relationships we build with every client.",
  },
  {
    title: "Professional Structure From Day One",
    desc: "Your business is set up correctly from the start — no costly mistakes to fix later.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            title="Why Entrepreneurs Choose Us"
            subtitle="We help entrepreneurs launch, structure, and organize their businesses with confidence."
            centered
          />
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 flex gap-4 items-start"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
