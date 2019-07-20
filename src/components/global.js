/*
 * @Author: hzq
 * @Date: 2019-07-20 17:05:08
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-20 17:05:08
 * @文件说明: 全局注册组件方法
 */
export default {
    install(Vue) {
        // 找到components文件夹下以.vue命名的文件
        const RC = require.context('.', true, /\.vue$/)

        RC.keys().forEach(fileName => {
            const componentConfig = RC(fileName)

            // 因为得到的filename格式是: './baseButton.vue', 所以这里我们去掉头和尾，只保留真正的文件名
            let componentName = fileName
                .replace(/^\.\//, '')
                .replace(/\.\w+$/, '')
            const index = componentName.indexOf('/')
            if (index !== -1) componentName = componentName.substr(index + 1)

            Vue.component(
                componentName,
                componentConfig.default || componentConfig
            )
        })
    }
}