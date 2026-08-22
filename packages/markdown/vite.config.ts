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
    // jsdom rather than happy-dom, which the rest of the repository uses:
    // DOMPurify drops the first top-level element under happy-dom, so <p>段落</p>
    // sanitises to 段落 and a table loses the container it scrolls inside. The
    // same input is left alone under jsdom, and in a browser.
    environment: 'jsdom',
    setupFiles: 'tests/vitest.setup.ts'
  }
})
