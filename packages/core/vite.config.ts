/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { peerDependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'tests/vitest.setup.ts'
  }
})
