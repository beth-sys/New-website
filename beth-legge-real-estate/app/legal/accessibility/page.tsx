import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to an accessible website for all visitors.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement" lastUpdated="[TODO: set launch date]">
      <p>
        Beth Legge Real Estate is committed to ensuring this website is
        accessible to everyone, including people with disabilities. We aim
        to conform to the Web Content Accessibility Guidelines (WCAG) 2.1,
        Level AA.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">What we&rsquo;ve done</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Semantic HTML structure and heading hierarchy throughout the site</li>
        <li>Visible keyboard focus states on all interactive elements</li>
        <li>Alt text on meaningful images once real photography is added</li>
        <li>Support for reduced-motion preferences</li>
        <li>Sufficient color contrast between text and background</li>
      </ul>

      <h2 className="font-display text-xl text-ink pt-4">Ongoing work</h2>
      <p>
        Accessibility is an ongoing effort. As new pages and features are
        added — including third-party embeds like property search, maps,
        and scheduling — we review them against the same standard.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Feedback</h2>
      <p>
        If you encounter an accessibility barrier on this site, please let
        us know via the{" "}
        <a href="/contact" className="underline underline-offset-4 hover:text-gold-dark">
          Contact page
        </a>{" "}
        or by emailing accessibility@[domain].com [TODO: confirm address].
        We&rsquo;ll work to address it promptly.
      </p>
    </LegalLayout>
  );
}
