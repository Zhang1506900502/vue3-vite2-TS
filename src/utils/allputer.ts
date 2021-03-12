
import * as echarts from 'echarts'


// import { provide, inject } from 'vue';
// const ToastSymbol = Symbol(); // 用Symbol创建一个唯一标识，多个插件之间不会冲突
// const _toast = () => {

// }        // 插件的主体方法
// export function provideToast() {    // 对外暴露的方法，将 _toast 方法提供给后代组件
//     provide(ToastSymbol, _toast);
// }
// export function useToast() {    // 后代组件可以从该方法中拿到 toast 方法
//     const toast = inject(ToastSymbol);
//     if (!toast) {
//         throw new Error('error');
//     }
//     return toast;
// }