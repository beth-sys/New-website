import { Phone, Mail, MapPin } from "lucide-react";
import { beth } from "@/data/beth";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-8 space-y-6">
      <div className="flex items-start gap-4">
        <Phone size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Phone</p>
          <p className="text-ink">{beth.phone}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Mail size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Email</p>
          <p className="text-ink">{beth.email}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <MapPin size={20} className="text-gold-dark mt-0.5" />
        <div>
          <p className="text-sm text-stone">Office</p>
          <p className="text-ink">{beth.brokerage}<br />{beth.officeAddress}</p>
        </div>
      </div>
    </div>
  );
}
