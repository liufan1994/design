/*
 * @Author: hzq
 * @Date: 2019-07-20 17:01:41
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-20 22:24:12
 * @文件说明: 将assets/design文件夹下的图片处理为对象，然后赋值给Vue.prototype
 */

// 判断对象是否含有属性
const inObj = (obj, key) => obj.hasOwnProperty(key)
// 判断是否为数组，是则push，否则赋值为数组[]
const push = (obj, key, val) => {
    if (Array.isArray(obj[key])) obj[key].push(val)
    else obj[key] = [val]
}

const designImgSrc = {}
// 找到assets/design文件夹下的所有文件
const ImgRC = require.context('@/assets/design', true)
ImgRC.keys().forEach(fileName => {
    // if (fileName.match('img0')) return

    // 因为得到的filename格式是: './web/img1.png', 所以这里我们去第一个点
    const imgSrc = fileName.substr(2)
    const imgSrcArr = imgSrc.split(/\//)
    const keyArr = imgSrcArr.filter(img => !img.match('img'))
    const len = keyArr.length
    if (len === 1) push(designImgSrc, keyArr[0], imgSrc)
    else {
        let obj = {}
        keyArr.map((item, index) => {
            if (index) {
                if (index === len - 1) push(obj, item, imgSrc)
                else if (!inObj(designImgSrc, item)) obj[item] = {}
            } else {
                if (!inObj(designImgSrc, item)) designImgSrc[item] = {}
                obj = designImgSrc[item]
            }
        })
    }
})

const designCurrRouterName = Object.keys(designImgSrc)

console.log(designImgSrc)
console.log(designCurrRouterName)

export default {
    designImgSrc,
    designCurrRouterName,
    install(Vue) {
        Vue.prototype.$designImgSrc = designImgSrc
        Vue.prototype.$designCurrRouterName = designCurrRouterName
    }
}
