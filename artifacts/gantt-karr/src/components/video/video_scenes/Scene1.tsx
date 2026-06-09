import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/office-texture.png)` }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-[6vw] font-serif leading-tight text-[#C9A84C] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Starting a business shouldn't be terrifying.
        </motion.h1>
        
        <motion.p 
          className="text-[2.5vw] font-light text-white/90"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={phase >= 2 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 1.2 }}
        >
          But going it alone often is.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-[20vh] w-[2px] h-[10vh] bg-[#C9A84C]"
        initial={{ scaleY: 0, originY: 0 }}
        animate={phase >= 3 ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  );
}