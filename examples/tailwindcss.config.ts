import type { Config } from 'tailwindcss'
import sakuraPlugin from '@sakura-ui/tailwind-theme-plugin'

const config: Config = {
  //  mode: 'jit',
  content: [
    './node_modules/@sakura-ui/core/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sakura-ui/forms/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sakura-ui/helper/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [sakuraPlugin]
}

export default config
