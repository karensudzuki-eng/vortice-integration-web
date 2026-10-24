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
        // Paleta Dark Tech inspirada en HakaLab & Next-Gen QA
        'qa-dark': '#080c15',
        'qa-dark-subtle': '#0c121e',
        'qa-surface': '#111827',
        'qa-surface-light': '#182234',
        'qa-border': '#1e293b',
        'qa-border-light': '#334155',
        // Acentos eléctricos y gradientes
        'qa-blue': '#0066ff',
        'qa-cyan': '#00f0ff',
        'qa-indigo': '#6366f1',
        'qa-accent': '#0066ff',
        'qa-accent-hover': '#2575fc',
        'qa-accent-glow': 'rgba(0, 102, 255, 0.25)',
        'qa-emerald': '#10b981',
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Plus Jakarta Sans"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(0, 102, 255, 0.3)',
        'glow-md': '0 0 25px -5px rgba(0, 102, 255, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(0, 102, 255, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-tech': 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
};

export default config;
