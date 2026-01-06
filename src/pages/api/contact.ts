import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = JSON.parse(req.body);

  if (!data.email || !data.name || !data.message) {
    return res.status(400).json({
      sent: false,
      error: "Missing field(s)",
    });
  }

  const slackUrl = process.env.SLACK_WEBHOOK;
  const payload = {
    text: `New message from ${data.name} <${data.email}>: \n${data.message} \n\ncc: @vitaly`,
  };

  try {
    if (!slackUrl) throw new Error("Missing Slack Webhook URL");

    await fetch(slackUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json({
      sent: true,
    });
  } catch (err) {
    return res.status(500).json({
      sent: false,
      error: "Server error. Please try again later",
    });
  }
}
