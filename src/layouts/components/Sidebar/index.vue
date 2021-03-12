<template>
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper tac"> -->
  <el-row class="scrollbar-wrapper">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo picmenui"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="store.state.isCurrem"
    >
      <!-- <div class="meni-logo">logo</div> -->
      <div class="meni-logo-tow iconfont icon-github"></div>
      <el-menu-item index="1">
        <template v-slot:title>
          <div @click="handleRouter(1)">
            <i class="el-icon-user-solid"></i>
            <span>系统看板</span>
          </div>
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template v-slot:title>
          <div>
            <i class="el-icon-menu"></i>
            <span>数据详情</span>
          </div>
        </template>
        <el-menu-item index="2-1" @click="handleRouter(2)">
          具体数据
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <template v-slot:title>
          <span>用户权限</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4" @click="handleRouter(4)">
        <i class="el-icon-user-solid"></i>
        <template v-slot:title>
          <span>用户数据</span>
        </template>
      </el-menu-item>
      <el-menu-item index="5" @click="handleRouter(5)">
        <i class="el-icon-star-on"></i>
        <template v-slot:title>
          <span>扩展示例</span>
        </template>
      </el-menu-item>
    </el-menu>
  </el-row>
  <!-- </el-scrollbar> -->
</template>
<script lang='ts'>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElLoading } from "element3";

export default {
  setup() {
    // const totals = ref<Boolean>(false);
    // setTimeout(() => {
    //   totals.value = true;
    // }, 2000);
    let defaultOpeneds = ref(["1", "1-4"]);
    let store = useStore();
    // isCollapse.value = store.state.isCurrem;
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
      // console.log(isCollapse);
    }
    const router = useRouter();
    const handleRouter = (index) => {
      // console.log(index);
      if (index == 1) {
        router.push("/pic");
      } else if (index == 2) {
        router.push("/user?");
      } else if (index == 4) {
        router.push("/user_der");
      } else if (index == 5) {
        router.push("/vszantion");
        const loading = ElLoading.service({
          // lock: true,
          // target: e.target,
          text: "Loading...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    };
    return {
      defaultOpeneds,
      handleOpen,
      handleClose,
      handleRouter,
      store,
    };
  },
};
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath);
// };
</script>
<style lang="scss">
.meni-logo {
  display: block;
  font-size: 3em;
  color: skyblue;
  font-style: oblique;
  margin: 10px 0;
  letter-spacing: 3px;
  animation-name: likes; // 动画名称
  animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
  animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
  animation-delay: 0s; // 动画延迟时间
  animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
  animation-duration: 0.8s;
}

@keyframes likes {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
.meni-logo-tow {
  display: block;
  font-size: 5em;
  color: skyblue;
  z-index: 100;
}
.picmenui {
  width: 100%;
}
</style>
