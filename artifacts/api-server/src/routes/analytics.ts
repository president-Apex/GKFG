import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { UAParser } from "ua-parser-js";
import { db, visitorSessionsTable, pageViewsTable } from "@workspace/db";
import { eq, sql, gte, count, desc } from "drizzle-orm";
import { lookupIp } from "../lib/ip-intelligence";
import {
  TrackAnalyticsEventBody,
  ListAnalyticsSessionsQueryParams,
  AuthenticateAnalyticsBody,
} from "@workspace/api-zod";

const router: IRouter = Router();

function requireAnalyticsAuth(req: Request, res: Response, next: NextFunction): void {
  const expected = process.env["ANALYTICS_PASSWORD"];
  if (!expected) {
    res.status(503).json({ error: "Analytics password not configured." });
    return;
  }
  const auth = req.headers["authorization"] ?? "";
  const provided = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (provided !== expected) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

router.post("/analytics/auth", (req, res): void => {
  const parsed = AuthenticateAnalyticsBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const expected = process.env["ANALYTICS_PASSWORD"];
  const ok = !!expected && parsed.data.password === expected;
  res.json({ ok });
});

function getClientIp(req: import("express").Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    const first = Array.isArray(forwarded) ? forwarded[0] : forwarded.split(",")[0];
    return first.trim();
  }
  return req.socket.remoteAddress ?? "";
}

function parseUserAgent(ua: string): { deviceType: string; browser: string; os: string } {
  const parser = new UAParser(ua);
  const result = parser.getResult();
  const deviceType = result.device.type ?? "desktop";
  const browser = result.browser.name ?? "Unknown";
  const os = result.os.name ?? "Unknown";
  return { deviceType, browser, os };
}

router.post("/analytics/event", async (req, res): Promise<void> => {
  const parsed = TrackAnalyticsEventBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { sessionId, path, referrer, utmSource, utmMedium, utmCampaign, duration } = parsed.data;
  const ip = getClientIp(req);
  const ua = req.headers["user-agent"] ?? "";

  const existing = await db
    .select({ id: visitorSessionsTable.id })
    .from(visitorSessionsTable)
    .where(eq(visitorSessionsTable.sessionId, sessionId))
    .limit(1);

  if (existing.length === 0) {
    const [ipInfo, uaParsed] = await Promise.all([
      lookupIp(ip),
      Promise.resolve(parseUserAgent(ua)),
    ]);

    await db.insert(visitorSessionsTable).values({
      sessionId,
      ipAddress: ip || null,
      country: ipInfo.country,
      city: ipInfo.city,
      deviceType: uaParsed.deviceType,
      browser: uaParsed.browser,
      os: uaParsed.os,
      referrer: referrer ?? null,
      utmSource: utmSource ?? null,
      utmMedium: utmMedium ?? null,
      utmCampaign: utmCampaign ?? null,
      isVpn: ipInfo.isVpn,
      isProxy: ipInfo.isProxy,
    });
  }

  if (duration != null) {
    const prevViews = await db
      .select({ id: pageViewsTable.id })
      .from(pageViewsTable)
      .where(eq(pageViewsTable.sessionId, sessionId))
      .orderBy(desc(pageViewsTable.createdAt))
      .limit(1);

    if (prevViews.length > 0) {
      await db
        .update(pageViewsTable)
        .set({ duration })
        .where(eq(pageViewsTable.id, prevViews[0].id));
    }
  }

  await db.insert(pageViewsTable).values({ sessionId, path });

  res.json({ ok: true });
});

