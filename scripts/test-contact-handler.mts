// Local test that exercises the REAL api/contact.ts handler (imported directly,
// not via Vercel CLI) with a mock request/response, simulating a real form POST.
// Run with: npx tsx --env-file=.env.local scripts/test-contact-handler.mts

import type { VercelRequest, VercelResponse } from "@vercel/node";
import handler from "../api/contact.ts";
import { MongoClient } from "mongodb";

function makeMockReq(method: string, body: unknown): VercelRequest {
  return { method, body } as unknown as VercelRequest;
}

function makeMockRes(): VercelResponse & { _status?: number; _json?: unknown } {
  const res: Partial<VercelResponse> & { _status?: number; _json?: unknown } = {};
  res.setHeader = () => res as VercelResponse;
  res.status = (code: number) => {
    res._status = code;
    return res as VercelResponse;
  };
  res.json = (payload: unknown) => {
    res._json = payload;
    return res as VercelResponse;
  };
  return res as VercelResponse & { _status?: number; _json?: unknown };
}

async function run() {
  console.log("--- Test 1: valid submission (should insert into MongoDB) ---");
  const validReq = makeMockReq("POST", {
    name: "Handler Test User",
    email: "handler-test@example.com",
    phone: "+1-555-0199",
    urgency: "Immediately",
    message: "Simulated real form submission via api/contact.ts handler.",
    source: "handler-test",
  });
  const validRes = makeMockRes();
  await handler(validReq, validRes);
  console.log("Status:", validRes._status, "Body:", validRes._json);

  console.log("\n--- Test 2: invalid submission (missing email, should 400) ---");
  const invalidReq = makeMockReq("POST", {
    name: "Bad Request User",
    phone: "+1-555-0199",
  });
  const invalidRes = makeMockRes();
  await handler(invalidReq, invalidRes);
  console.log("Status:", invalidRes._status, "Body:", invalidRes._json);

  console.log("\n--- Test 3: wrong HTTP method (should 405) ---");
  const wrongMethodReq = makeMockReq("GET", {});
  const wrongMethodRes = makeMockRes();
  await handler(wrongMethodReq, wrongMethodRes);
  console.log("Status:", wrongMethodRes._status, "Body:", wrongMethodRes._json);

  // Clean up the document inserted by Test 1 so no test data lingers in Atlas.
  console.log("\n--- Cleaning up test data ---");
  const uri = process.env.MONGODB_URI as string;
  const dbName = process.env.MONGODB_DB || "crich";
  const client = new MongoClient(uri);
  await client.connect();
  const result = await client
    .db(dbName)
    .collection("contacts")
    .deleteMany({ source: "handler-test" });
  console.log(`Deleted ${result.deletedCount} test document(s).`);
  await client.close();

  const pass = validRes._status === 201 && invalidRes._status === 400 && wrongMethodRes._status === 405;
  console.log(pass ? "\n✅ All handler tests passed." : "\n❌ Some handler tests failed.");
  process.exitCode = pass ? 0 : 1;
}

run().catch((err) => {
  console.error("Test run crashed:", err);
  process.exitCode = 1;
});
