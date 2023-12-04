
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '601px', // Breakpoint Tablette -> Telephone
      md: '768px',
      lg: '1024px', // Breakpoint Pc -> Tablette
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2520px',
      '4xl': '3544px',
      macBeco: '1440px',
      pcJB: '1920px',

    },
    extend: {
      spacing: {
        'large-page': '10000px', // Adjust the height value as needed
      },
      colors: {
        'fondue-blue': '#2E2573',
        'fondue-yellow': '#FED88E',
        'fondue-red': '#E50044',
      },
    },
  },
  plugins: [],
});