router.get("/analytics/summary", requireAnalyticsAuth, async (req, res): Promise<void> => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfDay);
  startOfWeek.setDate(startOfDay.getDate() - 7);

  const [
    totalVisitorsRows,
    totalPageViewsRows,
    todayVisitorsRows,
    todayPageViewsRows,
    weekVisitorsRows,
    weekPageViewsRows,
    topPagesRows,
    topCountriesRows,
    topReferrersRows,
    topUtmSourcesRows,
    deviceRows,
    browserRows,
    vpnRows,
    recentSessionsRows,
  ] = await Promise.all([
    db.select({ c: count() }).from(visitorSessionsTable),
    db.select({ c: count() }).from(pageViewsTable),
    db
      .select({ c: count() })
      .from(visitorSessionsTable)
      .where(gte(visitorSessionsTable.createdAt, startOfDay)),
    db
      .select({ c: count() })
      .from(pageViewsTable)
      .where(gte(pageViewsTable.createdAt, startOfDay)),
    db
      .select({ c: count() })
      .from(visitorSessionsTable)
      .where(gte(visitorSessionsTable.createdAt, startOfWeek)),
    db
      .select({ c: count() })
      .from(pageViewsTable)
      .where(gte(pageViewsTable.createdAt, startOfWeek)),
    db
      .select({ label: pageViewsTable.path, count: count() })
      .from(pageViewsTable)
      .groupBy(pageViewsTable.path)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ label: visitorSessionsTable.country, count: count() })
      .from(visitorSessionsTable)
      .where(sql`${visitorSessionsTable.country} is not null`)
      .groupBy(visitorSessionsTable.country)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ label: visitorSessionsTable.referrer, count: count() })
      .from(visitorSessionsTable)
      .where(sql`${visitorSessionsTable.referrer} is not null`)
      .groupBy(visitorSessionsTable.referrer)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ label: visitorSessionsTable.utmSource, count: count() })
      .from(visitorSessionsTable)
      .where(sql`${visitorSessionsTable.utmSource} is not null`)
      .groupBy(visitorSessionsTable.utmSource)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ label: visitorSessionsTable.deviceType, count: count() })
      .from(visitorSessionsTable)
      .where(sql`${visitorSessionsTable.deviceType} is not null`)
      .groupBy(visitorSessionsTable.deviceType)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ label: visitorSessionsTable.browser, count: count() })
      .from(visitorSessionsTable)
      .where(sql`${visitorSessionsTable.browser} is not null`)
      .groupBy(visitorSessionsTable.browser)
      .orderBy(desc(count()))
      .limit(10),
    db
      .select({ c: count() })
      .from(visitorSessionsTable)
      .where(eq(visitorSessionsTable.isVpn, true)),
    db
      .select({
        id: visitorSessionsTable.id,
        sessionId: visitorSessionsTable.sessionId,
        ipAddress: visitorSessionsTable.ipAddress,
        country: visitorSessionsTable.country,
        city: visitorSessionsTable.city,
        deviceType: visitorSessionsTable.deviceType,
        browser: visitorSessionsTable.browser,
        os: visitorSessionsTable.os,
        referrer: visitorSessionsTable.referrer,
        utmSource: visitorSessionsTable.utmSource,
        utmMedium: visitorSessionsTable.utmMedium,
        utmCampaign: visitorSessionsTable.utmCampaign,
        isVpn: visitorSessionsTable.isVpn,
        isProxy: visitorSessionsTable.isProxy,
        createdAt: visitorSessionsTable.createdAt,
        pageViewCount: sql<number>`(select count(*) from page_views where session_id = ${visitorSessionsTable.sessionId})::int`,
      })
      .from(visitorSessionsTable)
      .orderBy(desc(visitorSessionsTable.createdAt))
      .limit(20),
  ]);

  res.json({
    totalVisitors: Number(totalVisitorsRows[0]?.c ?? 0),
    totalPageViews: Number(totalPageViewsRows[0]?.c ?? 0),
    todayVisitors: Number(todayVisitorsRows[0]?.c ?? 0),
    todayPageViews: Number(todayPageViewsRows[0]?.c ?? 0),
    weekVisitors: Number(weekVisitorsRows[0]?.c ?? 0),
    weekPageViews: Number(weekPageViewsRows[0]?.c ?? 0),
    topPages: topPagesRows.map((r) => ({ label: r.label, count: Number(r.count) })),
    topCountries: topCountriesRows.map((r) => ({ label: r.label ?? "", count: Number(r.count) })),
    topReferrers: topReferrersRows.map((r) => ({ label: r.label ?? "", count: Number(r.count) })),
    topUtmSources: topUtmSourcesRows.map((r) => ({ label: r.label ?? "", count: Number(r.count) })),
    deviceBreakdown: deviceRows.map((r) => ({ label: r.label ?? "unknown", count: Number(r.count) })),
    browserBreakdown: browserRows.map((r) => ({ label: r.label ?? "Unknown", count: Number(r.count) })),
    vpnCount: Number(vpnRows[0]?.c ?? 0),
    recentSessions: recentSessionsRows.map((s) => ({
      ...s,
      createdAt: s.createdAt.toISOString(),
      pageViewCount: s.pageViewCount ?? 0,
    })),
  });
});

router.get("/analytics/sessions", requireAnalyticsAuth, async (req, res): Promise<void> => {
  const rawParams = ListAnalyticsSessionsQueryParams.safeParse(req.query);
  const limit = rawParams.success ? (rawParams.data.limit ?? 50) : 50;
  const offset = rawParams.success ? (rawParams.data.offset ?? 0) : 0;

  const sessions = await db
    .select({
      id: visitorSessionsTable.id,
      sessionId: visitorSessionsTable.sessionId,
      ipAddress: visitorSessionsTable.ipAddress,
      country: visitorSessionsTable.country,
      city: visitorSessionsTable.city,
      deviceType: visitorSessionsTable.deviceType,
      browser: visitorSessionsTable.browser,
      os: visitorSessionsTable.os,
      referrer: visitorSessionsTable.referrer,
      utmSource: visitorSessionsTable.utmSource,
      utmMedium: visitorSessionsTable.utmMedium,
      utmCampaign: visitorSessionsTable.utmCampaign,
      isVpn: visitorSessionsTable.isVpn,
      isProxy: visitorSessionsTable.isProxy,
      createdAt: visitorSessionsTable.createdAt,
      pageViewCount: sql<number>`(select count(*) from page_views where session_id = ${visitorSessionsTable.sessionId})::int`,
    })
    .from(visitorSessionsTable)
    .orderBy(desc(visitorSessionsTable.createdAt))
    .limit(limit)
    .offset(offset);

  res.json(
    sessions.map((s) => ({
      ...s,
      createdAt: s.createdAt.toISOString(),
      pageViewCount: s.pageViewCount ?? 0,
    })),
  );
});

export default router;
