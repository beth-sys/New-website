import type { Metadata } from "next";
import ShoppingHero from "@/components/shopping/ShoppingHero";
import ShoppingFilterGrid from "@/components/shopping/ShoppingFilterGrid";

export const metadata: Metadata = {
  title: "Shopping",
  description:
    "A shopping guide to the Las Vegas Valley — malls, outlets, luxury retail, and local boutiques.",
};

export default function ShoppingPage() {
  return (
    <>
      <ShoppingHero />
      <section className="max-w-content mx-auto px-6 md:px-10 pb-24">
        <ShoppingFilterGrid />
      </section>
    </>
  );
}
