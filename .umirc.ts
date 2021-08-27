/**
 * umi配置详情见 https://umijs.org/zh-CN/config
 */
import { defineConfig } from 'umi';

import routes from './config/routes.js';
import theme from './config/theme.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  // 按需加载
  dynamicImport: {},
  // 快速刷新 HRM
  fastRefresh: {},
  // 忽略moment中的语言包
  ignoreMomentLocale: true,
  // dva配置
  dva: {
    immer: {
      enableES5: true
    },
    hmr: false,
  },
  // 配置less变量
  theme,
  // 兼容
  targets: {
    ie: 11,
  },
});
