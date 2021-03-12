//按需引入，有时候用不着很多的element3样式组件，打包会产生大的内存，所以采用按需引入

import { ElButton, ElInput } from 'element3'
import 'element3/lib/theme-chalk/button.css'
import 'element3/lib/theme-chalk/input.css'

//插件需要导出一个函数，这里接受一个实例化
export default function (app) {
    //按需引入
    app.use(ElButton)
    app.use(ElInput)
}