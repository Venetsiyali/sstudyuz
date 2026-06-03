import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f4f6f9',
        surface: '#ffffff',
        'surface-2': '#f8f9fa',
        'surface-3': '#eef2f5',
        border: '#e5e7eb',
        'border-light': '#f3f4f6',
        primary: {
          DEFAULT: '#337ab7',
          dark: '#286090',
          light: '#5bc0de',
        },
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
          green: '#5cb85c',
          yellow: '#f0ad4e',
          orange: '#f97316',
        },
        text: {
          primary: '#333333',
          secondary: '#777777',
          muted: '#999999',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #f4f6f9 0%, #e0eaf5 50%, #f4f6f9 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(51,122,183,0.05) 0%, rgba(51,122,183,0.02) 100%)',
        'blue-purple': 'linear-gradient(135deg, #337ab7, #5bc0de)',
        'blue-cyan': 'linear-gradient(135deg, #337ab7, #5bc0de)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(51,122,183,0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(51,122,183,0.3), 0 0 30px rgba(51,122,183,0.15)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(51,122,183,0.2)',
        'glow-purple': '0 0 15px rgba(51,122,183,0.2)',
        'card': '0 4px 15px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 25px rgba(0,0,0,0.1)',
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
