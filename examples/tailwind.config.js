const plugin = require('tailwindcss/plugin')

const font = plugin(({ addBase }) => {
  addBase({
    '@font-face': {
      fontFamily: 'Material Symbols Outlined',
      fontWheight: '300',
      fontStyle: 'normal',
      src: "url(/src/material-symbols-outlined.woff2) format('woff2')"
    }
  })
})

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    '../node_modules/@sakura-ui/react/src/**/*.{jsx,tsx}',
    '../node_modules/@sakura-ui/icons/src/**/*.{jsx,tsx}'
  ],
  variants: {
    extend: {}
  },
  plugins: [require('@sakura-ui/config')]
}
