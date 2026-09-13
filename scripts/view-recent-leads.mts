// Quick local script to view recent lead submissions stored in MongoDB.
// Run with: npx tsx --env-file=.env.local scripts/view-recent-leads.mts

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB || "crich";

if (!uri) {
  console.error("Missing MONGODB_URI. Did you pass --env-file=.env.local?");
  process.exit(1);
}

const client = new MongoClient(uri);

try {
  await client.connect();
  const db = client.db(dbName);
  const leads = await db
    .collection("contacts")
    .find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray();

  if (leads.length === 0) {
    console.log("No leads found in the 'contacts' collection yet.");
  } else {
    console.log(`Found ${leads.length} lead(s) (most recent first):\n`);
    for (const lead of leads) {
      console.log(JSON.stringify(lead, null, 2));
      console.log("---");
    }
  }
} catch (err) {
  console.error("Failed to read leads:", err);
  process.exitCode = 1;
} finally {
  await client.close();
}
