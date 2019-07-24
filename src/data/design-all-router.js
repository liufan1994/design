/*
 * @Author: hzq
 * @Date: 2019-07-21 10:41:08
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-24 20:58:35
 * @文件说明: 设计页的路由，可包含：web、手机端、平面、手绘、logo、等等
 */
const routerData = [
    {
        // 用于路由中文名
        name: 'Web',
        // 用于路由名称、path，并且对应src/assets/design下的文件夹
        routerName: 'web',
        // 用于【侧导航】-渐变色1
        color1: '#8adedd',
        // 用于【侧导航】-渐变色2
        color2: '#6cf3da',
        // 用于【侧导航】-渐变角度
        deg: '-52deg',
        // 用于【头部】的背景色
        bgcolor: '#AAC2DE',
        // 用于【头部】的tab显示
        children: {
            // tab1对应图片路径assets/web/tab1
            tab1: {
                // tab1的中文名
                zhName: '熊来疯设计大赛官网',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '熊来疯设计大赛官网',
                    // 描述
                    p:
                        '熊来疯设计大赛报名官网，设计围绕熊来疯主题进行设计，风格不限。由于需求比较抽象化，整个官网由名称“熊来疯”展开设计。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            },
            tab2: {
                zhName: '云玺印官网',
                bgcolor: 'rgb(26, 151, 227)',
                head: {
                    h2: '云玺印官网',
                    p:
                        '为公司软件产品设计的官网，与公司官网有一定的区别，云玺印是一个专为快印行业打造的SaaS系统，其设计风格就围绕着科技和办公来设计的。',
                    img: 'img0'
                }
            },
            tab3: {
                zhName: '拉手评选官网',
                bgcolor: 'rgb(241, 186, 158)',
                head: {
                    h2: '拉手评选官网',
                    p:
                        '为领跑评选微信投票平台设计的官网，该官网主要承载关键字和领跑评选平台的主要功能，方便百度抓取，让用户能最简单的搜索到我们的平台。',
                    img: 'img0'
                }
            }
        }
    },
    {
        name: 'APP',
        routerName: 'app',
        color1: '#87d6ca',
        color2: '#90eccd',
        deg: '-52deg'
    },
    {
        name: '平面/插画/动画',
        routerName: 'plane',
        color1: '#e9b3cb',
        color2: '#f6d5dd',
        deg: '-52deg'
    },
    {
        name: '手绘',
        routerName: 'hand',
        color1: '#a4dfb9',
        color2: '#cdf1da',
        deg: '-52deg',
        bgcolor: 'rgb(26, 151, 227)',
        head: {
            h2: '的撒的撒',
            p:
                '为领跑评选微信投票平台设计的官网，该官网主要承载关键字和领跑评选平台的主要功能，方便百度抓取，让用户能最简单的搜索到我们的平台。',
            img: 'img0'
        }
    },
    {
        name: 'LOGO',
        routerName: 'logo',
        color1: '#ecb1bd',
        color2: '#f5d3d8',
        deg: '-52deg',
        // 用于【头部】的tab显示
        children: {
            // tab1对应图片路径assets/web/tab1
            tab1: {
                // tab1的中文名
                zhName: '熊来疯设计大赛官网',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '熊来疯设计大赛官网',
                    // 描述
                    p:
                        '熊来疯设计大赛报名官网，设计围绕熊来疯主题进行设计，风格不限。由于需求比较抽象化，整个官网由名称“熊来疯”展开设计。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            }
        }
    }
]
export default routerData
