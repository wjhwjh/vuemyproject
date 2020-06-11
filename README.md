# vuesell

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

-------------------------------
## 项目说明
```
模仿“饿了么”做的移动做。

webpack灵活运用

对配置文件进行研究，主要的作用有哪些？ 都有那些特性？

process.env.NODE_ENV决定是否用于生产环境，

值为production时表示生产环境，用于上线用的。

dev代表开发环境

build表示生产环境


eslint代码校验

代码中是否使用，
-------------------------------
用到的知识点：
1. vue.js
2. vue-cli
3. vue-router
4. vue-resource Ajax通信
5. webpack 构建工具
6. es6+eslint eslint:es6代码风格检查工具
7. 工程化  组件化  模块化
8. 移动端常用的开发技巧
flex弹性布局
css stickyfooter
炫酷的交互设计

-------------------------------
vue-cli是一个脚手架工具，能搞定项目的目录搭建和管理等

初始化一个vue项目
vue init webpack cell

## 项目目录说明
.babellrc 文件 babel配置，能够把ES6代码通过babel编译为ES5代码，这个文件的配置是设置编译规则
属于presets是预设依赖包 
属性plugins是配置插件

.eslintrc.js 写代码时的规则说明
rules属性是一些自定义规则，属性值为0代码不使用这项规则

webpack配置

开发中的webpack功能


