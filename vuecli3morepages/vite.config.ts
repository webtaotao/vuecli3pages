import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/https://github.com/webtaotao/vuecli3pages.git/',
  plugins: [vue()],
})
