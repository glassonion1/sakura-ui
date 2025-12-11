import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/sakura-ui/',
  resolve: {
    alias: {
      '@sakura-ui/core': path.resolve(__dirname, '../packages/core/src'),
      '@sakura-ui/forms': path.resolve(__dirname, '../packages/forms/src'),
      '@sakura-ui/helper': path.resolve(__dirname, '../packages/helper/src'),
      '@sakura-ui/tailwind-theme-plugin': path.resolve(__dirname, '../packages/tailwind-theme-plugin/src'),
      '@sakura-ui/markdown': path.resolve(__dirname, '../packages/markdown/src'),
      '@/icons': path.resolve(__dirname, '../packages/core/src/icons'),
    },
  },
})
