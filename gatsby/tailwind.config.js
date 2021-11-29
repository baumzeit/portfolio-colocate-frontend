/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        highlight: 'var(--color-highlight)',
        brand: 'var(--color-brand)'
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
      stroke: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        highlight: 'var(--color-highlight)'
      },
      fontFamily: {
        display: 'Rubik',
        body: 'Karla'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwindcss-text-fill-stroke')()]
}
