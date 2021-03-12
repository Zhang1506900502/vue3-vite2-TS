<template>
  <div class="pic-e">
    <!-- <Home></Home> -->
    <Contou></Contou>

    <!-- <Cool></Cool> -->
    <!-- <button @click="emit('myclick')">111</button> -->
  </div>
</template>
<script setup >
// //直接导入组件
// import Home from "../../components/comp.vue";
import { defineEmit } from "vue";
import Contou from "../../components/coolpic.vue";
//3.定义事件
const emit = defineEmit(["myclick"]);
//
</script>
<style lang="scss" scoped>
.pic-e {
  height: 100%;
}
</style>