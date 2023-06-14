import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

process.env.GQL_SERVER_URL = 'https://api-stage.santiment.net/graphql'
process.env.IS_DEV_MODE = (process.env.NODE_ENV !== 'production').toString()
process.env.MEDIA_PATH = '/node_modules/san-webkit/lib'
process.env.ICONS_PATH = '/node_modules/san-webkit/lib/icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'webkit', replacement: path.join(__dirname, 'node_modules/san-webkit/lib/') },
      { find: 'san-webkit', replacement: path.join(__dirname, 'node_modules/san-webkit/') },
    ],
  },
  define: {
    'process.browser': true,
    'process.env': process.env,
    'process.env.IS_DEV_MODE': process.env.IS_DEV_MODE,
  },
})
