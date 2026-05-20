import { useState, useEffect, useCallback } from "react";
import { CheckCircle, X } from "lucide-react";

const NOTIFICATIONS = [
  "Jessica M. in Charlotte just requested LLC Formation Assistance.",
  "Marcus T. in Atlanta just booked a Free Startup Consultation.",
  "Danielle R. in Phoenix just started a Business Launch Package.",
  "Chris J. in Kansas City just requested Notary Services.",
  "Angela W. in Nashville just requested EIN Assistance.",
  "Brittany S. in Scottsdale just booked Business Startup Support.",
  "Taylor K. in Bozeman just requested Registered Agent Coordination.",
  "Monica L. in Raleigh just started the Entrepreneur Support Package.",
  "Devon A. in Houston just requested AI Intake Setup with Anna.",
  "Simone P. in Denver just started a Business Launch Package.",
  "James W. in Columbus just requested LLC Formation Assistance.",
  "Keisha R. in Memphis just booked a Free Startup Consultation.",
];

function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNotification(last: string | null): string {
  const pool = last ? NOTIFICATIONS.filter((n) => n !== last) : NOTIFICATIONS;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  const show = useCallback(() => {
    const next = getRandomNotification(lastMessage);
    setMessage(next);
    setLastMessage(next);
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, getRandomBetween(5000, 7000));

    return hideTimer;
  }, [lastMessage]);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let loopTimer: ReturnType<typeof setTimeout>;

    function schedule() {
      loopTimer = setTimeout(() => {
        hideTimer = show();
        schedule();
      }, getRandomBetween(18000, 35000));
    }

    const initial = setTimeout(() => {
      hideTimer = show();
      schedule();
    }, getRandomBetween(5000, 10000));

    return () => {
      clearTimeout(initial);
      clearTimeout(loopTimer);
      clearTimeout(hideTimer);
    };
  }, [show]);

  if (!message) return null;

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-5 left-4 z-[9999] max-w-[320px] w-[calc(100vw-2rem)] sm:w-80 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3 rounded-xl bg-[#FAFAF7] shadow-lg border border-emerald-100 px-4 py-3.5">
        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
        <p className="text-[13px] text-[#2D2D2D] leading-snug flex-1">{message}</p>
        <button
          onClick={() => setVisible(false)}
          className="text-[#9CA3AF] hover:text-[#2D2D2D] transition-colors flex-shrink-0 -mt-0.5 -mr-1"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-[10px] text-[#9CA3AF] mt-1.5 px-1 leading-tight">
        Demo notifications — not real-time transactions.
      </p>
    </div>
  );
}
