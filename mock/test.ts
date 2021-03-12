// const mockList = [
//   { id: 1, name: "tom", age: 18 },
//   { id: 2, name: "jerry", age: 18 },
//   { id: 3, name: "mike", age: 18 },
//   { id: 4, name: "jack", age: 18 },
//   { id: 5, name: "larry", age: 18 },
//   { id: 6, name: "white", age: 18 },
//   { id: 7, name: "peter", age: 18 },
//   { id: 8, name: "james", age: 18 },
// ];
const mockList = require('./testpic.json')
module.exports = [
  {
    url: "/api/getUser",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: { id: 1, name: "tom", age: 18 },
      };
    },
  },
  {
    url: "/api/getUsers",
    type: "get",
    response: (config) => {
      // console.log(config.query)
      // 从查询参数中获取分页、过滤关键词等参数
      const { page = 1, limit = 10 } = config.query;

      // 分页
      const data = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data,
        total: mockList.length,
      };
    },
  },
  {
    url: "/api/addUser",
    type: "post",
    response: (config) => {
      const dist = config.body.data
      const piclist = {
        id: dist.id,
        description: dist.region,
        title: dist.name,
        Proficiency: dist.proficiency,
        title_color: "",
        __v: 0
      }
      mockList.push(piclist)
      // 直接返回
      return {
        code: 20000,
        total: mockList.length,
      };
    },
  },
  {
    url: "/api/updateUser",
    type: "post",
    response: (config) => {
      console.log(config)
      const modifily = config.body.data
      const data = mockList.forEach((item) => {
        if (item.id == modifily.id) {
          item.title = modifily.name,
            item.Proficiency = modifily.proficiency,
            item.description = modifily.region,
            item.id = modifily.id
        }
      })
      // const data = mockList
      return {
        code: 20000,
        data,
      };
    },
  },
  {
    url: "/api/deleteUser",
    type: "post",
    response: (config) => {
      const pic = config.body.id
      // const data = mockList.splice(pic - 1, 1)
      mockList.forEach((item) => {
        if (item.id == pic) {
          const temer = mockList.indexOf(item)
          const data = mockList.splice(temer, 1)
        }
      })
      return {
        code: 20000,
        pic
      };
    },
  },
];
