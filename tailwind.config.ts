import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        ink: "#0B1C33",
        charcoal: "#13284A",
        stone: "#8A95A6",
        "stone-light": "#D7DBE2",
        accent: {
          DEFAULT: "#4870A0",
          light: "#C0C6CF",
          dark: "#2F5280",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
