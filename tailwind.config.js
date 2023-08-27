/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-gray': '#000'
      },
      colors: {
        'black': '#0D0D0D',
        'themeColor': '#6CEBA6',
      }
    },
  },
  plugins: [],
}
