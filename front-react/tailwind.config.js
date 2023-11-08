
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
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
      backgroundImage: {
        'contreplaque-pattern': "url('/src/images/Kraft.png')",
        'bois': "url('/src/images/bois.avif')",
      }
    },
  },
  plugins: [],
}