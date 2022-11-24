/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17ab67",
        secondary: "#d8fad6",
      },
    },
  },
  plugins: [],
};
