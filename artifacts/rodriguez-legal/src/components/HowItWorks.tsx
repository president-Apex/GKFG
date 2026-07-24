import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    desc: "Select the formation or startup support service that fits where you are in your business journey.",
  },
  {
    number: "02",
    title: "Complete Intake Form",
    desc: "Fill out our simple intake form with your business details. No confusing legal jargon — just clear questions.",
  },
  {
    number: "03",
    title: "Review Business Information",
    desc: "Our team reviews your information personally and confirms details before taking any action.",
  },
  {
    number: "04",
    title: "We Prepare Your Setup",
    desc: "We handle the paperwork, filings, and submissions on your behalf — accurately and efficiently.",
  },
  {
    number: "05",
    title: "Launch With Confidence",
    desc: "Receive your completed documents and step into your business knowing everything was done right.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-8 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[150%] rotate-12 bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-white/85 mb-3 border border-white/20 rounded-full px-4 py-1.5">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">How It Works</h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto">
            Most clients are up and running within 24–72 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/8 border border-white/15 rounded-2xl p-6 relative"
            >
              <div className="text-4xl font-heading font-bold text-white/30 mb-4 leading-none">{step.number}</div>
              <h3 className="text-base font-heading font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-white/55" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
