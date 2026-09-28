import type { NextApiRequest, NextApiResponse } from "next";

type ContactMessage = { name: string; email: string; message: string };

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ sent: false, error: "Method not allowed" });
  }

  const data = parseBody(req.body);
  if (!data) {
    return res.status(400).json({ sent: false, error: "Invalid request" });
  }

  // Honeypot: bots fill the hidden field. Pretend success so they don't adapt.
  if (data.csrf) {
    return res.status(200).json({ sent: true });
  }

  const validated = validate(data);
  if ("error" in validated) {
    return res.status(400).json({ sent: false, error: validated.error });
  }

  try {
    await postToSlack(validated);
    return res.status(200).json({ sent: true });
  } catch (err) {
    console.error("contact: failed to post to Slack", err);
    return res.status(500).json({
      sent: false,
      error: "Server error. Please try again later",
    });
  }
}

function parseBody(body: unknown): Record<string, unknown> | null {
  try {
    const parsed = typeof body === "string" ? JSON.parse(body) : body;
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function validate(
  data: Record<string, unknown>,
): ContactMessage | { error: string } {
  const name = trimString(data.name);
  const email = trimString(data.email);
  const message = trimString(data.message);

  if (!name || !email || !message) return { error: "Missing field(s)" };
  if (name.length > LIMITS.name) return { error: "Name is too long" };
  if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email)) {
    return { error: "Invalid email address" };
  }
  if (message.length > LIMITS.message) return { error: "Message is too long" };

  return { name, email, message };
}

function trimString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeSlack(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function postToSlack({ name, email, message }: ContactMessage) {
  const slackUrl = process.env.SLACK_WEBHOOK;
  if (!slackUrl) throw new Error("Missing Slack Webhook URL");

  const payload = {
    text: `New message from ${escapeSlack(name)} <${escapeSlack(email)}>: \n${escapeSlack(message)} \n\ncc: @vitaly`,
  };

  const response = await fetch(slackUrl, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error(`Slack responded ${response.status}`);
}
