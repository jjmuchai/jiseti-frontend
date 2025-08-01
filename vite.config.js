import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Local Flask backend for dev
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1000 // Silence large chunk warning (~500kb default)
  }
})
