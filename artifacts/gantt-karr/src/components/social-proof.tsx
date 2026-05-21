import { useState, useEffect, useCallback } from "react";
import { UserCircle2, X } from "lucide-react";

const NOTIFICATIONS = [
  "Nicole M. scheduled an Online Notary appointment",
  "Jason B. booked a Mobile Notary consultation",
  "Carla K. started a Business Formation request",
  "Michael T. requested Registered Agent information",
  "Amanda S. booked a Startup Support consultation",
  "Chris R. completed a Business Formation intake",
  "Taylor H. requested Loan Signing services",
  "David P. scheduled an Online Notary session",
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
    }, getRandomBetween(5000, 8000));

    return hideTimer;
  }, [lastMessage]);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let loopTimer: ReturnType<typeof setTimeout>;

    function schedule() {
      loopTimer = setTimeout(() => {
        hideTimer = show();
        schedule();
      }, getRandomBetween(20000, 45000));
    }

    const initial = setTimeout(() => {
      hideTimer = show();
      schedule();
    }, getRandomBetween(8000, 15000));

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
      aria-atomic="true"
      className={`fixed bottom-6 right-5 z-[9990] max-w-[300px] w-[calc(100vw-2.5rem)] sm:w-72 transition-all duration-500 ease-out pointer-events-none ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-start gap-3 rounded-xl bg-white shadow-xl border border-border px-4 py-3.5 pointer-events-auto">
        <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <UserCircle2 className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-secondary uppercase tracking-wider mb-0.5">Recent Activity</p>
          <p className="text-[13px] text-foreground leading-snug">{message}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 -mt-0.5 -mr-1 pointer-events-auto"
          aria-label="Dismiss notification"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
