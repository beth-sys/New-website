import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-8 space-y-6">
      <div className="flex items-start gap-4">
        <Phone size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Phone</p>
          <p className="text-ink">(702) 555-0142</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Mail size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Email</p>
          <p className="text-ink">beth@[domain].com</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <MapPin size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Office</p>
          <p className="text-ink">[Brokerage Name]<br />Las Vegas, NV</p>
        </div>
      </div>
    </div>
  );
}
