/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Base dark
        base:    '#0a0a0a',
        surface: '#111111',
        card:    '#161616',
        'card-hover': '#1c1c1c',

        // Brand — Indigo/Violet
        brand: {
          DEFAULT: '#6366f1',
          light:   '#818cf8',
          dark:    '#4f46e5',
          glow:    'rgba(99,102,241,0.25)',
        },

        // Teal accent
        teal: {
          DEFAULT: '#2dd4bf',
          light:   '#5eead4',
          glow:    'rgba(45,212,191,0.2)',
        },

        // Pink accent (Creative)
        pink: {
          DEFAULT: '#f472b6',
          light:   '#f9a8d4',
          glow:    'rgba(244,114,182,0.2)',
        },

        // Violet (Creative)
        violet: {
          DEFAULT: '#a855f7',
          light:   '#c084fc',
        },

        // Text
        'text-primary':   '#f1f5f9',
        'text-secondary': '#b8c5d9',
        'text-muted':     '#a0acbdff',

        // Borders
        'border-subtle':  'rgba(255,255,255,0.06)',
        'border-default': 'rgba(255,255,255,0.10)',
        'border-strong':  'rgba(255,255,255,0.18)',
      },
      backgroundImage: {
        'gradient-brand':     'linear-gradient(135deg, #6366f1 0%, #2dd4bf 100%)',
        'gradient-creative':  'linear-gradient(135deg, #f472b6 0%, #a855f7 100%)',
        'gradient-hero':      'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #161616 100%)',
        'gradient-card':      'linear-gradient(145deg, #161616 0%, #111111 100%)',
        'gradient-text-brand': 'linear-gradient(135deg, #818cf8 0%, #2dd4bf 100%)',
        'glow-brand':         'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
        'glow-teal':          'radial-gradient(ellipse at center, rgba(45,212,191,0.12) 0%, transparent 70%)',
      },
      borderRadius: {
        'sm':  '6px',
        'md':  '10px',
        'lg':  '16px',
        'xl':  '20px',
        '2xl': '28px',
        'pill':'999px',
      },
      boxShadow: {
        'brand':    '0 8px 32px rgba(99,102,241,0.25)',
        'brand-lg': '0 16px 48px rgba(99,102,241,0.35)',
        'teal':     '0 8px 32px rgba(45,212,191,0.2)',
        'creative': '0 8px 32px rgba(168,85,247,0.25)',
        'card':     '0 2px 16px rgba(0,0,0,0.4)',
        'card-lg':  '0 8px 40px rgba(0,0,0,0.6)',
        'glass':    '0 4px 24px rgba(0,0,0,0.4)',
        'inner-brand': 'inset 0 1px 0 rgba(99,102,241,0.15)',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        'scroll-down': 'scrollDown 1.8s ease-in-out infinite',
        'bar-grow':    'barGrow 1.2s ease forwards',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to':   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.4' },
        },
        scrollDown: {
          '0%':   { transform: 'translateX(-50%) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(-50%) translateY(16px)', opacity: '0' },
        },
        barGrow: {
          'from': { width: '0%' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '350': '350ms',
      },
      maxWidth: {
        'container': '1200px',
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
