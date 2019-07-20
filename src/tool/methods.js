/*
 * @Author: hzq
 * @Date: 2019-07-08 16:18:25
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-20 21:03:26
 * @文件说明: Vue 全局方法 封装
 */

export default {
    install(Vue, router) {
        // 页面后退
        Vue.prototype.$go = () => router.go(-1)
        // 页面跳转 push
        Vue.prototype.$to = (path = '/', query = {}) =>
            router.push({ path, query })
        // 页面跳转 replace
        Vue.prototype.$tor = (path = '/', query = {}) => {
            router.replace({ path, query })
        }

        // 判断对象是否不为空
        Vue.prototype.$objHasVal = obj => Object.keys(obj).length
    }
}
