import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const bookedServices = [
  "an LLC formation package",
  "an EIN filing assistance service",
  "a Growth package",
  "a Starter Launch package",
  "a business compliance review",
  "an operating agreement assistance service",
  "a business startup consultation",
  "a DBA registration service",
  "an S Corporation election service",
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomMinutes() {
  return Math.floor(Math.random() * 55) + 2;
}

export function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [notice, setNotice] = useState({ state: "Montana", service: bookedServices[0], mins: 12 });
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const showOne = () => {
      setNotice({ state: randomItem(states), service: randomItem(bookedServices), mins: randomMinutes() });
      setVisible(true);
      timersRef.current.push(setTimeout(() => setVisible(false), 7000));
      timersRef.current.push(setTimeout(showOne, 20000));
    };

    timersRef.current.push(setTimeout(showOne, 5000));
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div className="bg-white border border-border shadow-xl rounded-2xl p-4 pr-9 relative">
            <button
              aria-label="Dismiss notifications"
              className="absolute top-2.5 right-2.5 text-muted-foreground hover:text-muted-foreground"
              onClick={() => {
                setVisible(false);
                setDismissed(true);
              }}
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground leading-snug">
                  Someone in <span className="font-semibold">{notice.state}</span> just booked{" "}
                  {notice.service}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">{notice.mins} minutes ago · Verified</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
