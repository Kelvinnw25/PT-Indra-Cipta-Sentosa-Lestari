import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1424",
        ink2: "#0F1E33",
        ink3: "#13263F",
        surface: "#F6F8FB",
        current: "#2BB8EA",
        currentd: "#1567D6",
        live: "#FFB020",
        dim: "#5C677A",
        onink: "#E8EEF6",
        oninkdim: "#8FA2BC",
        line: "#E3E8F0",
        lineink: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { wrap: "1180px" },
    },
  },
  plugins: [],
};
export default config;
