/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leather: "#4A2E1F",
        sand: "#F6F1E7",
        ink: "#14110F",
        olive: "#5f6b4f",
        brass: "#A8814C",
        smoke: "#6B6258",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
