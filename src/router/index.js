/*
 * @Author       : wyatt
 * @Date         : 2021-03-25 16:52:55
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 11:55:01
 * @Description  : router
 * @FilePath     : /ssr-project/src/router/index.js
 */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  // 客户端没有编译器，这里要写成渲染函数
  {
    path: "/",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/detail",
    component: () => import("@/views/detail.vue"),
  },
];

// 不同之处。这里应该是创建路由器实例的工厂函数
export function createRouter() {
  return new Router({
    mode: "history",
    routes,
  });
}
