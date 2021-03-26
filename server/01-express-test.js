/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 14:45:46
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-25 16:25:02
 * @Description  : express 测试
 * @FilePath     : /ssr-project/server/01-express-test.js
 */

// nodejs 代码
const express = require("express");

// 获取
const server = express();

// 编写路由处理不同URL请求
server.get("/", async (req, res) => {
  res.send(`<h1>hello word</h1>`);
});

// 监听端口
server.listen(80, () => {
  console.log("Server running at http:127.0.0.1:80/");
});
