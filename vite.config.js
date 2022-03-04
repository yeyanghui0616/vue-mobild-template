/*
 * @Author: yeyanghui
 * @Description: 
 * @Date: 2022-03-04 09:19:11
 * @LastEditTime: 2022-03-04 10:44:25
 * @FilePath: /phone_template/vite.config.js
 */
import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/icons/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), createSvg('./src/icons/svg/')],
  resolve: {
    alias: {
      '@': resolve("./src"),
    },
  },
  server: {
    proxy: {
      "/api": "http://127.0.0.0:8080/",
    },
  },
})
