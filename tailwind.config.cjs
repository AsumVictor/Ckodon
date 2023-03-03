/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightBlue: '#0BDAFE',
        MdBlue: '#2455FE',
        MdBlue500: '#15A4FE',
        DeepBlue: '#310BFE',
      }
    },
  },
  plugins: [],
}