/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { peerDependencies } from './package.json'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext: string) => `index.${ext}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  },
  test: {
    globals: true
  }
})
