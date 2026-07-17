import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Beth Legge Real Estate website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="[TODO: set launch date]">
      <p>
        These Terms of Use govern your access to and use of
        BethLegge[domain].com. This is a template draft — have it reviewed
        by a licensed attorney, and confirm it reflects Nevada real estate
        advertising rules, before publishing.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Use of the Site</h2>
      <p>
        You may use this Site for personal, non-commercial research into
        real estate in the Las Vegas Valley. You may not scrape, copy, or
        republish Site content, photography, or listing data without
        permission.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Listing &amp; market data</h2>
      <p>
        Property listing information displayed or linked from this Site is
        provided by third-party sources (currently Scofield Group; in the
        future, a licensed MLS/IDX feed) and is not independently verified.
        Listing data, pricing, and availability are subject to change
        without notice and should be independently confirmed.
      </p>
      <p>
        [TODO: once a real IDX/MLS feed is connected, insert the exact
        broker-reciprocity attribution language required by the relevant
        MLS association here.]
      </p>

      <h2 className="font-display text-xl text-ink pt-4">No professional advice</h2>
      <p>
        Content on this Site — including neighborhood guides, market
        reports, and blog articles — is for general informational purposes
        only and is not legal, financial, or investment advice. Consult
        appropriate licensed professionals before making real estate
        decisions.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Intellectual property</h2>
      <p>
        Site design, original text, and branding are the property of Beth
        Legge Real Estate. Third-party photography is licensed and
        attributed per source terms.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Limitation of liability</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; without warranties of any
        kind. Beth Legge Real Estate is not liable for damages arising from
        use of, or inability to use, the Site or its content.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Nevada,
        without regard to conflict-of-law principles.
      </p>
    </LegalLayout>
  );
}
