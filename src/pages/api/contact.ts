import type { NextApiRequest, NextApiResponse } from "next";

type ContactMessage = { name: string; email: string; message: string };

const LIMITS = { name: 100, email: 254, message: 5000, minMessage: 10 };
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

  const fields = readFields(data);

  const botReason = detectBot(fields);
  if (botReason) {
    console.warn("contact: dropped as bot", { reason: botReason });
    return res.status(200).json({ sent: true });
  }

  const validated = validate(fields);
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

function readFields(data: Record<string, unknown>): ContactMessage {
  return {
    name: trimString(data.name),
    email: trimString(data.email),
    message: trimString(data.message),
  };
}

function validate({
  name,
  email,
  message,
}: ContactMessage): ContactMessage | { error: string } {
  const messageLength = Array.from(message).length;

  if (!name || !email || !message) return { error: "Missing field(s)" };
  if (name.length > LIMITS.name) return { error: "Name is too long" };
  if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email)) {
    return { error: "Invalid email address" };
  }
  if (messageLength < LIMITS.minMessage) {
    return { error: "Message is too short" };
  }
  if (messageLength > LIMITS.message) {
    return { error: "Message is too long" };
  }

  return { name, email, message };
}

// Bot probes send random-case names and letterless (numeric) messages.
// Returns the reason so the drop can be logged without the PII.
function detectBot({ name, message }: ContactMessage): string | null {
  if (message && !/\p{L}/u.test(message)) return "no letters in message";
  if (name.split(/\s+/).some(isRandomCaseWord)) return "random-case name";
  return null;
}

function isRandomCaseWord(word: string): boolean {
  const caseFlips = word.match(/\p{Ll}\p{Lu}/gu)?.length ?? 0;
  return word.length >= 12 && caseFlips >= 3;
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
