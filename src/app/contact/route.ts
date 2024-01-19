export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request) {
  const formData = await request.formData();

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const slackUrl = process.env.SLACK_WEBHOOK;
  const payload = {
    text: `New message from ${data.name} <${data.email}>: \n${data.message}`,
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

    return Response.json({
      sent: true,
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      sent: false,
      error: "Server error. Please try again later",
    });
  }
}
