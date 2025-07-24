import { defineConfig, moduleRunnerTransform } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Personal Portfolio Website/",
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
