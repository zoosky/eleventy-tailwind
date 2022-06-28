/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
    content: ["./public/**/*.{html,njk}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {}, 
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'),require('@tailwindcss/aspect-ratio'),require('@tailwindcss/typography'),],
}
