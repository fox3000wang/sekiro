// https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  // 0:off 1:warn 2:error
  rules: {
    "@typescript-eslint/interface-name-prefix": [1, "always"], // 接口 I 开头
    "@typescript-eslint/explicit-function-return-type": ["off"], //关闭每个函数必须声明返回类型
    "@typescript-eslint/explicit-member-accessibility": [0], //成员变量必须声明可见域
    "@typescript-eslint/prefer-interface": [0], //优先使用 interface 而不是 type 定义类型
    "@typescript-eslint/camelcase": ["warn"], // 运行匈牙利命名法 fixme
    "@typescript-eslint/no-triple-slash-reference": [0], // 允许/// <reference path="" />
    "@typescript-eslint/no-parameter-properties": ["warn"],
    "@typescript-eslint/no-explicit-any": [0], // 允许使用any
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};