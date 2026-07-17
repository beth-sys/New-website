import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import CalendlySection from "@/components/contact/CalendlySection";

export const metadata: Metadata = {
  title: "Contact Beth Legge",
  description:
    "Get in touch with Beth Legge for buying, selling, or general questions about the Las Vegas Valley real estate market.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="max-w-content mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <ContactInfo />
          <MapSection />
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 md:px-10 pb-20 border-t border-stone-light pt-14">
        <p className="text-gold-dark text-xs tracking-widest2 uppercase mb-3">
          Prefer to book directly?
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
          Schedule a consultation
        </h2>
        <CalendlySection />
      </section>
    </>
  );
}
