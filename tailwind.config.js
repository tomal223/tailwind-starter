/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
       backgroundColor : {
        'bg-gray' : '#000'
       },
    },
  },
  plugins: [],
}
