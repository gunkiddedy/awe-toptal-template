/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.js"
  ],
  theme: {
    screens: {
      'xs': '375px', //red
      'sm': '640px', //green
      'md': '768px', //purple
      'lg': '1024px', //yellow
      'xl': '1280px', //white
      '2xl': '1536px', //blue
    },
    extend: {},
  },
  plugins: [],
}

