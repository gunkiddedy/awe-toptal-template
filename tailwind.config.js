/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.js"
  ],
  theme: {
    screens: {
      'xs': '375px', //extra small
      'sm': '640px', //small
      'md': '768px', //medium
      'lg': '1024px', //large
      'xl': '1280px', //extra large
      '2xl': '1536px', //super large
    },
    extend: {},
  },
  plugins: [],
}

