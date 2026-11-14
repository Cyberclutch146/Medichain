import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        rule: "var(--color-rule)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        verdigris: {
          DEFAULT: "var(--color-verdigris)",
          hover: "var(--color-verdigris-hover)",
        },
        sage: "var(--color-sage)",
        amber: "var(--color-amber)",
        vermilion: "var(--color-vermilion)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
