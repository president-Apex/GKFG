import { useState, useEffect } from 'react';

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const keys = Object.keys(durations);
    if (keys.length === 0) return;

    let current = 0;
    let timeoutId: NodeJS.Timeout;

    // Call startRecording on mount
    if (typeof window !== 'undefined' && (window as any).startRecording) {
      (window as any).startRecording();
    }

    const playNext = () => {
      current++;
      if (current >= keys.length) {
        // First full pass complete
        if (typeof window !== 'undefined' && (window as any).stopRecording) {
          (window as any).stopRecording();
        }
        current = 0; // Loop back
      }
      setCurrentScene(current);
      timeoutId = setTimeout(playNext, durations[keys[current]]);
    };

    // Start the first scene
    timeoutId = setTimeout(playNext, durations[keys[0]]);

    return () => clearTimeout(timeoutId);
  }, [durations]);

  return { currentScene };
}