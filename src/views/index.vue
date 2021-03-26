<!--
 * @Author       : wyatt
 * @Date         : 2021-03-26 11:39:59
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-26 13:28:03
 * @Description  : 
 * @FilePath     : /vue-ssr/src/views/index.vue
-->
<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ store }) {
    // 约定预取逻辑编写在预取钩⼦asyncData中
    // 触发 action 后，返回 Promise 以便确定请求结果
    return store.dispatch("getCount");
  },
};
</script>

<style lang="scss" scoped></style>
