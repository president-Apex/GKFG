import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex items-center gap-4 mb-4 ${centered ? "justify-center" : ""}`}>
          <div className={`h-px w-8 ${light ? "bg-white/40" : "bg-primary"}`} />
          <span className={`text-sm font-semibold tracking-wider uppercase ${light ? "text-white/85" : "text-primary"}`}>
            Gantts Key Formation Group
          </span>
          <div className={`h-px w-8 ${light ? "bg-white/40" : "bg-primary"}`} />
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/75" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
