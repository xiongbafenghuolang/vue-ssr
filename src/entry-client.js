/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 17:17:09
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 11:26:55
 * @Description  : 客户端入口，用于客户端激活
 * @FilePath     : /ssr-project/src/entry-client.js
 */
// 客户端入口，用于客户端激活
// 下面代码在浏览器中执行
import { createApp } from "./main";

// 创建vue,router实例

const { app, router, store } = createApp();

// 当使⽤ template 时，context.state 将作为 window.__INITIAL_STATE__ 状态⾃动嵌⼊到最终的 HTML // 在客户端挂载到应⽤程序之前，store 就应该获取到状态：
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  // 挂载
  app.$mount("#app");
});
