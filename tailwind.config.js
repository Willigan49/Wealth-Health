/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#00BBC9",
      secondary: "#FFFFFF",
      error: "#FF0000",
      success: "#46D92C",
      black: "#000000",
      desactivate: "#6df5ff"
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
