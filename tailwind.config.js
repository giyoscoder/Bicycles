/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
  
    },
    extend: {
      screens:{
        xs: '320px'
      },
      fontFamily: {
        inter: 'Inter',
        Bebas: 'Bebas Neue',
      }, 
      colors: {
        orange: '#F57520'
      },
      boxShadow: {
        base: '5px 5px 15px 5px #555, -5px -5px 15px 5px #555'
      }
    },
  },
  plugins: [],
}

