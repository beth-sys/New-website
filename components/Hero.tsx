"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/*
        Placeholder gradient stands in for a full-bleed, licensed photo of
        the Las Vegas Valley at dusk (Red Rock silhouette, warm sky).
        Swap the div below for a Next/Image once photography is sourced
        from Unsplash/Pexels/Pixabay per the photography guidelines.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1B1712 0%, #33291C 38%, #6B4A2C 62%, #B08D57 78%, #17140F 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/25" aria-hidden />

      {/* Signature valley-line sits at the sky/land horizon, ~62% down */}
      <div className="absolute left-0 right-0" style={{ top: "62%" }}>
        <div className="valley-rule" />
      </div>

      <div className="relative z-10 h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light text-xs tracking-widest2 uppercase mb-5"
        >
          Las Vegas &middot; Henderson &middot; North Las Vegas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] max-w-3xl"
        >
          Your guide to luxury living in Las Vegas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-cream/80 text-base md:text-lg max-w-xl"
        >
          Search homes, explore neighborhoods, discover local events, and get
          to know the communities that make the Las Vegas Valley home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="/search"
            className="bg-gold hover:bg-gold-dark transition-colors text-ink font-medium px-7 py-3 rounded-full text-sm"
          >
            Search Homes
          </a>
          <a
            href="/communities"
            className="border border-cream/50 hover:border-cream text-cream px-7 py-3 rounded-full text-sm transition-colors"
          >
            Explore Communities
          </a>
          <a
            href="/about"
            className="text-cream/80 hover:text-cream px-2 py-3 text-sm underline underline-offset-4"
          >
            Meet Beth
          </a>
        </motion.div>
      </div>
    </section>
  );
}
