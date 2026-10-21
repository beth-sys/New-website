import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Display serif — used with restraint for headings only. Fraunces has a
// warm, slightly hand-carved quality (via its optical-size axis) that
// reads as bespoke rather than a stock luxury serif like Playfair.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI sans and caption/data mono — sourced from Vercel's own
// `geist` package rather than next/font/google. Geist is a genuinely
// new typeface; next/font/google validates names against a font-data
// snapshot baked into the Next.js version in use, and that snapshot
// can predate Geist's addition to Google's catalog — which throws a
// build-time "next/font error" for an unrecognized name. Importing
// directly from `geist` sidesteps that entirely.
export const geist = GeistSans;
export const geistMono = GeistMono;
