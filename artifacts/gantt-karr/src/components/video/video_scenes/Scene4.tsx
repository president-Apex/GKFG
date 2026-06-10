import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center p-20"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="absolute inset-0 bg-contain bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/states-map.png)` }}
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 10, ease: "linear" }}
      />
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.p 
          className="text-[#C9A84C] text-[2vw] uppercase tracking-[0.3em] font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          National Reach. Local Roots.
        </motion.p>
        
        <motion.h2 
          className="text-[6vw] font-serif leading-tight text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Serving <span className="text-[#C9A84C] italic">20 states</span> across the US.
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-[1.5vw] font-light text-white/80"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <span>MO</span> &bull; <span>KS</span> &bull; <span>AZ</span> &bull; <span>TN</span> &bull; <span>NC</span> &bull; <span>GA</span> &bull; <span>MT</span>
        </motion.div>
        
        <motion.p
          className="mt-12 text-[1.8vw] text-white/60 font-light"
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Headquartered in Liberty, MO &bull; Kansas City Metro
        </motion.p>
      </div>
    </motion.div>
  );
}