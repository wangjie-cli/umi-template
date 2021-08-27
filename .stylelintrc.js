/**
 * stylelint 配置
 * create wj by 2021/7/14
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/stylelint')],
  rules: {
    /* standard规则覆写
     * 查看所有配置项：https://stylelint.io/user-guide/rules
     *  */
    indentation: 2, // 缩进2个空格
    'color-hex-length': 'long', // 颜色16进制指定为长符号
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体系列名称列表中缺少通用族：允许
    'selector-list-comma-newline-after': 'never-multi-line',
    'selector-pseudo-element-no-unknown': null,
  },
};
