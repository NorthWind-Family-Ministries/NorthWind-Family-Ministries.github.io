import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Mitigate EMFILE errors by reducing watcher usage
      usePolling: true,
      interval: 100,
    },
  },
})
