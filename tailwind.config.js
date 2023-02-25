const sakuraConfig = require('./src')

/** @type {import('tailwindcss').Config} */
module.exports = sakuraConfig({
  mode: 'jit',
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],

  //corePlugins: {
  //  preflight: false
  //},
  plugins: []
})
