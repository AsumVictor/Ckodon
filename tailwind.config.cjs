/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LightBlue: "#0BDAFE",
        MdBlue: "#2455FE",
        MdBlue500: "#15A4FE",
        DeepBlue: "#310BFE",
      },
      fontSize: {
        15: '15px',
        18: "18px",
        20: "20px",
      },
      padding: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
