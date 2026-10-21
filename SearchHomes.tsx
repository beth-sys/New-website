/**
 * <SearchHomes />
 *
 * Phase 1: embeds the existing beth.scofieldgroup.com search widget.
 * Phase 4: swap the `provider` implementation below for a real IDX/MLS
 * feed. Keep the exported component's props/shape stable so pages that
 * render <SearchHomes /> never need to change.
 *
 * NOTE: whichever IDX/MLS provider is used in Phase 4 will come with its
 * own required attribution / broker-reciprocity disclaimer — confirm the
 * exact wording with Beth's MLS association and render it in the
 * `<Attribution />` slot below before launch.
 */

type SearchHomesProps = {
  height?: number;
  className?: string;
};

function Attribution() {
  return (
    <p className="text-[11px] text-stone mt-3">
      Property search provided via Scofield Group. Full IDX attribution
      will display here once a licensed MLS feed is integrated.
    </p>
  );
}

export default function SearchHomes({ height = 720, className = "" }: SearchHomesProps) {
  return (
    <div className={className}>
      <iframe
        title="Search Las Vegas Valley Homes"
        src="https://beth.scofieldgroup.com"
        width="100%"
        height={height}
        className="rounded-2xl border border-stone-light"
        loading="lazy"
      />
      <Attribution />
    </div>
  );
}
