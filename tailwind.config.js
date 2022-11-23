/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
              sans: ["Neutral Face", ...defaultTheme.fontFamily.sans],
              monument: ['Monument Extended', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
              "sm-15": "0.9375rem", //15px
            },
        },
    },
    plugins: [],
  }