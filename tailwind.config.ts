import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: [
        "IBM Plex Mono",
        "Courier Prime",
        "Courier New",
        "monospace",
      ],
      display: ["Courier Prime", "IBM Plex Mono", "monospace"],
    },
    fontSize: {
      xs: "0.70rem",
      sm: "0.825rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.6rem",
      "2xl": "2.2rem",
      "3xl": "3.5rem",
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "96px",
      10: "128px",
    },
  },
  plugins: [],
};

export default config;
