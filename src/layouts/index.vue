<template>
  <div class="layouts">
    <!-- 侧边栏 -->
    <Sidebars
      class="sidebar-container"
      :style="isCurrem ? '' : 'flex:1'"
    ></Sidebars>
    <!--   -->
    <!-- 右侧内容区 -->
    <div class="layouts_right">
      <!-- 右侧顶部区 -->
      <Layheader> </Layheader>
      <!-- 内容区 -->
      <app-main></app-main>
      <!-- <router-view>
        <h1 class="">{{ name }}</h1>
        <h1>{{ age }}</h1>
        <button @click="sayName">按钮</button>
      </router-view> -->
    </div>
    <!-- <app-main></app-main> -->
  </div>
</template>

<script lang='ts'>
// import navbar from "./components/Navbar.vue";
import Sidebars from "./components/Sidebar/index.vue";
import Layheader from "./components/Sidebar/layheader.vue";
import AppMain from "./components/appmain.vue";
import { useStore } from "vuex";
import { computed, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
interface DataProps {
  name: string;
  now: number;
  birthYear: number;
  age: number;
  sayName: () => void;
}

export default {
  name: "App",
  components: {
    Sidebars,
    Layheader,
    AppMain,
  },
  setup() {
    const store = useStore();
    // const data: DataProps = reactive({
    //   name: "zhangsan",
    //   birthYear: 2000,
    //   now: 2020,
    //   sayName: () => {
    //     console.log(1111);
    //     console.log(data.name);

    //     data.name = "I am " + data.name;
    //     console.log(data.name);
    //   },
    // age: computed(() => {
    //   return data.now - data.birthYear;
    // }),
    // });
    // const refData = toRefs(data);
    // refData.age;
    return {
      ...toRefs(store.state),
      // ...refData,
    };
  },
};
</script>
<style lang='scss' scoped>
@import "../styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.layouts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  .layouts_right {
    flex: 8;
    display: inline-block;
    position: relative;
    right: 0;
    top: 0;
    height: 100%;
  }
}
</style>