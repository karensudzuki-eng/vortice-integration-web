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
        "qa-canvas": "#f8f9fa", // Off-white técnico
        "qa-dark": "#0b0f19", // Azul noche / Negro cibernético
        "qa-blue": "#0052ff", // Azul eléctrico primario
        "qa-neon": "#fff100", // Amarillo neón resaltador
        "qa-menta": "#d1ffca", // Verde menta chips/badges
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Courier New", "Courier", "monospace"],
        display: ["var(--font-display)", "Bebas Neue", "Anton", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        "brutal-blue": "6px 6px 0px #0052ff",
        "brutal-dark": "6px 6px 0px #0b0f19",
        "hover-neon": "4px 4px 0px #fff100",
      },
    },
  },
  plugins: [],
};

export default config;
