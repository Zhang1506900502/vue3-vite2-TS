<template>
  <div class="home">
    <div>{{ state.count }}</div>
    <div class="title-menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template v-slot:title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <!-- <template v-slot:title>分组一</template> -->
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
          <el-submenu index="1-4">
            <template v-slot:title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template v-slot:title>
            <span>导航二</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template v-slot:title>
            <span>导航三</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template v-slot:title>
            <span>导航四</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
// const { defineProps }=require("vue");
import { defineProps, reactive } from "vue";
defineProps({
  msg: String,
});
const state = reactive({ count: 5 });
</script>

<style lang='scss' scoped>
.title-menu {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}
.home {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>