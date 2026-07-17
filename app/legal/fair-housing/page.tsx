import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Fair Housing Statement",
  description: "Beth Legge Real Estate's commitment to equal housing opportunity.",
};

export default function FairHousingPage() {
  return (
    <LegalLayout title="Fair Housing Statement" lastUpdated="[TODO: set launch date]">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-sm border border-charcoal/30 text-[10px]">
          EHO
        </span>
        <span className="text-sm text-stone">Equal Housing Opportunity</span>
      </div>

      <p>
        Beth Legge Real Estate is committed to full compliance with the
        federal Fair Housing Act and Nevada fair housing law. We provide
        real estate brokerage services to all persons without regard to
        race, color, religion, sex, national origin, familial status, or
        disability, and without regard to any other characteristic
        protected under applicable federal, state, or local law.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Our commitment</h2>
      <p>
        This commitment extends to every part of how we operate: showing
        properties, presenting offers, describing neighborhoods, and
        advertising listings. Neighborhood and lifestyle content on this
        site is intended to describe amenities, geography, and market
        characteristics — never to suggest that any community is more or
        less suitable for someone based on a protected characteristic.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">
        If you believe you&rsquo;ve experienced discrimination
      </h2>
      <p>
        You have the right to file a complaint with the U.S. Department of
        Housing and Urban Development (HUD) or the Nevada Real Estate
        Division if you believe you have experienced housing
        discrimination. HUD accepts complaints through its website and by
        phone.
      </p>

      <h2 className="font-display text-xl text-ink pt-4">Questions</h2>
      <p>
        Questions about this statement can be directed to us via the{" "}
        <a href="/contact" className="underline underline-offset-4 hover:text-gold-dark">
          Contact page
        </a>
        .
      </p>
    </LegalLayout>
  );
}
