<template>
  <div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">{{
      str
    }}</el-button> -->

    <el-dialog
      title="修改"
      :visible.sync="dialogFormVisible"
      v-model:visible="dialogFormVisible"
    >
      <template v-slot:default>
        <el-form :model="form">
          <el-form-item label="序号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="技能" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.proficiency" placeholder="请选择活动区域">
              <el-option
                :label="item"
                :value="item"
                v-for="(item, index) in List"
                :key="index"
              ></el-option>
              <!-- <el-option label="一般" value="2"></el-option>
              <el-option label="普通" value="3"></el-option>
              <el-option label="良好" value="4"></el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth">
            <el-input
              v-model="form.region"
              autocomplete="off"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmit()">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, ref, watch, watchEffect } from "vue";
import { inject, computed } from "vue";
import { useItem, useList } from "./mode/mode";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props, ctx) {
    const { updateUser, addUser } = useItem();

    const state = reactive({
      dialogFormVisible: false,
      form: {
        id: "",
        name: "",
        proficiency: "",
        region: "",
      },
      formLabelWidth: "120px",
      List: ["菜鸡", "一般", "普通", "良好", "熟悉"],
    });
    const t_title = ref("");

    const str = (title) => {
      console.log("我被父组件调用了");
      t_title.value = title;
      if (title == "add") {
        state.dialogFormVisible = true;
        state.form.name = "";
        state.form.proficiency = "";
        state.form.region = "";
        state.form.id = "";
      } else if (title == "edit") {
        state.dialogFormVisible = props.isShow.picShow;
        state.form.name = props.isShow.data.title;
        state.form.proficiency = props.isShow.data.Proficiency;
        state.form.region = props.isShow.data.description;
        state.form.id = props.isShow.data.id;
      }
    };

    const handleSubmit = () => {
      state.dialogFormVisible = false;
      if (t_title.value == "add") {
        const params = {
          data: state.form,
        };
        addUser(params);
      } else if (t_title.value == "edit") {
        const params = {
          data: state.form,
        };
        updateUser(params);
      }

      ctx.emit("getList");
    };
    return { ...toRefs(state), str, updateUser, handleSubmit, addUser };
  },
};
</script>
<style lang='scss'>
</style>