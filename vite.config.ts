import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'  //获得代码提示的支持
import path from "path"
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";
import * as echarts from 'echarts'

// https://vitejs.dev/config/
// export default defineConfig({
//   //自定义配置 将常用的地址提前配置好 便于开发中便捷
//   // css: {},  //css配置
//   // esbuild: {}, //打包配置
//   /* 输出文件目录：在npm run build时，生成文件的目录名称 */
//   alias: {
//     '@': path.resolve(__dirname, "src"),
//     comps: path.resolve(__dirname, "src/components"),
//     apis: path.resolve(__dirname, "src/apis"),
//     views: path.resolve(__dirname, "src/view"),
//     styles: path.resolve(__dirname, "src/styles"),
//     utils: path.resolve(__dirname, "src/utils"),
//     layouts: path.resolve(__dirname, "src/layouts"),
//     plugins: path.resolve(__dirname, "src/plugins")
//   },
//   plugins: [vue(),
//   viteMockServe({
//     // default
//     mockPath: 'mock',

//   }),]
// })

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    alias: {
      '@': path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      apis: path.resolve(__dirname, "src/apis"),
      views: path.resolve(__dirname, "src/view"),
      styles: path.resolve(__dirname, "src/styles"),
      utils: path.resolve(__dirname, "src/utils"),
      layouts: path.resolve(__dirname, "src/layouts"),
      plugins: path.resolve(__dirname, "src/plugins")
    },
    // 引入第三方的配置，会将引入的第三方文件移动到E:\gitcode\工程目录\node_modules\.vite_opt_cache目录中
    optimizeDeps: {
      include: ["echarts"]
    },
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',

      }),

    ],
  };
};
