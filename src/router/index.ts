import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * hidden: true                   设置为true时路由将显示在sidebar中(默认false)
 * alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                将会变为嵌套模式, 否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */

// import Login from "../view/pic/pic.vue";
// import Homina from "../view/home/index.vue"
const home = () => import(/* webpackChunkName: "home" */ 'views/home/index.vue')
// const Login = () => import(/* webpackChunkName: "pic" */ 'views/pic/pic.vue')
const Layout = () => import(/* webpackChunkName: "layouts" */ 'layouts/index.vue')
const list = () => import(/* webpackChunkName: "list" */ 'views/user/list.vue')
const pic = () => import(/* webpackChunkName: "pic" */ 'views/pic/pic.vue')
const login = () => import(/* webpackChunkName: "login" */ 'views/login/index.vue')
const vszantion = () => import(/* webpackChunkName: "vaztion" */ 'views/vszantion/index.vue')
const useder = () => import(/* webpackChunkName: "user_der" */ 'views/user_der/index.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        meta: { title: "首页", icon: "el-icon-s-home", keepAlive: true },
        component: Layout,
        redirect: '/pic',
        children: [{
            path: "pic",
            component: pic,
            name: "pic",
            meta: {
                title: "系统面板",
                icon: "el-icon-document",
            },
        }, {
            path: "/user_der",
            meta: { title: "用户数据", icon: "el-icon-s-home", keepAlive: true },
            component: useder,
        }
        ]
    },
    {
        path: "/user",
        meta: { title: "数据详情", icon: "el-icon-s-home", keepAlive: true },
        component: Layout,
        redirect: '/user/list',
        children: [{
            path: "list",
            component: list,
            meta: {
                title: "具体数据",
                icon: "el-icon-document",
            },
        }]
    },

    {
        path: "/login",
        meta: { title: "导航", icon: "el-icon-s-home", keepAlive: true },
        component: login,
    },
    {
        path: "/vszantion",
        name: "vszantion",
        component: vszantion,
    }


];
//工厂函数创建router实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;