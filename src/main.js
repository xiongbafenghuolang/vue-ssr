/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 14:34:40
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 11:36:53
 * @Description  : 入口文件
 * @FilePath     : /ssr-project/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from "./store";

Vue.config.productionTip = false;

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options;
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运⾏ `this.dataPromise.then(...)` 来执⾏其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
});

// 每次请求都必须是全新的实例
// 此方法未来的调用者会是renderer
// context 是renderer传递给我们的参数
export function createApp(context) {
  // 创建路由器实例
  const router = createRouter();
  // 创建store实例
  const store = createStore();
  const app = new Vue({
    router,
    context,
    store,
    render: (h) => h(App),
  });
  // 不需要.$mount("#app")挂载，因为在服务端渲染不需要dom操作，不需要在浏览器中渲染，不需要挂载

  return { app, router, store };
}
