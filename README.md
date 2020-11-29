## mp-startup
> ### 微信小程序项目脚手架

## 命名规则
- javascript代码遵循 驼峰 命名（首字母小写，不以_下划线开头，内部私有变量以下划线开头）
- config文件：全大写或与下划线组合,不以下划线开头，例如：HELLO_WORLD
- config下面的 url.js 包含 页面URL 命名以 PAGE_ 开头，服务端接口以 URL_ 开头 全大写
- 使用es6模块规范 import export
- 使用 less 写样式（借助 vscode 的插件vscode-easy-less 自动生成 wxss）
- less 样式类名使用 全小写,"-" 的方式 例如 "section-one"

## 开发规范
- wxml 里面的类名尽量少，类名的重用在 less 里面进行
- 使用 WeUI 作为基础 UI 库
- npm 安装优先 基础的工具方法已经通过 npm 安装了一些，有需要在通过 npm
- wx的接口已经做了 promise化 直接使用即可
- app.json 里面引入要使用的组件
- ajax 请求在页面的相应声明周期里面发起就行，需要复用可以在同级目录下自行封装
- 使用 request.js 来发起 ajax 请求
- 写最酷的代码（如果做到这条以上皆可抛）