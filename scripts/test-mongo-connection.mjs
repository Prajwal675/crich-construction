// One-off local connectivity test for the /api/contact MongoDB integration.
// Run with: node --env-file=.env.local scripts/test-mongo-connection.mjs
// Inserts a test document, reads it back, then deletes it (leaves no junk data).

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "crich";

if (!uri) {
  console.error("Missing MONGODB_URI. Did you pass --env-file=.env.local?");
  process.exit(1);
}

const client = new MongoClient(uri);

try {
  console.log("Connecting to MongoDB Atlas...");
  await client.connect();
  console.log("Connected.");

  const db = client.db(dbName);
  const collection = db.collection("contacts");

  const testDoc = {
    name: "Test User",
    email: "test@example.com",
    phone: "+1-555-0100",
    urgency: "Immediately",
    message: "This is an automated connectivity test from scripts/test-mongo-connection.mjs",
    source: "connectivity-test",
    createdAt: new Date(),
  };

  console.log("Inserting test document...");
  const insertResult = await collection.insertOne(testDoc);
  console.log("Inserted with _id:", insertResult.insertedId.toString());

  console.log("Reading it back...");
  const found = await collection.findOne({ _id: insertResult.insertedId });
  console.log("Found document:", found);

  console.log("Cleaning up test document...");
  await collection.deleteOne({ _id: insertResult.insertedId });
  console.log("Test document deleted.");

  console.log("\n✅ MongoDB connection + insert + read + delete all succeeded.");
} catch (err) {
  console.error("\n❌ Test failed:", err);
  process.exitCode = 1;
} finally {
  await client.close();
}
