import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb } from "./_lib/mongodb";

const MAX_LEN = {
  name: 200,
  email: 320,
  phone: 30,
  urgency: 100,
  message: 5000,
  source: 50,
};

function isNonEmptyString(value: unknown, maxLen: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLen;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};
  const { name, email, phone, urgency, message, source } = body as Record<string, unknown>;

  if (!isNonEmptyString(name, MAX_LEN.name)) {
    return res.status(400).json({ error: "Invalid or missing name" });
  }
  if (!isNonEmptyString(email, MAX_LEN.email) || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Invalid or missing email" });
  }
  if (!isNonEmptyString(phone, MAX_LEN.phone)) {
    return res.status(400).json({ error: "Invalid or missing phone" });
  }
  if (message !== undefined && (typeof message !== "string" || message.length > MAX_LEN.message)) {
    return res.status(400).json({ error: "Invalid message" });
  }
  if (urgency !== undefined && (typeof urgency !== "string" || urgency.length > MAX_LEN.urgency)) {
    return res.status(400).json({ error: "Invalid urgency" });
  }

  // Build the document explicitly from validated primitives only — never
  // spread the raw request body — to avoid NoSQL injection / unexpected keys.
  const doc = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    urgency: typeof urgency === "string" ? urgency.trim() : "Immediately",
    message: typeof message === "string" ? message.trim() : "",
    source: typeof source === "string" && source.length <= MAX_LEN.source ? source : "website",
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    await db.collection("contacts").insertOne(doc);
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    return res.status(500).json({ error: "Failed to save submission" });
  }
}
