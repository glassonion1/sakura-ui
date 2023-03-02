module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}',
    './node_modules/@sakura-ui/sakura-ui/packages/react/**/*.{jsx,tsx}'
  ],
  plugins: [require('@sakura-ui/config')]
}
