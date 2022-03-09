/*
 * @Descripttion:
 * @version: 0.0.1
 * @Author: Hansel
 * @Date: 2021-09-27 16:30:00
 * @LastEditors: Hansel
 * @LastEditTime: 2022-03-09 14:08:23
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// import VueTypeImports from 'vite-plugin-vue-type-imports' // Enables you to import types and use them in your defineProps and defineEmits

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
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
      },
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
