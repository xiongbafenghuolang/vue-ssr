/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 18:04:33
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 09:05:21
 * @Description  : 最终服务端渲染脚本
 * @FilePath     : /ssr-project/server/04-ssr.js
 */
// 最终服务端渲染脚本
// nodejs 代码
const express = require("express");
// 获取
const server = express();

const { createBundleRenderer } = require("vue-server-renderer");

// 获取指定⽂件绝对路径
const resolve = (dir) => require("path").resolve(__dirname, dir);

// 第 1 步：开放dist/client⽬录，关闭默认下载index⻚的选项，不然到不了后⾯路由
server.use(express.static(resolve("../dist/client"), { index: false }));

// 第 3 步：服务端打包⽂件地址
const bundle = resolve("../dist/server/vue-ssr-server-bundle.json");

// 2. 获取渲染器实例
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext
  template: require("fs").readFileSync(
    resolve("../public/index.html"),
    "utf-8"
  ), // 宿主⽂件
  clientManifest: require(resolve(
    "../dist/client/vue-ssr-client-manifest.json"
  )), // 客户端清单
});

// 编写路由处理不同URL请求
// 问题1:无法交互
// 问题2: 同构开发
// 对于同构开发，我们依然使用webpack打包，我们要解决两个问题：**服务端首屏渲染和客户激活**
server.get("*", async (req, res) => {
  // 构造一个renderer上下文
  const context = {
    title: "ssr test",
    url: req.url, // 用户请求的地址
  };
  // 3. 用渲染器渲染vue实例
  try {
    // renderToString将Vue的实例转换为html字符串
    const html = await renderer.renderToString(context);
    res.send(html);
  } catch (error) {
    res.status(500).send("Internal Server Error,500!");
  }
});

// 监听端口
server.listen(80, () => {
  console.log("Server running at http:127.0.0.1:80/");
});
