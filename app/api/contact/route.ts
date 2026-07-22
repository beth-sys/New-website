import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Validates the submission, logs it server-side, and — if
 * FOLLOWUPBOSS_API_KEY is set — creates a lead in Follow Up Boss via
 * their Events API. If the env var isn't set, this silently falls back
 * to logging only, so the form works fine with or without a CRM
 * connected.
 *
 * Follow Up Boss auth: HTTP Basic Auth using the API key as the
 * username and an empty password. Get a key from FUB under
 * Admin -> API. Docs: https://docs.followupboss.com/reference/events-create
 *
 * IMPORTANT — I couldn't call the live Follow Up Boss API to verify
 * this request shape from this environment (no outbound network
 * access here). It follows FUB's documented Events API pattern, but
 * test one real submission end-to-end after adding your API key and
 * check the lead actually lands in FUB before relying on this.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // eslint-disable-next-line no-console
  console.log("New contact form submission", { name, email, phone, message });

  const fubApiKey = process.env.FOLLOWUPBOSS_API_KEY;

  if (fubApiKey) {
    try {
      const [firstName, ...rest] = String(name).trim().split(" ");
      const lastName = rest.join(" ") || "-"; // FUB expects a lastName; "-" as a safe fallback

      const fubResponse = await fetch("https://api.followupboss.com/v1/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${fubApiKey}:`).toString("base64")}`,
        },
        body: JSON.stringify({
          source: "Website",
          system: "BethLeggeWebsite",
          type: "General Inquiry",
          message: message,
          person: {
            firstName,
            lastName,
            emails: [{ value: email }],
            phones: phone ? [{ value: phone }] : [],
          },
        }),
      });

      if (!fubResponse.ok) {
        const errorText = await fubResponse.text();
        // eslint-disable-next-line no-console
        console.error("Follow Up Boss lead creation failed", fubResponse.status, errorText);
        // Don't fail the user-facing request over a CRM hiccup — the
        // submission is already logged above and can be followed up
        // manually. Just surface the failure server-side.
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Follow Up Boss request threw an error", err);
    }
  }

  return NextResponse.json({ ok: true });
}

