/*
 * @Author       : wyatt
 * @Date         : 2021-03-26 09:33:37
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 09:46:54
 * @Description  :
 * @FilePath     : /ssr-project/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      count: 108,
    },
    mutations: {
      add(state) {
        state.count += 1;
      },
      // 加⼀个初始化
      init(state, count) {
        state.count = count;
      },
    },
    actions: {
      // 加⼀个异步请求count的action
      getCount({ commit }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit("init", Math.random() * 100);
            resolve();
          }, 1000);
        });
      },
    },
    modules: {},
  });
}
