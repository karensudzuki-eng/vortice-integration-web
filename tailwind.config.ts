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
        canvas: "#e5e5e5",
        card: "#ffffff",
        dark: "#000000",
        slate: {
          DEFAULT: "#444444",
          light: "#717171",
        },
        smoke: "#979797",
        ash: "#c6c6c6",
        mint: {
          DEFAULT: "#d1ffca",
          hover: "#bbf7b1",
        },
        voltage: "#fff100",
      },
      fontFamily: {
        display: ["var(--font-display)", "Bebas Neue", "Anton", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        pill: "48px",
        tag: "64px",
        "28": "28px",
        "32": "32px",
      },
      lineHeight: {
        tightest: "0.9",
      },
      maxWidth: {
        showroom: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
