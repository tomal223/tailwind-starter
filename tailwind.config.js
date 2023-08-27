/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
        container: {
          center: true,
          padding: {
            DEFAULT: "13px",
            sm: "15px",
            lg: "15px",
            xl: "15px",
          },
          screens: {
            sm: "600px",
            md: "768px",
            lg: "1024px",
            xl: "1281px",
          },
        },
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
