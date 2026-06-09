import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const visitorSessionsTable = pgTable("visitor_sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  ipAddress: text("ip_address"),
  country: text("country"),
  city: text("city"),
  deviceType: text("device_type"),
  browser: text("browser"),
  os: text("os"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  isVpn: boolean("is_vpn").notNull().default(false),
  isProxy: boolean("is_proxy").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertVisitorSessionSchema = createInsertSchema(visitorSessionsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertVisitorSession = z.infer<typeof insertVisitorSessionSchema>;
export type VisitorSession = typeof visitorSessionsTable.$inferSelect;
