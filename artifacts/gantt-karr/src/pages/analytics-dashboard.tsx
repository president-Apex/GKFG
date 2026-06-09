import { useGetAnalyticsSummary } from "@workspace/api-client-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const NAVY = "#1a2f4e";
const GOLD = "#C9A84C";

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: number | string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-bold" style={{ color: NAVY }}>
        {value}
      </p>
      {sub && <p className="mt-0.5 text-xs text-gray-400">{sub}</p>}
    </div>
  );
}

function HorizontalBar({
  data,
  maxCount,
}: {
  data: { label: string; count: number }[];
  maxCount: number;
}) {
  return (
    <div className="space-y-2">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3 text-sm">
          <span
            className="w-36 shrink-0 truncate text-right text-gray-600"
            title={d.label}
          >
            {d.label}
          </span>
          <div className="relative h-5 flex-1 overflow-hidden rounded bg-gray-100">
            <div
              className="absolute inset-y-0 left-0 rounded transition-all"
              style={{
                width: `${Math.max(2, (d.count / maxCount) * 100)}%`,
                background: GOLD,
              }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-medium text-gray-700">
            {d.count}
          </span>
        </div>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3
        className="mb-4 text-sm font-semibold uppercase tracking-wider"
        style={{ color: NAVY }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function AnalyticsDashboard() {
  const { data: summary, isLoading, error } = useGetAnalyticsSummary();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#f8f7f4" }}>
        <div className="text-center">
          <div
            className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
            style={{ borderColor: GOLD, borderTopColor: "transparent" }}
          />
          <p className="text-sm text-gray-500">Loading analytics…</p>
        </div>
      </div>
    );
  }

  if (error || !summary) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#f8f7f4" }}>
        <p className="text-sm text-red-500">Could not load analytics data.</p>
      </div>
    );
  }

  const deviceMax = Math.max(...(summary.deviceBreakdown.map((d) => d.count) ?? [1]), 1);
  const browserMax = Math.max(...(summary.browserBreakdown.map((d) => d.count) ?? [1]), 1);
  const pagesMax = Math.max(...(summary.topPages.map((d) => d.count) ?? [1]), 1);
  const countriesMax = Math.max(...(summary.topCountries.map((d) => d.count) ?? [1]), 1);
  const referrersMax = Math.max(...(summary.topReferrers.map((d) => d.count) ?? [1]), 1);

  const vpnPct =
    summary.totalVisitors > 0
      ? Math.round((summary.vpnCount / summary.totalVisitors) * 100)
      : 0;

  return (
    <div className="min-h-screen px-4 py-10 md:px-8" style={{ background: "#f8f7f4" }}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: NAVY }}>
            Visitor Analytics
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            First-party data — ganttformation.com
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <StatCard label="Total Visitors" value={summary.totalVisitors.toLocaleString()} />
          <StatCard label="Total Page Views" value={summary.totalPageViews.toLocaleString()} />
          <StatCard
            label="Today Visitors"
            value={summary.todayVisitors.toLocaleString()}
            sub={`${summary.todayPageViews} page views`}
          />
          <StatCard
            label="This Week"
            value={summary.weekVisitors.toLocaleString()}
            sub={`${summary.weekPageViews} page views`}
          />
          <StatCard
            label="VPN / Hosting"
            value={`${vpnPct}%`}
            sub={`${summary.vpnCount} flagged`}
          />
          <StatCard
            label="Avg Pages / Visit"
            value={
              summary.totalVisitors > 0
                ? (summary.totalPageViews / summary.totalVisitors).toFixed(1)
                : "0"
            }
          />
        </div>

        {/* Top Pages + Countries */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <Section title="Top Pages">
            {summary.topPages.length === 0 ? (
              <p className="text-sm text-gray-400">No data yet.</p>
            ) : (
              <HorizontalBar data={summary.topPages} maxCount={pagesMax} />
            )}
          </Section>
          <Section title="Top Countries">
            {summary.topCountries.length === 0 ? (
              <p className="text-sm text-gray-400">No data yet.</p>
            ) : (
              <HorizontalBar data={summary.topCountries} maxCount={countriesMax} />
            )}
          </Section>
        </div>

        {/* Referrers + UTM Sources */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <Section title="Top Referrers">
            {summary.topReferrers.length === 0 ? (
              <p className="text-sm text-gray-400">No referrer data yet.</p>
            ) : (
              <HorizontalBar data={summary.topReferrers} maxCount={referrersMax} />
            )}
          </Section>
          <Section title="UTM Sources">
            {summary.topUtmSources.length === 0 ? (
              <p className="text-sm text-gray-400">No UTM data yet.</p>
            ) : (
              <HorizontalBar data={summary.topUtmSources} maxCount={Math.max(...summary.topUtmSources.map((d) => d.count), 1)} />
            )}
          </Section>
        </div>

        {/* Device + Browser breakdown charts */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <Section title="Device Type">
            {summary.deviceBreakdown.length === 0 ? (
              <p className="text-sm text-gray-400">No data yet.</p>
            ) : (
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={summary.deviceBreakdown} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="label" type="category" tick={{ fontSize: 12 }} width={80} />
                    <Tooltip />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                      {summary.deviceBreakdown.map((_, i) => (
                        <Cell key={i} fill={i === 0 ? NAVY : GOLD} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </Section>
          <Section title="Browser">
            {summary.browserBreakdown.length === 0 ? (
              <p className="text-sm text-gray-400">No data yet.</p>
            ) : (
              <HorizontalBar data={summary.browserBreakdown} maxCount={browserMax} />
            )}
          </Section>
        </div>

        {/* Recent Sessions Table */}
        <Section title="Recent Visitors">
          {summary.recentSessions.length === 0 ? (
            <p className="text-sm text-gray-400">No visitors yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <th className="pb-3 pr-4">Time</th>
                    <th className="pb-3 pr-4">Location</th>
                    <th className="pb-3 pr-4">Device</th>
                    <th className="pb-3 pr-4">Browser / OS</th>
                    <th className="pb-3 pr-4">Source</th>
                    <th className="pb-3 pr-4">Pages</th>
                    <th className="pb-3">Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.recentSessions.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="py-2 pr-4 text-gray-500">
                        {new Date(s.createdAt).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-2 pr-4 text-gray-700">
                        {[s.city, s.country].filter(Boolean).join(", ") || "—"}
                      </td>
                      <td className="py-2 pr-4 capitalize text-gray-700">
                        {s.deviceType ?? "—"}
                      </td>
                      <td className="py-2 pr-4 text-gray-700">
                        {[s.browser, s.os].filter(Boolean).join(" / ") || "—"}
                      </td>
                      <td className="py-2 pr-4 max-w-[180px] truncate text-gray-600" title={s.utmSource ?? s.referrer ?? undefined}>
                        {s.utmSource
                          ? `utm: ${s.utmSource}`
                          : s.referrer
                            ? new URL(s.referrer).hostname
                            : "direct"}
                      </td>
                      <td className="py-2 pr-4 text-center text-gray-700">
                        {s.pageViewCount}
                      </td>
                      <td className="py-2 space-x-1">
                        {s.isVpn && (
                          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                            VPN
                          </span>
                        )}
                        {s.isProxy && (
                          <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-600">
                            Proxy
                          </span>
                        )}
                        {!s.isVpn && !s.isProxy && (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
