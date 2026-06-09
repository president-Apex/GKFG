import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-between px-[10vw]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-[45%] relative z-10">
        <motion.h2 
          className="text-[5vw] font-serif leading-tight text-white mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Meet your partner. <br/>
          <span className="text-[#C9A84C]">Not a portal.</span>
        </motion.h2>

        <motion.p 
          className="text-[1.8vw] text-white/80 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Led by founder Loresa Gantt. We provide the feminine executive energy and precision your enterprise deserves.
        </motion.p>
      </div>

      <div className="w-[45%] h-[70vh] relative">
        <motion.div
          className="absolute inset-0 bg-[#C9A84C]/20 border border-[#C9A84C]/50 rounded-tl-[100px] rounded-br-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={phase >= 3 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.img 
          src={`${import.meta.env.BASE_URL}loresa-gantt.png`}
          alt="Loresa Gantt"
          className="absolute inset-0 w-full h-full object-cover object-top rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
          initial={{ opacity: 0, filter: 'grayscale(100%)' }}
          animate={phase >= 4 ? { opacity: 1, filter: 'grayscale(0%)' } : { opacity: 0, filter: 'grayscale(100%)' }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
}