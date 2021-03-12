<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="emit('myclick')">emit</button>
    <button @click="onclick">onclick</button>

    <el-button>默认按钮</el-button>
    <el-input></el-input>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmit, useContext } from "vue";

//1属性定义
const props = defineProps({
  msg: String,
});
console.log(props);

//2.获取上下文
const ctx = useContext();
console.log(ctx);
//暴露
ctx.expose({
  someMethod() {
    console.log("some message from helloworld");
  },
});

//3.定义事件
const emit = defineEmit(["myclick"]);
const onclick = () => {
  // console.log("11");
  emit("myclick");
  ctx.emit("myclick");
};

// export default defineComponent({
//   name: "HelloWorld",
//   props: {
//     msg: {
//       type: String,
//       required: true,
//     },
//   },
//   setup: () => {
//     const count = ref(0);
//     return { count };
//   },
// });
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
