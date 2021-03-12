<template>
  <div>
    <span class="el-icon-s-unfold pic-icon" @click="handleCoolapase"></span>

    <el-breadcrumb separator="/" class="pic-unfold">
      <el-breadcrumb-item
        :to="{ path: '/' }"
        v-if="apps.picList[0].path !== '/'"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item
        :to="{ path: `${item.path}` }"
        v-for="(item, index) in apps.picList"
        :key="index"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item :to="{ path: '/user' }">数据详情</el-breadcrumb-item> -->
      <!-- <el-breadcrumb-item :to="{ path: '/user' }">{{
        apps.picList
      }}</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script lang='ts'>
import { useStore } from "vuex";
import {
  ref,
  reactive,
  toRefs,
  computed,
  getCurrentInstance,
  watch,
} from "vue";
import { useRoute, useRouter } from "vue-router";
// import { State, Getter, Action } from "vuex";
export default {
  setup() {
    const route = useRoute();
    const { ctx } = getCurrentInstance();
    // console.log(window.location.href);
    // let apps = reactive<Array<any>>([]);
    const apps = reactive({
      picList: [],
    });
    // console.log(ctx.$router.currentRoute.value.matched)
    const pictrue = ref(false);

    const store = useStore();

    const handleFilter = () => {
      let matched = route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      // apps.picList = matched.filter((item) => item.meta && item.meta.title);
      apps.picList = matched;
      console.log(apps);
    };
    handleFilter();
    watch(route, handleFilter, {
      deep: true, // name是一个对象，需要进行深度监听
    });
    return {
      handleCoolapase: () => {
        console.log(route.matched);
        pictrue.value = !pictrue.value;
        return store.commit("addNum", pictrue.value);
      },
      apps,
    };
  },
};
</script>
<style lang='scss' scoped>
.pic-unfold {
  display: inline-block;
  padding-left: 10px;
}
.pic-icon {
  font-size: 1.5em;
  margin-left: 10px;
  cursor: pointer;
}
.pic-icon:hover {
  color: #2d5bf4;
}
</style>