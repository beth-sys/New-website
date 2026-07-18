/**
 * Calendly embed. Replace CALENDLY_URL below with Beth's real scheduling
 * link (e.g. https://calendly.com/beth-legge/consultation) once set up.
 * Calendly's own inline-embed script handles the iframe sizing, so no
 * extra JS is needed here beyond loading their widget script in layout
 * if/when this goes live — for now this renders a lightweight iframe
 * fallback that works without the external script.
 */
const CALENDLY_URL = "https://calendly.com/[beth-legge-handle]/consultation";

export default function CalendlySection() {
  return (
    <div className="rounded-2xl border border-stone-light overflow-hidden">
      <iframe
        title="Schedule a consultation with Beth Legge"
        src={CALENDLY_URL}
        width="100%"
        height={630}
        loading="lazy"
      />
    </div>
  );
}
