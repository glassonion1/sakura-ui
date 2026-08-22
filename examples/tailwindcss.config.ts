import type { Config } from 'tailwindcss'
// この config は Tailwind が jiti で直接読み込むため、vite.config.mts の alias が効かない。
// パッケージ名で import すると dist を要求してしまい、ビルド前は CSS 生成ごと失敗するので、
// examples が参照している他のパッケージと同様にソースを直接指す。
import sakuraPlugin from '../packages/tailwind-theme-plugin/src'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../packages/core/src/**/*.{js,ts,jsx,tsx}',
    '../packages/forms/src/**/*.{js,ts,jsx,tsx}',
    '../packages/helper/src/**/*.{js,ts,jsx,tsx}',
    // The markdown package writes class names into the HTML it builds, so its
    // source has to be scanned like a component's.
    '../packages/markdown/src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [sakuraPlugin]
}

export default config
