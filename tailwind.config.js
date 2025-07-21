/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#4A48FF",
      },
      screens: {
        xs: "375px",
        ...require("tailwindcss/defaultTheme").screens,
      },
    },
  },
  plugins: [],
};
