import Hero from "@/components/Hero";
import FeaturedCommunities from "@/components/FeaturedCommunities";
import MarketSnapshot from "@/components/MarketSnapshot";
import AboutTeaser from "@/components/AboutTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCommunities />
      <MarketSnapshot />
      <AboutTeaser />
    </>
  );
}
