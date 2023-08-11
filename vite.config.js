// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/movix/'
  }

  return config
})

// https://github.com/ErickKS/vite-deploy
// https://github.com/sitek94/vite-deploy-demo
// https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e
// https://betterprogramming.pub/how-to-deploy-a-routed-react-app-to-github-pages-9a40a31a0afc