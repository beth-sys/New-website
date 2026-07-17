import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Phase 1: validates and logs the submission server-side so the form is
 * fully wired end-to-end, but does not yet send anywhere.
 *
 * Phase 4 TODO: replace the console.log below with:
 *   - an email send (e.g. Resend, SendGrid) to Beth's inbox, and/or
 *   - a lead-creation call to the chosen CRM (see master prompt —
 *     Follow Up Boss / kvCORE / HubSpot, once confirmed).
 * Keep this route's request/response shape stable so ContactForm.tsx
 * doesn't need to change when the backend is swapped in.
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

  return NextResponse.json({ ok: true });
}
