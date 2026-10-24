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
        // Fondo: Azul muy oscuro
        'qa-dark': '#060a14',
        'qa-navy': '#091020',
        'qa-navy-surface': '#0e172c',
        'qa-navy-card': '#13203c',
        'qa-border': '#1e2e4e',
        'qa-border-light': '#2a3f68',
        
        // UN SOLO ACENTO: Dorado exacto del logo (#C9AE5C)
        'qa-gold': '#C9AE5C',
        'qa-gold-light': '#E0C878',
        'qa-gold-dark': '#977F37',
        'qa-gold-muted': 'rgba(201, 174, 92, 0.12)',
        'qa-gold-glow': 'rgba(201, 174, 92, 0.28)',

        // Alias para compatibilidad de componentes
        'qa-accent': '#C9AE5C',
        'qa-accent-hover': '#DFCA7E',
        'qa-blue': '#C9AE5C', // Reemplazado por dorado oficial
        'qa-cyan': '#C9AE5C', // Reemplazado por dorado oficial
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
        'gold-sm': '0 0 15px -3px rgba(201, 174, 92, 0.3)',
        'gold-md': '0 0 25px -5px rgba(201, 174, 92, 0.4)',
        'gold-lg': '0 0 45px -10px rgba(201, 174, 92, 0.5)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        orbitSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        counterOrbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        goldPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        revealLine: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'orbit-slow': 'orbitSlow 40s linear infinite',
        'counter-orbit': 'counterOrbit 40s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'gold-pulse': 'goldPulse 4s ease-in-out infinite',
        'reveal-1': 'revealLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-2': 'revealLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
};

export default config;
