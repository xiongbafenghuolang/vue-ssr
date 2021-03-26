<!--
 * @Author       : wyatt
 * @Date         : 2021-03-25 14:34:40
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 11:38:09
 * @Description  : 
 * @FilePath     : /ssr-project/src/App.vue
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/">index</router-link>
      <router-link to="/detail">detail</router-link>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1 @click="$store.commit('add')">{{ $store.state.count }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  // 可能的异步事件
  asyncData({ store, route }) {
    route;
    // 约定预取逻辑编写在预取钩⼦asyncData中
    // 触发 action 后，返回 Promise 以便确定请求结果
    return store.dispatch("getCount");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
