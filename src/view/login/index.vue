<template>
  <div class="login">
    <div class="login_header"></div>

    <div class="login_messge">
      <div class="login_dl">登录</div>
      <div class="login_pic">
        <div class="pic_accout">
          <el-input placeholder="admin" v-model="input" clearable> </el-input>
        </div>
        <div class="pic_password">
          <el-input
            placeholder="admin"
            v-model="input1"
            show-password
          ></el-input>
        </div>
      </div>
      <div class="pic_submit" @click="handleSumit()">登录</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Message } from "element3";
export default {
  setup() {
    const input = ref("");
    const input1 = ref("");
    const router = useRouter();
    const handleSumit = () => {
      if (input.value == "admin" && input1.value == "admin") {
        router.push("/pic");
        Message({
          message: "登录成功",
          type: "success",
        });
      } else {
        console.log("111");
        Message({
          message: "请输入正确的账号密码",
          type: "warning",
        });
      }
    };
    return { input, input1, handleSumit };
  },
};
</script>
<style lang='scss'>
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .login_header {
    width: 100%;
    height: 50%;
    background: #009688;
    z-index: -1;
  }
  .login_messge {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 40%;
    background: #fff;
    text-align: center;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    .login_dl {
      font-size: 2em;
      color: #009688;
      margin: 30px 0;
    }
    .login_pic {
      width: 80%;
      margin: 0 auto;
      .pic_accout {
        margin: 30px 0;
      }
    }
    .pic_submit {
      color: #fff;
      background: #009688;
      width: 20%;
      height: 40px;
      line-height: 40px;
      margin: 7% auto;
      font-size: 20px;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
      cursor: pointer;
    }
    .pic_submit:hover {
      transform: scale(1.1);
    }
  }
}
</style>