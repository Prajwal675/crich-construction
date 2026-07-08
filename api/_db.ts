import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "crich_construction";

let cachedClient: MongoClient | null = null;

export async function getDb() {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(mongoUri);
    await cachedClient.connect();
  }

  return cachedClient.db(dbName);
}

export function requireAdmin(req: any, res: any) {
  const expectedToken = process.env.ADMIN_DASHBOARD_TOKEN;
  const authHeader = req.headers.authorization || "";
  const providedToken = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : req.headers["x-admin-token"];

  if (!expectedToken) {
    res.status(503).json({ error: "Admin dashboard is not configured" });
    return false;
  }

  if (providedToken !== expectedToken) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }

  return true;
}
