/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"'],
      },
      colors: {
        home: "#000012",
        roxo: "#8600f0",
        gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
