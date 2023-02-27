module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sakura-ui/sakura-ui/packages/react/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('@sakura-ui/config')]
}
