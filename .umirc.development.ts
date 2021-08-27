/**
 * 开发环境 配置
 */
 import { defineConfig } from 'umi'

 export default defineConfig({
   define: {
     // 环境变量
     'process.env': {
       APP_BASE_URL: '/local-api'
     }
   },
   proxy: {
     '/local-api': {
       target: 'http://localhost:7001',
       changeOrigin: true,
       pathRewrite: {
         '^/local-api': ''
       }
     }
   }
 })