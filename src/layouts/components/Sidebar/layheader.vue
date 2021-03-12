<template>
  <el-container>
    <el-header style="" class="pic-heade">
      <div class="pic-rumab">
        <Breadcrumb></Breadcrumb>
      </div>

      <el-dropdown>
        <el-tooltip content="Github" placement="bottom" effect="light">
          <sapn
            class="iconfont icon-github pic"
            @click="handleTip(1)"
            style="margin-right: 20px"
          ></sapn>
        </el-tooltip>
      </el-dropdown>
      <el-dropdown>
        <el-tooltip content="搜索" placement="bottom" effect="light">
          <sapn class="el-icon-search pic" style="margin-right: 20px"></sapn>
        </el-tooltip>
      </el-dropdown>
      <el-dropdown>
        <el-tooltip content="大屏显示" placement="bottom" effect="light">
          <sapn
            class="el-icon-full-screen pic"
            style="margin-right: 20px"
          ></sapn>
        </el-tooltip>
      </el-dropdown>
      <el-dropdown>
        <el-tooltip content="设置" placement="bottom" effect="light">
          <sapn class="el-icon-setting pic" style="margin-right: 20px"></sapn>
        </el-tooltip>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link setting—text">
          张三<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click="handleLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </el-container>
</template>

<script lang='ts'>
import Breadcrumb from "./bradecurmap.vue";
import { useRouter } from "vue-router";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      router.push("/login");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    };
    const handleTip = (t) => {
      if (t === 1) {
        window.open("https://github.com/Zhang1506900502");
      }
    };
    return { handleTip, handleLogin };
  },
  methods: {},
  components: {
    Breadcrumb,
  },
};
</script>
<style lang='scss' scoped>
.el-header {
  // background-color: #6f83c5;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}

.el-aside {
  color: #333;
}
.setting—text {
  margin-right: 20px;
  z-index: 100;
  font-size: 16px;
  cursor: pointer;
  vertical-align: middle;
}
.setting—text:hover {
  color: red;
}

.pic-rumab {
  display: inline-block;
  position: absolute;
  top: 52%;
  left: 0;
  transform: translateY(-50%);
}
.pic-heade {
  text-align: right;
  font-size: 12px;
  width: 100%;
  // margin-left: 11%;
  position: relative;
}

.icon-github:hover {
  color: #2d5bf4;
  cursor: pointer;
}

.icon-github {
  font-size: 1.2em !important;
}
</style>