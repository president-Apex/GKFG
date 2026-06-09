import { logger } from "./logger";

export interface IpInfo {
  country: string | null;
  city: string | null;
  isVpn: boolean;
  isProxy: boolean;
}

const cache = new Map<string, { data: IpInfo; expiresAt: number }>();
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

function isPrivateIp(ip: string): boolean {
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.2") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd")
  );
}

export async function lookupIp(ip: string): Promise<IpInfo> {
  const empty: IpInfo = { country: null, city: null, isVpn: false, isProxy: false };

  if (!ip || isPrivateIp(ip)) return empty;

  const cached = cache.get(ip);
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,city,proxy,hosting`,
      { signal: controller.signal },
    );
    clearTimeout(timeout);

    if (!res.ok) return empty;

    const json = (await res.json()) as {
      status: string;
      country?: string;
      city?: string;
      proxy?: boolean;
      hosting?: boolean;
    };

    if (json.status !== "success") return empty;

    const data: IpInfo = {
      country: json.country ?? null,
      city: json.city ?? null,
      isVpn: json.hosting === true,
      isProxy: json.proxy === true,
    };

    cache.set(ip, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    return data;
  } catch (err) {
    logger.warn({ err, ip }, "IP intelligence lookup failed");
    return empty;
  }
}
