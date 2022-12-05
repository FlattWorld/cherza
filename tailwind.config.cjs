/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        'cherza-gray': '#252626',
        'cherza-gray-light': '#E6E6E6',
        'cherza-gold-strong': '#CD9626',
        'cherza-gold-mid': '#F2B939',
        'cherza-gold-light': '#FFEC7B',
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
}
