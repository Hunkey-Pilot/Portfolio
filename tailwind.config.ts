import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#0F766E",
          light: "#14B8A6",
          dark: "#115E59",
          glow: "rgba(15, 118, 110, 0.18)",
        },
        emeraldDeep: {
          DEFAULT: "#0F766E",
          dark: "#115E59",
          light: "#14B8A6",
          surface: "#D1FAE5",
          glow: "rgba(15, 118, 110, 0.18)",
        },
        obsidian: {
          950: "#F1F4F2",
          900: "#FFFFFF",
          850: "#E8EEEA",
          800: "#DCE5DF",
          700: "#A7B5AD",
          600: "#59665F",
        },
        surface: {
          dark: "#E8EEEA",
          card: "#FFFFFF",
          elevated: "#D1FAE5",
          border: "#DCE5DF",
          "border-hover": "rgba(15, 118, 110, 0.35)",
        },
        // Mapped for backwards-compatibility across sections
        violet: {
          accent: "#0F766E",
          glow: "rgba(15, 118, 110, 0.18)",
        },
        flutter: {
          blue: "#0F766E",
          sky: "#0F766E",
          glow: "rgba(15, 118, 110, 0.18)",
        },
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "Space Grotesk",
          "sans-serif",
        ],
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-gold": "0 8px 24px -8px rgba(15, 118, 110, 0.28)",
        "glow-emerald": "0 8px 24px -8px rgba(15, 118, 110, 0.22)",
        "glow-violet": "0 8px 24px -8px rgba(15, 118, 110, 0.22)",
        "glow-flutter": "0 8px 24px -8px rgba(15, 118, 110, 0.22)",
        "glass": "0 8px 24px rgba(31, 41, 51, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
