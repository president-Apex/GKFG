const SESSION_KEY = "gkfg_session_id";

function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function getUtmParams(): { utmSource: string | null; utmMedium: string | null; utmCampaign: string | null } {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
  };
}

let lastPath: string | null = null;
let lastPathTime: number | null = null;

export function trackPageView(path: string): void {
  const sessionId = getSessionId();
  const referrer = document.referrer || null;
  const { utmSource, utmMedium, utmCampaign } = getUtmParams();

  const duration =
    lastPath !== null && lastPathTime !== null
      ? Math.round((Date.now() - lastPathTime) / 1000)
      : null;

  lastPath = path;
  lastPathTime = Date.now();

  const payload = {
    sessionId,
    path,
    referrer: referrer && referrer !== window.location.href ? referrer : null,
    utmSource,
    utmMedium,
    utmCampaign,
    duration,
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  fetch(`${base}/api/analytics/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}
