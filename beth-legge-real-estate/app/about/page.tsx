import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Bio from "@/components/about/Bio";
import ExperienceStats from "@/components/about/ExperienceStats";
import AwardsAndInvolvement from "@/components/about/AwardsAndInvolvement";
import ConsultationCTA from "@/components/about/ConsultationCTA";

export const metadata: Metadata = {
  title: "About Beth Legge",
  description:
    "Meet Beth Legge, a Las Vegas Valley REALTOR® helping buyers and sellers across Las Vegas, Henderson, and North Las Vegas.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Bio />
      <ExperienceStats />
      <AwardsAndInvolvement />
      <ConsultationCTA />
    </>
  );
}
