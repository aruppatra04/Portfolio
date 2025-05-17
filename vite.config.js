import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // vite config
    define: {
      'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
      'process.env.VITE_TEMPLATE_ID':  JSON.stringify(process.env.VITE_TEMPLATE_ID),
      'process.env.VITE_PUBLIC_KEY': JSON.stringify(process.env.VITE_PUBLIC_KEY)
    },
})
