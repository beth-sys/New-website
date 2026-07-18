export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-cream mb-3">Beth Legge</p>
          <p className="text-sm leading-relaxed">
            Las Vegas Valley real estate — Las Vegas, Henderson &amp; North
            Las Vegas.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-widest2 uppercase text-stone mb-4">
            Explore
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="/communities" className="hover:text-gold-light">Communities</a></li>
            <li><a href="/search" className="hover:text-gold-light">Search Homes</a></li>
            <li><a href="/blog" className="hover:text-gold-light">Blog</a></li>
            <li><a href="/market-reports" className="hover:text-gold-light">Market Reports</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest2 uppercase text-stone mb-4">
            Company
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-gold-light">About Beth</a></li>
            <li><a href="/contact" className="hover:text-gold-light">Contact</a></li>
            <li><a href="/resources" className="hover:text-gold-light">Buyer &amp; Seller Guides</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-widest2 uppercase text-stone mb-4">
            Legal
          </p>
          <ul className="space-y-2 text-sm">
            <li><a href="/legal/privacy" className="hover:text-gold-light">Privacy Policy</a></li>
            <li><a href="/legal/terms" className="hover:text-gold-light">Terms of Use</a></li>
            <li><a href="/legal/accessibility" className="hover:text-gold-light">Accessibility Statement</a></li>
            <li><a href="/legal/fair-housing" className="hover:text-gold-light">Fair Housing Statement</a></li>
          </ul>
        </div>
      </div>

      {/* Required compliance strip: Equal Housing Opportunity + license.
          TODO before launch: confirm exact license number, brokerage
          name, and logo file with Beth per Nevada Real Estate Division
          requirements. */}
      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream/50">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center h-6 w-6 rounded-sm border border-cream/40 text-[9px] leading-none"
              aria-hidden
            >
              EHO
            </span>
            <span>
              Equal Housing Opportunity. Beth Legge, REALTOR® — Nevada
              License #[TODO]. [Brokerage Name] — [Brokerage License #TODO].
            </span>
          </div>
          <span>&copy; {new Date().getFullYear()} Beth Legge Real Estate. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
