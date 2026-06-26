/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leather: "#7a4f3a",
        sand: "#f3ece2",
        ink: "#241b15",
        olive: "#5f6b4f",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
