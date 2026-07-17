"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Communities", href: "/communities" },
  { label: "Search Homes", href: "/search" },
  { label: "Market Reports", href: "/market-reports" },
  { label: "Blog", href: "/blog" },
  { label: "About Beth", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="/" className="font-display text-xl tracking-wide text-ink">
          Beth Legge
          <span className="hidden sm:inline text-stone font-sans text-[11px] tracking-widest2 uppercase ml-3 align-middle">
            Las Vegas Valley
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal hover:text-gold transition-colors"
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
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-stone-light px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-charcoal">
              {l.label}
            </a>
          ))}
          <a href="/contact" className="text-base text-gold-dark">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
