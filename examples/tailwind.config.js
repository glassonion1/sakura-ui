const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    '../packages/react/src/**/*.{js,jsx,ts,tsx}',
    '../packages/forms/src/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require('@sakura-ui/config')]
}
