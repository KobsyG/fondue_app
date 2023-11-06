
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
      },
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
}