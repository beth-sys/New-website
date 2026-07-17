import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Beth Legge Real Estate collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[TODO: set launch date]">
      <p>
        This Privacy Policy describes how BethLegge[domain].com (the
        &ldquo;Site&rdquo;) collects, uses, and shares information when you
        visit or interact with it. This is a template draft — have it
        reviewed by a licensed attorney before publishing, and confirm it
        matches how the site actually operates once built.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Information we collect</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Information you provide directly</strong> — name, email,
          phone number, and message content when you submit the contact
          form, request a home valuation, or schedule a consultation.
        </li>
        <li>
          <strong>Usage data</strong> — pages visited, time on site, and
          general device/browser information, collected automatically via
          Vercel Analytics and Vercel Speed Insights.
        </li>
        <li>
          <strong>Cookies</strong> — used for essential site function and,
          where you consent, analytics. See the cookie banner for controls.
        </li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-4">How we use information</h2>
      <p>
        We use the information you provide to respond to inquiries,
        schedule consultations, and provide requested real estate
        information. We do not sell your personal information to third
        parties.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Third-party services</h2>
      <p>
        The Site embeds or links to third-party services that have their
        own privacy practices, including:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Property search (Scofield Group / future IDX-MLS provider)</li>
        <li>Calendly, for scheduling consultations</li>
        <li>Google Maps, for neighborhood and office location maps</li>
      </ul>
      <p>
        Interacting with these embedded services is subject to that
        provider&rsquo;s own privacy policy, not this one.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Your choices</h2>
      <p>
        You can decline non-essential cookies via the cookie banner, and
        you can request that we delete contact information you&rsquo;ve
        submitted by emailing the address on our{" "}
        <a href="/contact" className="underline underline-offset-4 hover:text-gold-dark">
          Contact page
        </a>
        .
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Contact</h2>
      <p>
        Questions about this policy can be sent to
        privacy@[domain].com [TODO: confirm address].
      </p>
    </LegalLayout>
  );
}
