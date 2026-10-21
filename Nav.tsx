"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const primaryLinks = [
  { label: "Communities", href: "/communities" },
  { label: "Search Homes", href: "/search" },
];

const dropdownGroups = [
  {
    label: "Explore Vegas",
    items: [
      { label: "Events", href: "/events" },
      { label: "Restaurants", href: "/restaurants" },
      { label: "Shopping", href: "/shopping" },
      { label: "Outdoor Recreation", href: "/outdoor" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Market Reports", href: "/market-reports" },
      { label: "Blog", href: "/blog" },
      { label: "Reviews", href: "/reviews" },
      { label: "Buyer & Seller Guides", href: "/resources" },
    ],
  },
];

const trailingLinks = [{ label: "About Beth", href: "/about" }];

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-charcoal hover:text-accent transition-colors"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-52 rounded-xl border border-stone-light bg-cream shadow-lg py-2 z-50">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-charcoal hover:bg-stone-light/30 hover:text-accent-dark transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-stone-light" : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo/scofield-group-logo.png"
            alt="The Scofield Group"
            width={180}
            height={71}
            className="h-9 w-auto"
            priority
          />
          <span className="hidden sm:inline-block h-6 w-px bg-stone-light" aria-hidden />
          <span className="font-display text-xl tracking-wide text-ink">
            Beth Legge
            <span className="hidden sm:inline text-stone font-sans text-[11px] tracking-widest2 uppercase ml-3 align-middle">
              Las Vegas Valley
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {primaryLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}

          {dropdownGroups.map((g) => (
            <NavDropdown key={g.label} label={g.label} items={g.items} />
          ))}

          {trailingLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="/contact"
            className="text-sm border border-ink px-5 py-2 rounded-full hover:bg-ink hover:text-cream transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-ink"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-cream border-t border-stone-light px-6 py-6 flex flex-col gap-5">
          {primaryLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-charcoal">
              {l.label}
            </a>
          ))}

          {dropdownGroups.map((g) => (
            <div key={g.label}>
              <p className="text-xs tracking-widest2 uppercase text-stone mb-2">{g.label}</p>
              <div className="flex flex-col gap-3 pl-2">
                {g.items.map((item) => (
                  <a key={item.href} href={item.href} className="text-base text-charcoal">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {trailingLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-charcoal">
              {l.label}
            </a>
          ))}

          <a href="/contact" className="text-base text-accent-dark">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
