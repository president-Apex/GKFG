import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "@/lib/analytics";

export function useAnalyticsTracker(): void {
  const [location] = useLocation();
  const prevLocation = useRef<string | null>(null);

  useEffect(() => {
    if (location !== prevLocation.current) {
      prevLocation.current = location;
      trackPageView(location);
    }
  }, [location]);
}
