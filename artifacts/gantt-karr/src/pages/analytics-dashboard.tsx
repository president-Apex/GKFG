import { useState, useEffect, useRef } from "react";
import { useGetAnalyticsSummary, useAuthenticateAnalytics } from "@workspace/api-client-react";
import { setAuthTokenGetter } from "@workspace/api-client-react";
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
const AUTH_KEY = "gkfg_analytics_auth";

// ── Lock Screen ──────────────────────────────────────────────────────────────

function LockScreen({ onUnlock }: { onUnlock: (pw: string) => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const mutation = useAuthenticateAnalytics();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const result = await mutation.mutateAsync({ data: { password: pw } });
      if (result.ok) {
        sessionStorage.setItem(AUTH_KEY, pw);
        onUnlock(pw);
      } else {
        setError("Incorrect password.");
        setPw("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Could not connect. Try again.");
    }
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ background: NAVY }}
    >
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "rgba(201,168,76,0.15)" }}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke={GOLD}
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-white">Analytics</h1>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Gantt Key Formation Group
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            ref={inputRef}
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
            className="w-full rounded-lg border px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2"
            style={{
              borderColor: error ? "#f87171" : "rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.97)",
            }}
          />
          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={!pw || mutation.isPending}
            className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
            style={{ background: GOLD }}
          >
            {mutation.isPending ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Dashboard components ──────────────────────────────────────────────────────

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

function HorizontalBar({ data, maxCount }: { data: { label: string; count: number }[]; maxCount: number }) {
  return (
    <div className="space-y-2">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3 text-sm">
          <span className="w-36 shrink-0 truncate text-right text-gray-600" title={d.label}>
            {d.label}
          </span>
          <div className="relative h-5 flex-1 overflow-hidden rounded bg-gray-100">
            <div
              className="absolute inset-y-0 left-0 rounded transition-all"
              style={{ width: `${Math.max(2, (d.count / maxCount) * 100)}%`, background: GOLD }}
            />
          </div>
          <span className="w-8 shrink-0 text-right font-medium text-gray-700">{d.count}</span>
        </div>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: NAVY }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

function Dashboard({ onLock }: { onLock: () => void }) {
  const { data: summary, isLoading, error } = useGetAnalyticsSummary();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#f8f7f4" }}>
        <div className="text-center">
          <div
            className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4"
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
        <div className="text-center">
          <p className="text-sm text-red-500">Could not load analytics data.</p>
          <button onClick={onLock} className="mt-3 text-xs text-gray-400 underline">
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const deviceMax = Math.max(...summary.deviceBreakdown.map((d) => d.count), 1);
  const pagesMax = Math.max(...summary.topPages.map((d) => d.count), 1);
  const countriesMax = Math.max(...summary.topCountries.map((d) => d.count), 1);
  const referrersMax = Math.max(...summary.topReferrers.map((d) => d.count), 1);
  const vpnPct =
    summary.totalVisitors > 0
      ? Math.round((summary.vpnCount / summary.totalVisitors) * 100)
      : 0;

  return (
    <div className="min-h-screen px-4 py-10 md:px-8" style={{ background: "#f8f7f4" }}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: NAVY }}>
              Visitor Analytics
            </h1>
            <p className="mt-1 text-sm text-gray-500">First-party data — ganttformation.com</p>
          </div>
          <button
            onClick={onLock}
            className="mt-1 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 shadow-sm hover:text-gray-700"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Lock
          </button>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <StatCard label="Total Visitors" value={summary.totalVisitors.toLocaleString()} />
          <StatCard label="Total Page Views" value={summary.totalPageViews.toLocaleString()} />
          <StatCard label="Today Visitors" value={summary.todayVisitors.toLocaleString()} sub={`${summary.todayPageViews} page views`} />
          <StatCard label="This Week" value={summary.weekVisitors.toLocaleString()} sub={`${summary.weekPageViews} page views`} />
          <StatCard label="VPN / Hosting" value={`${vpnPct}%`} sub={`${summary.vpnCount} flagged`} />
          <StatCard
            label="Avg Pages / Visit"
            value={summary.totalVisitors > 0 ? (summary.totalPageViews / summary.totalVisitors).toFixed(1) : "0"}
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

        {/* Referrers + UTM */}
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

        {/* Device + Browser */}
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
              <HorizontalBar
                data={summary.browserBreakdown}
                maxCount={Math.max(...summary.browserBreakdown.map((d) => d.count), 1)}
              />
            )}
          </Section>
        </div>

        {/* Recent Sessions */}
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
                    <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
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
                      <td className="py-2 pr-4 capitalize text-gray-700">{s.deviceType ?? "—"}</td>
                      <td className="py-2 pr-4 text-gray-700">
                        {[s.browser, s.os].filter(Boolean).join(" / ") || "—"}
                      </td>
                      <td className="py-2 pr-4 max-w-[180px] truncate text-gray-600" title={s.utmSource ?? s.referrer ?? undefined}>
                        {s.utmSource
                          ? `utm: ${s.utmSource}`
                          : s.referrer
                            ? (() => { try { return new URL(s.referrer).hostname; } catch { return s.referrer; } })()
                            : "direct"}
                      </td>
                      <td className="py-2 pr-4 text-center text-gray-700">{s.pageViewCount}</td>
                      <td className="py-2 space-x-1">
                        {s.isVpn && (
                          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">VPN</span>
                        )}
                        {s.isProxy && (
                          <span className="rounded bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-600">Proxy</span>
                        )}
                        {!s.isVpn && !s.isProxy && <span className="text-gray-300">—</span>}
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

// ── Page entry point ──────────────────────────────────────────────────────────

export default function AnalyticsDashboard() {
  const [authed, setAuthed] = useState<boolean>(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored) {
      setAuthTokenGetter(() => stored);
      return true;
    }
    return false;
  });

  function handleUnlock(pw: string) {
    setAuthTokenGetter(() => pw);
    setAuthed(true);
  }

  function handleLock() {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthTokenGetter(null);
    setAuthed(false);
  }

  if (!authed) return <LockScreen onUnlock={handleUnlock} />;
  return <Dashboard onLock={handleLock} />;
}
