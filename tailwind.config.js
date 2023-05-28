/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      principal: "#00BBC9",
      secondary: "#FFFFFF",
      error: "#FF0000",
      success: "#46D92C",
      placeholder: "#A2A2A2",
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
