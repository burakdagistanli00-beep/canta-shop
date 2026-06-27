/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leather: "#C9826B",
        sand: "#FFFFFF",
        ink: "#2B2B2B",
        olive: "#5f6b4f",
        brass: "#C9826B",
        smoke: "#8A8A8A",
      },
      fontFamily: {
        display: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
