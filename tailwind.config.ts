import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      backgroundImage: {
        "glass-gradient":
          "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(56, 189, 248, 0.25), transparent 45%)",
        "mesh-gradient":
          "radial-gradient(circle at 10% 20%, rgba(56,189,248,0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(167,139,250,0.18), transparent 45%), radial-gradient(circle at 80% 50%, rgba(248,113,113,0.15), transparent 35%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.45)",
        "glass-md":
          "0 20px 45px rgba(15, 23, 42, 0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      keyframes: {
        pulsey: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulsey: "pulsey 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

