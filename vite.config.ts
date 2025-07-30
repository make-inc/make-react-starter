import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { vitePluginErrorOverlay } from '@hiogawa/vite-plugin-error-overlay'

export default defineConfig({
  plugins: [
    react(),
    vitePluginErrorOverlay(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: './client/main.tsx',
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    middlewareMode: true,
  },
})