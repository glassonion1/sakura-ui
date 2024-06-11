const plugin = require('tailwindcss/plugin')

module.exports = {
  //  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    './node_modules/@sakura-ui/core/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sakura-ui/forms/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('@sakura-ui/tailwind-theme-plugin')]
}
