import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // set base url
  base: './',
  define: {
    __SERVER_API_URL__: `"${process.env.SERVER_API_URL}"`,
  },
})

