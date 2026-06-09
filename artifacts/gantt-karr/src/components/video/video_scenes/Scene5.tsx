import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Scene5() {
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
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute w-[2px] h-[20vh] bg-[#C9A84C] top-0"
        initial={{ scaleY: 0, originY: 0 }}
        animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      
      <motion.h1 
        className="text-[4.5vw] font-serif text-white tracking-wide mt-[10vh] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        GANTT KEY FORMATION GROUP
      </motion.h1>

      <motion.p
        className="text-[#C9A84C] text-[1.8vw] font-light tracking-[0.2em] uppercase mb-16"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Executive Business Services
      </motion.p>

      <motion.div
        className="text-[2vw] font-medium text-white/80 border border-white/20 px-8 py-4 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, type: "spring" }}
      >
        ganttformation.com
      </motion.div>
    </motion.div>
  );
}