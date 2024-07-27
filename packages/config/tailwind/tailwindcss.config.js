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
        light: '',
        dark: '',
        brand: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
        accent: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
      },
    },
  },
  plugins: [],
}
