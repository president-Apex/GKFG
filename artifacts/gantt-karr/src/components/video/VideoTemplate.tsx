import { motion, AnimatePresence } from "framer-motion";
import { useVideoPlayer } from "@/lib/video/hooks";
import { Scene1 } from "./video_scenes/Scene1";
import { Scene2 } from "./video_scenes/Scene2";
import { Scene3 } from "./video_scenes/Scene3";
import { Scene4 } from "./video_scenes/Scene4";
import { Scene5 } from "./video_scenes/Scene5";

const SCENE_DURATIONS = { 
  open: 7000, 
  founder: 12000, 
  services: 12000, 
  reach: 10000, 
  close: 9000 
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a2f4e] text-white">
      {/* Persistent Abstract Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-[80vw] h-[80vw] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
          animate={{ 
            x: ['-20%', '80%', '10%'], 
            y: ['10%', '60%', '20%'], 
            scale: [1, 1.2, 0.9] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} 
        />
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full opacity-10 blur-3xl right-0 bottom-0"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }}
          animate={{ 
            x: ['20%', '-50%', '5%'], 
            y: ['-20%', '-60%', '-10%'] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} 
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/abstract-gold.png')] bg-cover bg-center mix-blend-overlay"></div>

      {/* Foreground Scenes */}
      <AnimatePresence mode="sync">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="founder" />}
        {currentScene === 2 && <Scene3 key="services" />}
        {currentScene === 3 && <Scene4 key="reach" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}