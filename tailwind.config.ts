import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        ink: "#17140F",
        charcoal: "#2E2A24",
        stone: "#948B7E",
        "stone-light": "#D8D2C6",
        gold: {
          DEFAULT: "#B08D57",
          light: "#D4B483",
          dark: "#8A6C3F",
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
