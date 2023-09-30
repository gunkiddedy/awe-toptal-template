/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    screens: {
      /**
       * define MIN and MAX
        'xs': {'min': '375px', 'max': '639px'}, //red
        'sm': {'min': '640px', 'max': '767px'}, //green
        'md': {'min': '768px', 'max': '1023px'}, //purple
        'lg': {'min': '1024px', 'max': '1279px'}, //yellow
        'xl': {'min': '1280px', 'max': '1535px'}, //white
        '2xl': {'min': '1536px'}, //blue
      */
      
      // define MIN
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

/**
 *  320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
 */

