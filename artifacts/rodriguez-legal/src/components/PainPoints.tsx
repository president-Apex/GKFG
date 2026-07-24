import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

const problems = [
  "Filing mistakes that delay approval",
  "Choosing the wrong structure (LLC vs S-Corp)",
  "Missing EIN setup → can't open a bank account",
  "No registered agent → compliance issues and missed notices",
  "Wasting hours trying to figure it out alone",
];

export function PainPoints() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3 border border-accent/30 rounded-full px-3 py-1">
              Common Mistakes
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-5 leading-tight">
              Most People Start Their Business Wrong — And Pay for It Later
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The process seems simple until you're stuck waiting weeks for approval, or your bank account application gets rejected because of a missing EIN.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 mb-8">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border/50 shadow-sm"
                >
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-primary text-primary-foreground rounded-xl p-5">
              <ArrowRight className="w-5 h-5 text-primary-foreground/70 shrink-0" />
              <p className="font-heading font-semibold text-base">
                We eliminate all of that — and get it done right the first time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
