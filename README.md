<!--
 * @Author       : wyatt
 * @Date         : 2021-03-25 14:34:46
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-25 15:14:46
 * @Description  : 
 * @FilePath     : /ssr-project/README.md
-->
# ssr-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## SSR预习
### 资源
[Vue.js 服务器端渲染指南](https://ssr.vuejs.org/)

### 概念

  服务端渲染：将vue实例渲染为HTML字符串直接返回，在前端激活为交互程序

### 优点
 ** SEO，由于搜索引擎爬虫抓取工具可以直接查看渲染页面。
 ** 首屏到达时间，更快的内容到达时间（time to content）

## 服务端知识
### express
```
 npm install express -S
```

### 基础实现服务端渲染
使用渲染器将vue实例成HTML字符串并返回

安装 vue-server-renderer
```
 npm i vue vue-server-renderer -S
```
> 确保版本相同匹配