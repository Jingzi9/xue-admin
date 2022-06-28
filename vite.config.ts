import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // cache: false
    }),
    vueJsx({})
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api',
        changeOrigin: true // 兼容基于名字的虚拟主机，a.com localhost:xxxx,b.com localhost:xxxx
        // 代理服务器实际上拿到 HTTP 请求头部的origin字段
        // 我们在开发模式：默认的origin 是真实的origin：localhost：3000
        // changeOrigin: true,代理服务会把origin 修改为目标地址 http://jsonplaceholder.typicode.com
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
