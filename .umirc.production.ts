/**
 * 生产环境 配置
 */
import { defineConfig } from 'umi';
import CompressionWebpackPlugin from 'compression-webpack-plugin';

export default defineConfig({
  devtool: false,
  // 打包产物后缀是否有hash
  hash: true,
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://unpkg.com/react@17.0.1/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js'
  ],
  chainWebpack: config => {
    config.plugin('CompressionWebpackPlugin')
      .use(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|json|css|html)$/
      }));
  },
  define: {
    'process.env': {
      BASE_URL: 'http://121.36.60.52:9000',
    },
  },
});
