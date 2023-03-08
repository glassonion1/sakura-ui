const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    '../node_modules/@sakura-ui/react/src/**/*.{jsx,tsx}',
    '../node_modules/@sakura-ui/icons/src/**/*.{jsx,tsx}'
  ],
  plugins: [require('@sakura-ui/config')]
}
