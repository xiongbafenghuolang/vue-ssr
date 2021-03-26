/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 15:08:33
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-25 15:12:53
 * @Description  : 测试vsr
 * @FilePath     : /ssr-project/server/02-vsr-test.js
 */
// 1. 创建vue实例
const Vue = require("vue");
const app = new Vue({
  template: `<div>hello word !</div>`,
});

// 2. 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();

// 3. 用渲染器渲染vue实例
renderer
  .renderToString(app)
  .then((html) => {
    console.log(html);
  })
  .catch((err) => {
    console.log(err);
  });
