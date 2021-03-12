<template>
  <div>
    <div class="pic-form">
      <el-button type="primary" class="pic-add" @click="handleAdd()"
        >新增</el-button
      >
      <el-table
        :data="list"
        height="560"
        border
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="id" label="序号" width="180"> </el-table-column>
        <el-table-column prop="title" label="技能" width="180">
        </el-table-column>
        <el-table-column prop="Proficiency" label="熟练程度" width="180">
        </el-table-column>
        <el-table-column prop="description" label="简介"> </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="form-footer">
      <Pagination
        v-show="total > 0"
        :total="total"
        v-model:page="listQuery.page"
        v-model:limit="listQuery.limit"
        @pagination="getList"
      ></Pagination>
      <!-- <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination> -->
    </div>

    <Listmodify :isShow="isShow" ref="child" @getList="getList"></Listmodify>

    <!-- <div>{{ list }}</div> -->

    <!-- <button @click="getlist"></button> -->
  </div>
</template>

<script lang='ts'>
import { useList, useItem } from "./mode/mode";
import Listmodify from "./list-modify.vue";
import Pagination from "../../components/pagination.vue";
import { useRouter } from "vue-router";
import { toRefs, reactive, ref } from "vue";
import { provide } from "vue";
export default {
  name: "UserList",

  setup(props, context) {
    //玩家列表数据
    const router = useRouter();
    const { state, getList, delItem } = useList();
    const t_type = ref("");
    const child = ref();
    const isShow = reactive({
      picShow: false,
      data: {},
    });
    const handleAdd = () => {
      child.value.str("add");
    };
    const handleEdit = (index, row) => {
      isShow.picShow = true;
      isShow.data = row;
      child.value.str("edit");
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
      delItem(row.id);
      getList();
    };

    const handleEcxel = () => {};
    return {
      ...toRefs(state),
      handleEdit,
      handleDelete,
      handleAdd,
      isShow,
      child,
      getList,
      delItem,
      handleEcxel,
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  components: {
    Listmodify,
    Pagination,
  },
};
</script>
<style lang='scss'>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.pic-add {
  transform: translateY(-10px);
}
.pic-form {
  margin: 0 auto;
  width: 95%;
}
.form-footer {
  // margin: 0 auto;
  text-align: center;
  margin-top: 2%;
}
</style>