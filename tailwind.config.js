/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#453d80',
        navColor: '#918bb3',
        navActive: '#ff7468'
      }
    },
  },
  plugins: [],
}