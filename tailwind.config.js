/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: '#DC2626',
        accent: '#F97316',
        'bg-dark': '#0a0a0a',
        'bg-card': '#141414',
        'bg-card-hover': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
