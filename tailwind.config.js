/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#f5f4f0',
        navColor: '#637b64',
        navActive: '#fd661f'
      }
    },
  },
  plugins: [],
}