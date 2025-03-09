import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      }
    }
  }
})

// Thay vì gọi API trực tiếp đến http://localhost:5000, bạn chỉ cần gọi /api
// Vite sẽ tự động chuyển /api/tasks → http://localhost:5000/tasks.