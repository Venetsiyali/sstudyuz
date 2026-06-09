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
        background: '#0f172a', // slate navy
        surface: 'rgba(30, 41, 59, 0.6)', // slate-800 with opacity for frosted glass
        'surface-2': '#1e293b',
        'surface-3': '#334155',
        border: 'rgba(255, 255, 255, 0.1)',
        'border-light': 'rgba(255, 255, 255, 0.15)',
        primary: {
          DEFAULT: '#065f46', // deep emerald green
          dark: '#047857',
          light: '#10b981',
        },
        accent: {
          copper: '#b87333', // warm copper
          'copper-light': '#d4af37', // warm gold
          emerald: '#065f46',
          blue: '#1A5276',
          warm: '#8B4513',
        },
        text: {
          primary: '#fdfbf7', // off-white
          secondary: '#cbd5e1', // slate-300
          muted: '#94a3b8', // slate-400
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(6, 95, 70, 0.1) 50%, rgba(15, 23, 42, 0.95) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'emerald-copper': 'linear-gradient(135deg, #065f46 0%, #b87333 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-hover': '0 8px 32px 0 rgba(6, 95, 70, 0.25)', // Emerald glow
        'nav': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'glow': 'inset 0 0 10px rgba(212, 175, 55, 0.3)', // gold glow
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backdropBlur: {
        'md': '10px',
        'lg': '16px',
      }
    },
  },
  plugins: [],
}

export default config
