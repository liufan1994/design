/*
 * @Author: hzq
 * @Date: 2019-07-20 17:01:41
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-21 11:06:32
 * @文件说明: 将assets/design文件夹下的图片处理为对象，然后赋值给Vue.prototype.$designImgSrc
 */

// 判断对象是否含有属性-方法
const inObj = (obj, key) => obj.hasOwnProperty(key)
// 判断是否为数组，是则push，否则赋值为数组[]-方法
const push = (obj, key, val) => {
    if (Array.isArray(obj[key])) obj[key].push(val)
    else obj[key] = [val]
}

// 存放所有图片的对象，将会以第一层文件名称为key存储，而第一层文件名称也代表了当前存在的路由有哪些
const designImgSrc = {}

// 找到src/assets/design下的所有图片文件
const ImgRC = require.context('@/assets/design', true)

ImgRC.keys().forEach(fileName => {
    // 因为得到的filename格式是: './web/tab1/img1.png', 所以这里我们去掉 ./
    // web：对应的路由名称
    // tab1：对应路由下的tab1
    // tab2：对应路由下的tab2
    // tab...：对应路由下的tab...
    const imgSrc = fileName.substr(2)
    // 以/分割成数组
    const imgSrcSplitArr = imgSrc.split(/\//)

    // 筛选出不是最终图片的文件名称数组，表明图片所存放的层级；当存在.时，则表明是图片文件
    const keyArr = imgSrcSplitArr.filter(img => {
        return img.indexOf('.') === -1
    })
    // 获取该图片的层级数
    const len = keyArr.length
    // 如果为1层，则表明图片是直接放在该文件夹下的，也说明了该文件夹对应的路由是没有tab分类的
    if (len === 1) push(designImgSrc, keyArr[0], imgSrc)
    else {
        // 如果不为1，则表明该文件夹对应的路由是有tab分类的，则需要再次以tab为key存放图片数据
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

//获取designImgSrc的key，用来表示当前存在的路由
const designCurrRouterName = Object.keys(designImgSrc)

console.warn('存放所有图片的对象')
console.log(designImgSrc)
console.warn('当前存在的路由')
console.log(designCurrRouterName)

export default {
    designImgSrc,
    designCurrRouterName,
    install(Vue) {
        Vue.prototype.$designImgSrc = designImgSrc
        Vue.prototype.$designCurrRouterName = designCurrRouterName
    }
}
