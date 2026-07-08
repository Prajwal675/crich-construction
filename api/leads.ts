import { Resend } from "resend";
import { getDb } from "./_db";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  urgency?: string;
  message?: string;
  acceptPolicy?: boolean;
  source?: string;
  website?: string;
};

const emailPattern = /\S+@\S+\.\S+/;
const collectionName = process.env.MONGODB_COLLECTION_NAME || "leads";
const notificationTo = process.env.LEAD_NOTIFICATION_TO;
const notificationFrom =
  process.env.LEAD_NOTIFICATION_FROM || "Crich Constructions <onboarding@resend.dev>";
const resendApiKey = process.env.RESEND_API_KEY;

function validateLead(payload: LeadPayload) {
  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) errors.name = "Name is required";
  if (!payload.email?.trim()) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(payload.email)) {
    errors.email = "Email is invalid";
  }
  if (!payload.phone?.trim()) errors.phone = "Phone number is required";
  if (!payload.message?.trim()) errors.message = "Message is required";
  if (!payload.acceptPolicy) {
    errors.acceptPolicy = "You must accept the privacy policy";
  }

  return errors;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendLeadEmail(lead: Required<Omit<LeadPayload, "website">>) {
  if (!resendApiKey || !notificationTo) {
    return { sent: false, reason: "Email notification is not configured" };
  }

  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  await resend.emails.send({
    from: notificationFrom,
    to: notificationTo,
    replyTo: lead.email,
    subject: `New ${lead.source} lead: ${lead.name}`,
    html: `
      <h2>New Crich Constructions Lead</h2>
      <p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
      <p><strong>Urgency:</strong> ${escapeHtml(lead.urgency)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(lead.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  return { sent: true };
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as LeadPayload;

  if (payload.website) {
    return res.status(200).json({ ok: true });
  }

  const errors = validateLead(payload);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: "Validation failed", errors });
  }

  const lead = {
    name: payload.name!.trim(),
    email: payload.email!.trim().toLowerCase(),
    phone: payload.phone!.trim(),
    urgency: payload.urgency?.trim() || "Immediately",
    message: payload.message!.trim(),
    acceptPolicy: true,
    source: payload.source?.trim() || "Website form",
  };

  try {
    const db = await getDb();
    const collection = db.collection(collectionName);
    const inserted = await collection.insertOne({
      ...lead,
      status: "new",
      createdAt: new Date(),
      userAgent: req.headers["user-agent"] || null,
      referrer: req.headers.referer || req.headers.referrer || null,
    });

    let emailNotification = { sent: false };
    try {
      emailNotification = await sendLeadEmail(lead);
    } catch (error) {
      console.error("Lead email notification failed:", error);
    }

    return res.status(201).json({
      ok: true,
      leadId: inserted.insertedId.toString(),
      emailNotification,
    });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return res.status(500).json({
      error: "Lead submission failed",
    });
  }
}
