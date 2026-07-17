import type { Metadata } from "next";
import { fraunces, geist, geistMono } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Beth Legge | Las Vegas Valley Luxury Real Estate",
    template: "%s | Beth Legge Real Estate",
  },
  description:
    "Your guide to luxury living in the Las Vegas Valley — homes, neighborhoods, and local expertise from Beth Legge.",
  openGraph: {
    title: "Beth Legge | Las Vegas Valley Luxury Real Estate",
    description:
      "Your guide to luxury living in the Las Vegas Valley — homes, neighborhoods, and local expertise from Beth Legge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
