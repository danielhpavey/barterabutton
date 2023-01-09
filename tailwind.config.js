/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'button': '#dbffff',
      'button-dark': '#05114C'
    },
    extend: {},
  },
  plugins: [],
}
