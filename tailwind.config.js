const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      white: colors.white,
      cyan: colors.cyan,
      green: colors.green,
      yellow: colors.yellow
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
