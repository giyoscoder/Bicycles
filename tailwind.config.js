/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
  
    },
    extend: {
      fontFamily: {
        inter: 'Inter',
        Bebas: 'Bebas Neue',
      }, 
      colors: {
        orange: '#F57520'
      }
    },
  },
  plugins: [],
}

