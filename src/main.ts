import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from "./router";
//vuex
import store from "./store";

//全局样式
import "./styles/index.scss";
import "./styles/elementui.scss";
import "./assets/icofont/iconfont.css";

// axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';
//全局引入element3
import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
// Vue.config.productionTip = false
const app = createApp(App)
    .use(router)
    .use(store)
    .use(element3)
    .mount('#app')

