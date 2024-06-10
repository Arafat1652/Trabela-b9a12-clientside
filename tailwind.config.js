/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['"Montserrat"', 'sans-serif'],
        'play': ['"Playfair Display"', 'sans-serif'],
      },
      colors:{
        orange:{
          2: '#ff681a'
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}