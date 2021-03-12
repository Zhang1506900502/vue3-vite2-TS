<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <!-- <router-view v-solt="{ Component }">
      <component :is="Component" />
    </router-view> -->
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>
<style lang='scss' scoped>
.app-main {
  margin-top: 2%;
  height: 60%;
}
</style>