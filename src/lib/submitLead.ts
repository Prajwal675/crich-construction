export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  urgency: string;
  message: string;
  source: string;
}

/**
 * Returns true only if the Formspree endpoint has been configured with a
 * real form URL (not left empty or as the placeholder from .env.example).
 */
export function isFormspreeConfigured(url: string | undefined): url is string {
  return (
    typeof url === "string" &&
    /^https:\/\/formspree\.io\/f\/\w+$/.test(url) &&
    !url.includes("YOUR_FORM_ID_HERE")
  );
}

/**
 * Best-effort save of a lead to MongoDB via the /api/contact serverless
 * function. Failures are logged but never block the user-facing Formspree
 * submission flow.
 */
export async function saveLeadToDatabase(payload: LeadPayload): Promise<void> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error("Failed to store lead in database:", await response.text());
    }
  } catch (error) {
    console.error("Failed to store lead in database:", error);
  }
}

