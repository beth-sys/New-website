import { FileText, Download } from "lucide-react";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-6 flex flex-col">
      <div className="flex items-center gap-3 text-xs text-stone mb-4">
        <FileText size={16} className="text-gold-dark" />
        <span className="text-gold-dark font-medium">{resource.category}</span>
        <span aria-hidden>&middot;</span>
        <span>{resource.pages} {resource.pages === 1 ? "page" : "pages"}</span>
      </div>
      <h3 className="font-display text-xl text-ink mb-2 leading-snug">
        {resource.title}
      </h3>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-6 flex-1">
        {resource.description}
      </p>
      <a
        href={`/resources/${resource.fileName}`}
        download
        className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-2.5 rounded-full text-sm hover:bg-ink hover:text-cream transition-colors"
      >
        <Download size={15} />
        Download PDF
      </a>
    </div>
  );
}
