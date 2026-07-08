import { type FormEvent, useEffect, useMemo, useState } from "react";
import { Eye, KeyRound, RefreshCw, Users, Mail, CalendarDays } from "lucide-react";

type Lead = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  urgency: string;
  message: string;
  source: string;
  status: string;
  createdAt: string;
};

type TrafficEvent = {
  _id: string;
  path: string;
  title?: string;
  referrer?: string;
  sessionId?: string;
  createdAt: string;
};

type DashboardData = {
  stats: {
    totalLeads: number;
    todayLeads: number;
    totalViews: number;
    todayViews: number;
    uniqueSessions: number;
  };
  recentLeads: Lead[];
  recentViews: TrafficEvent[];
  topPages: Array<{ _id: string; views: number }>;
  topReferrers: Array<{ _id: string; views: number }>;
};

const tokenStorageKey = "crichAdminToken";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

const Admin = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem(tokenStorageKey) || "");
  const [draftToken, setDraftToken] = useState(token);
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isAuthed = useMemo(() => Boolean(token), [token]);

  const fetchDashboard = async (adminToken = token) => {
    if (!adminToken) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/traffic?limit=100", {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "Could not load dashboard");
      }

      setData(result);
    } catch (error) {
      console.error("Admin dashboard load failed:", error);
      setError("Could not load the dashboard. Check the admin token and API env vars.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchDashboard(token);
    }
  }, [token]);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem(tokenStorageKey, draftToken);
    setToken(draftToken);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(tokenStorageKey);
    setToken("");
    setDraftToken("");
    setData(null);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-buildacre-darkgray sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-buildacre-orange">
              Crich Constructions
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">Admin Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Watch lead submissions and website traffic from the live site.
            </p>
          </div>

          {isAuthed && (
            <div className="flex gap-3">
              <button
                onClick={() => fetchDashboard()}
                disabled={isLoading}
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-100 disabled:opacity-60"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Lock
              </button>
            </div>
          )}
        </div>

        {!isAuthed ? (
          <form
            onSubmit={handleLogin}
            className="mx-auto mt-20 max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-buildacre-blue/10 text-buildacre-blue">
              <KeyRound className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold">Enter Admin Token</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the value from `ADMIN_DASHBOARD_TOKEN`.
            </p>
            <input
              type="password"
              value={draftToken}
              onChange={(event) => setDraftToken(event.target.value)}
              className="mt-5 w-full rounded-md border border-slate-300 px-4 py-3 focus:border-buildacre-blue focus:outline-none focus:ring-2 focus:ring-buildacre-blue/20"
              placeholder="Admin token"
            />
            <button type="submit" className="btn-primary mt-4 w-full">
              Open Dashboard
            </button>
          </form>
        ) : (
          <>
            {error && (
              <p className="mb-6 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["Total Views", data?.stats.totalViews || 0, Eye],
                ["Views Today", data?.stats.todayViews || 0, CalendarDays],
                ["Unique Sessions", data?.stats.uniqueSessions || 0, Users],
                ["Total Leads", data?.stats.totalLeads || 0, Mail],
                ["Leads Today", data?.stats.todayLeads || 0, CalendarDays],
              ].map(([label, value, Icon]) => (
                <div key={label as string} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground">{label as string}</p>
                    <Icon className="h-5 w-5 text-buildacre-orange" />
                  </div>
                  <p className="mt-3 text-3xl font-bold">{value as number}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold">Top Pages: Last 7 Days</h2>
                <div className="mt-4 space-y-3">
                  {(data?.topPages || []).map((page) => (
                    <div key={page._id} className="flex items-center justify-between gap-4 text-sm">
                      <span className="truncate">{page._id}</span>
                      <span className="font-semibold">{page.views}</span>
                    </div>
                  ))}
                  {data?.topPages?.length === 0 && (
                    <p className="text-sm text-muted-foreground">No page views yet.</p>
                  )}
                </div>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold">Top Referrers: Last 7 Days</h2>
                <div className="mt-4 space-y-3">
                  {(data?.topReferrers || []).map((referrer) => (
                    <div key={referrer._id} className="flex items-center justify-between gap-4 text-sm">
                      <span className="truncate">{referrer._id}</span>
                      <span className="font-semibold">{referrer.views}</span>
                    </div>
                  ))}
                  {data?.topReferrers?.length === 0 && (
                    <p className="text-sm text-muted-foreground">No external referrers yet.</p>
                  )}
                </div>
              </section>
            </div>

            <section className="mt-8 rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <h2 className="text-lg font-bold">Generated Leads</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Latest enquiries captured from the hero and contact forms.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Contact</th>
                      <th className="px-4 py-3">Urgency</th>
                      <th className="px-4 py-3">Source</th>
                      <th className="px-4 py-3">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(data?.recentLeads || []).map((lead) => (
                      <tr key={lead._id} className="align-top">
                        <td className="whitespace-nowrap px-4 py-3">{formatDate(lead.createdAt)}</td>
                        <td className="px-4 py-3 font-medium">{lead.name}</td>
                        <td className="px-4 py-3">
                          <a className="block text-buildacre-blue hover:underline" href={`mailto:${lead.email}`}>
                            {lead.email}
                          </a>
                          <a className="block text-buildacre-blue hover:underline" href={`tel:${lead.phone}`}>
                            {lead.phone}
                          </a>
                        </td>
                        <td className="px-4 py-3">{lead.urgency}</td>
                        <td className="px-4 py-3">{lead.source}</td>
                        <td className="max-w-md px-4 py-3 text-muted-foreground">{lead.message}</td>
                      </tr>
                    ))}
                    {data?.recentLeads?.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                          No leads captured yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8 rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-5">
                <h2 className="text-lg font-bold">Recent Traffic</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Latest tracked page views.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Path</th>
                      <th className="px-4 py-3">Referrer</th>
                      <th className="px-4 py-3">Session</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {(data?.recentViews || []).map((event) => (
                      <tr key={event._id}>
                        <td className="whitespace-nowrap px-4 py-3">{formatDate(event.createdAt)}</td>
                        <td className="px-4 py-3">{event.path}</td>
                        <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">
                          {event.referrer || "Direct"}
                        </td>
                        <td className="max-w-[160px] truncate px-4 py-3 text-muted-foreground">
                          {event.sessionId || "-"}
                        </td>
                      </tr>
                    ))}
                    {data?.recentViews?.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                          No traffic captured yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Admin;
