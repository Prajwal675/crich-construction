import { getDb, requireAdmin } from "./_db";

type TrafficPayload = {
  path?: string;
  title?: string;
  referrer?: string;
  sessionId?: string;
};

const leadsCollectionName = process.env.MONGODB_COLLECTION_NAME || "leads";
const trafficCollectionName =
  process.env.MONGODB_TRAFFIC_COLLECTION_NAME || "traffic_events";

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function startOfLastSevenDays() {
  const date = new Date();
  date.setDate(date.getDate() - 6);
  date.setHours(0, 0, 0, 0);
  return date;
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const payload = (
      typeof req.body === "string" ? JSON.parse(req.body) : req.body
    ) as TrafficPayload;

    if (!payload.path?.trim()) {
      return res.status(400).json({ error: "Path is required" });
    }

    try {
      const db = await getDb();
      await db.collection(trafficCollectionName).insertOne({
        path: payload.path.slice(0, 300),
        title: payload.title?.slice(0, 300) || null,
        referrer: payload.referrer?.slice(0, 500) || null,
        sessionId: payload.sessionId?.slice(0, 100) || null,
        userAgent: req.headers["user-agent"] || null,
        createdAt: new Date(),
      });

      return res.status(201).json({ ok: true });
    } catch (error) {
      console.error("Traffic tracking failed:", error);
      return res.status(500).json({ error: "Traffic tracking failed" });
    }
  }

  if (req.method === "GET") {
    if (!requireAdmin(req, res)) return;

    const limit = Math.min(Number(req.query.limit) || 100, 250);

    try {
      const db = await getDb();
      const leads = db.collection(leadsCollectionName);
      const traffic = db.collection(trafficCollectionName);
      const today = startOfToday();
      const lastSevenDays = startOfLastSevenDays();

      const [
        totalLeads,
        todayLeads,
        totalViews,
        todayViews,
        uniqueSessions,
        recentLeads,
        recentViews,
        topPages,
        topReferrers,
      ] = await Promise.all([
        leads.countDocuments(),
        leads.countDocuments({ createdAt: { $gte: today } }),
        traffic.countDocuments(),
        traffic.countDocuments({ createdAt: { $gte: today } }),
        traffic.distinct("sessionId", { sessionId: { $ne: null } }),
        leads
          .find({})
          .sort({ createdAt: -1 })
          .limit(limit)
          .project({ userAgent: 0 })
          .toArray(),
        traffic
          .find({})
          .sort({ createdAt: -1 })
          .limit(limit)
          .project({ userAgent: 0 })
          .toArray(),
        traffic
          .aggregate([
            { $match: { createdAt: { $gte: lastSevenDays } } },
            { $group: { _id: "$path", views: { $sum: 1 } } },
            { $sort: { views: -1 } },
            { $limit: 8 },
          ])
          .toArray(),
        traffic
          .aggregate([
            {
              $match: {
                createdAt: { $gte: lastSevenDays },
                referrer: { $nin: [null, ""] },
              },
            },
            { $group: { _id: "$referrer", views: { $sum: 1 } } },
            { $sort: { views: -1 } },
            { $limit: 8 },
          ])
          .toArray(),
      ]);

      return res.status(200).json({
        stats: {
          totalLeads,
          todayLeads,
          totalViews,
          todayViews,
          uniqueSessions: uniqueSessions.length,
        },
        recentLeads,
        recentViews,
        topPages,
        topReferrers,
      });
    } catch (error) {
      console.error("Admin dashboard failed:", error);
      return res.status(500).json({ error: "Admin dashboard failed" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "Method not allowed" });
}
