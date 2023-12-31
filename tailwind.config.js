/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens:{
      "xs":"320px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

