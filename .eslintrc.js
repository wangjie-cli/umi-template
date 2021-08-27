/**
 * eslint 配置文件
 * create wj by 2021/7/14
 */

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    // 强制缩进2个空格
    indent: ['error', 2],
    // jsx标签中使用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // js ts使用单引号
    quotes: ['error', 'single'],
    // 句末禁止使用分号
    semi: ['error', 'never'],
    // 关闭禁止对函数参数属性赋值
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-console': 'off',
  },
};
