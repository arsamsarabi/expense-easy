/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#F9F7F7',
        dark: '#0a1b2f',
        brand: {
          50: '#ecf1f7',
          100: '#d9e3ef',
          200: '#b2c7df',
          300: '#8caacf',
          400: '#658ebf',
          500: '#3f72af',
          600: '#325b8c',
          700: '#264469',
          800: '#192e46',
          900: '#0d1723',
          950: '#060b11',
        },
        accent: {
          50: '#f0faf9',
          100: '#e0f5f3',
          200: '#c1ebe8',
          300: '#a2e0dc',
          400: '#83d6d1',
          500: '#64CCC5',
          600: '#50a39e',
          700: '#3c7a76',
          800: '#28524f',
          900: '#142927',
          950: '#0a1414',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
