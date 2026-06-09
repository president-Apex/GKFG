import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  "LLC Formation",
  "EIN Acquisition",
  "Registered Agent",
  "Mobile Notary",
  "Loan Signing"
];

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      ...services.map((_, i) => setTimeout(() => setPhase(2 + i), 1200 + i * 800))
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center pt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.h2 
        className="text-[3vw] text-[#C9A84C] font-serif uppercase tracking-widest mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
      >
        Executive Services
      </motion.h2>

      <div className="flex flex-col gap-6 w-full max-w-4xl px-10">
        {services.map((service, idx) => (
          <motion.div
            key={service}
            className="flex items-center gap-8 border-b border-white/10 pb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={phase >= 2 + idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="text-[#C9A84C] text-[2vw]">0{idx + 1}</div>
            <div className="text-[3.5vw] font-light text-white">{service}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}