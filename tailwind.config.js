/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'outfit': ['outfit'],
        'young-serif': ['young-serif']
      }
    },
  },
  plugins: [],
}

