/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white':'#FBFAF5',
        'custom-green': '#26D07C'
        }
    },
  },
  plugins: [],
}