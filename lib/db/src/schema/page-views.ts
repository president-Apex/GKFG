import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { visitorSessionsTable } from "./visitor-sessions";

export const pageViewsTable = pgTable("page_views", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id")
    .notNull()
    .references(() => visitorSessionsTable.sessionId),
  path: text("path").notNull(),
  duration: integer("duration"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPageViewSchema = createInsertSchema(pageViewsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertPageView = z.infer<typeof insertPageViewSchema>;
export type PageView = typeof pageViewsTable.$inferSelect;
