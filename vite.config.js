

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/mini-netflix-vue/'  // MUST match your GitHub repo name
})

