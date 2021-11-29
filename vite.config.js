import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// const resolve = (dir) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: 'src', replacement: resolve(__dirname, 'src') },
      { find: 'assets', replacement: resolve(__dirname, 'src/assets') },
      { find: 'components', replacement: resolve(__dirname, 'src/components') },
    ],
    // alias: {
    //   '@': resolve('src'),
    //   components: resolve('src/components'),
    //   assets: resolve('src/assets'),
    //   src: resolve('src'),
    // },
  },
  server: {
    proxy: {
      '/api': 'http://loalhost:3000/',
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {},
  //   },
  // },
  // alias: {
  //   "@": "/src/",
  //   '@components': '/src/components/',
  //   '@assets': '/src/assets/',
  // },
})
