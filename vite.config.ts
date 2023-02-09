import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true,
    host: "0.0.0.0",
    port: 5174,
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3000/',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  }
})
