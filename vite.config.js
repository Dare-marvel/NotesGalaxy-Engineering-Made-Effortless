import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    cors: {
      origin: "https://notes-galaxy.vercel.app", // Allow only your deployed frontend
    },
    allowedHosts: ["notes-galaxy.vercel.app"], // Explicitly allow your frontend domain
    origin: "https://notes-galaxy.vercel.app", // Secure WebSocket connections
    historyApiFallback: true,
  }
})
