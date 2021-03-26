/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 14:45:46
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-25 18:09:06
 * @Description  : express 测试
 * @FilePath     : /ssr-project/server/03-express-ssr.js
 */

// nodejs 代码
const express = require("express");
// 获取
const server = express();

const Vue = require("vue");
// 2. 获取渲染器实例
const { createRenderer } = require("vue-server-renderer");
const renderer = createRenderer();

// 编写路由处理不同URL请求
// 问题1:无法交互
// 问题2: 同构开发
// 对于同构开发，我们依然使用webpack打包，我们要解决两个问题：**服务端首屏渲染和客户激活**
server.get("*", async (req, res) => {
  // res.send(`<h1>hello word</h1>`);

  // 1. 创建vue实例
  const app = new Vue({
    template: `<div >{{msg}}</div>`,
    data() {
      return {
        msg: "This is vue ssr",
      };
    },
    methods: {
      // onClick() {
      //   console.log("do something");
      // },
    },
  });

  // 3. 用渲染器渲染vue实例
  // renderer
  //   .renderToString(app)
  //   .then((html) => {
  //     res.send(html);
  //   })
  //   .catch((err) => {
  //     res.status(500);
  //     res.send("Internal Server Error,500!");
  //   });
  try {
    // renderToString将Vue的实例转换为html字符串
    const html = await renderer.renderToString(app);
    res.send(html);
  } catch (error) {
    res.status(500).send("Internal Server Error,500!");
  }
});

// 监听端口
server.listen(80, () => {
  console.log("Server running at http:127.0.0.1:80/");
});
