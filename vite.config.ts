import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
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