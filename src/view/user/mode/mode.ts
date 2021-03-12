import { reactive, onMounted, ref } from "vue";
import request from "utils/request";
import { Message } from 'element3'

export function useList() {
  //列表数据
  const state = reactive({
    loading: true, //加载状态
    list: [],//列表数据
    total: 0,
    listQuery: {
      page: 1,
      limit: 10
    }
  })
  // 获取列表
  function getList() {
    state.loading = true;

    return request({
      url: "/getUsers",
      method: "get",
      params: state.listQuery,
    })
      .then(({ data, total }) => {
        // console.log(data)
        state.list = data;
        state.total = total;
      })
      .finally(() => {
        state.loading = false;
      });
  }
  // 删除项
  function delItem(id: string) {
    state.loading = true;

    return request({
      url: "/deleteUser",
      method: "post",
      data: { id },
    }).then((data) => {
      state.loading = false;
      console.log(data)
      Message({
        message: '删除成功',
        type: 'success'
      })
    });
  }

  // 首次获取数据
  getList();

  return { state, getList, delItem }
}
const defaultData = {
  name: "",
  age: undefined,
};

export function useItem(isEdit: Boolean, id: string) {
  const model = ref(Object.assign({}, defaultData));

  // 初始化时，根据isEdit判定是否需要获取玩家详情
  onMounted(() => {
    if (isEdit && id) {
      // 获取玩家详情
      request({
        url: "/getUser",
        method: "get",
        params: { id },
      }).then(({ data }) => {
        model.value = data;
      });
    }
  });

  const updateUser = (ispic) => {
    return request({
      url: "/updateUser",
      method: "post",
      data: ispic,
    }).then(({ data }) => {
      console.log(data)
      Message({
        message: '更改成功',
        type: 'success'
      })
    })
  };

  const addUser = (ispic) => {
    return request({
      url: "/addUser",
      method: "post",
      data: ispic,
    }).then(() => {
      Message({
        message: "增加成功",
        type: 'success'
      })
    })
  };

  return { model, updateUser, addUser };
}
