import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: null // 🚫 Stops Vite from watching files and restarting automatically
  }
})