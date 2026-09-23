import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        "secondary-bg": "#F0F5F4",
        foreground: "#111827",
        primary: {
          DEFAULT: "#70CB97",
          hover: "#5eb884",
          foreground: "#152E26",
        },
        secondary: {
          DEFAULT: "#426A5A",
          hover: "#345447",
          foreground: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#152E26",
          foreground: "#FFFFFF",
        },
        brand: {
          green: "#70CB97",
          darkGreen: "#426A5A",
          deepForest: "#152E26",
          softBg: "#F0F5F4",
          textPrimary: "#111827",
          textSecondary: "#3F7658",
          textMuted: "#6B7280",
          border: "#D1E3DC",
        },
        muted: {
          DEFAULT: "#F0F5F4",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#70CB97",
          foreground: "#152E26",
        },
        border: "#E2EBE7",
        input: "#E2EBE7",
        ring: "#70CB97",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(21, 46, 38, 0.05), 0 1px 2px -1px rgba(21, 46, 38, 0.05)",
        card: "0 4px 20px -2px rgba(21, 46, 38, 0.06), 0 2px 6px -1px rgba(21, 46, 38, 0.04)",
        cardHover: "0 12px 30px -4px rgba(66, 106, 90, 0.12), 0 4px 10px -2px rgba(66, 106, 90, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

