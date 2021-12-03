/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [...Array.from({ length: 9 }, (_, idx) => 'animate-delay-' + (idx + 1) * 100)]
  },
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        highlight: 'var(--color-highlight)',
        brand: 'var(--color-brand)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-primary)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)'
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)'
      },
      fontFamily: {
        display: 'Rubik',
        body: 'Karla'
      },
      animation: { fadeIn: 'fade-in 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    require('@tailwindcss/custom-forms'),
    require('./tailwind/twPluginAnimateDelay.js')
  ]
}
