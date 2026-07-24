import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, Heart } from "lucide-react";

const pillars = [
  { icon: <Users className="w-5 h-5 text-primary" />, label: "Family-Led Service" },
  { icon: <Zap className="w-5 h-5 text-primary" />, label: "Fast Turnaround" },
  { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: "Business-First Guidance" },
  { icon: <Heart className="w-5 h-5 text-primary" />, label: "Personalized Support" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-b border-border/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {pillars.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              {p.icon}
              <span className="font-heading font-semibold text-sm text-foreground tracking-wide">{p.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
