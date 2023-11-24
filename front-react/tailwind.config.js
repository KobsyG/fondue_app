
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', // SWAP
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
      backgroundImage: {
        'kraftPc': "url('/src/images/PcCraft.png')",
        'kraftTel': "url('/src/images/MobileCraft.png')",
        'bois': "url('/src/images/bois.avif')",
        'montagne': "url('/src/images/bg-montagne.png')",
      }
    },
  },
  plugins: [],
}