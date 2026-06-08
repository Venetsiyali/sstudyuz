import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF5',
        surface: '#FFFFFF',
        'surface-2': '#F5F5F0',
        'surface-3': '#EDEDE8',
        border: '#D5D5C8',
        'border-light': '#E8E8DC',
        primary: {
          DEFAULT: '#1B4332',
          dark: '#14332A',
          light: '#2D6A4F',
        },
        accent: {
          gold: '#B8860B',
          'gold-light': '#D4A520',
          blue: '#1A5276',
          green: '#27AE60',
          warm: '#8B4513',
          orange: '#D4760A',
        },
        text: {
          primary: '#2C3E50',
          secondary: '#5D6D7E',
          muted: '#8B9DAF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-noto-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #FAFAF5 0%, #F0EDE4 50%, #FAFAF5 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(27,67,50,0.03) 0%, rgba(184,134,11,0.02) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.1)',
        'nav': '0 1px 3px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
