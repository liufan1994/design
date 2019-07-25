/*
 * @Author: hzq
 * @Date: 2019-07-21 10:41:08
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-25 20:14:56
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
        deg: '-52deg',
        bgcolor: 'rgb(66, 211, 189)',
        head: {
            h2: '知音APP',
            p:
                '《知音》针对现在的青少年人群所设计的一款轻松学习和放松心情的音频APP。它是合理的利用你的碎片化时间去学习和充实自己。内设随时听功能，随时随地智能推荐最新热点，让你不会错过任何感兴趣的生活细节。',
            img: 'img0'
        }
    },
    {
        name: '插画 动画 平面',
        routerName: 'plane',
        color1: '#e9b3cb',
        color2: '#f6d5dd',
        deg: '-52deg',
        // 用于【头部】的tab显示
        children: {
            tab1: {
                zhName: '插画',
                bgcolor: 'rgb(87, 217, 170)',
                head: {
                    // 标题
                    h2: '插画',
                    // 描述
                    p:
                        '根据自己看到的景物照片绘画出来的插画，没有特别具象里面的景物，凭着自己的感受所描绘出来的景象。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            },
            // tab1对应图片路径assets/web/tab1
            tab2: {
                // tab1的中文名
                zhName: '动画',
                bgcolor: 'rgb(95, 148, 229)',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '动画',
                    // 描述
                    p:
                        '平时看到的插画经过联想，作出动画效果，都是平时的小练习。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            },
            // tab1对应图片路径assets/web/tab1
            tab3: {
                // tab1的中文名
                zhName: '平面',
                bgcolor: 'rgb(26, 151, 227)',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '海报、三折页、名片等平面设计',
                    // 描述
                    p:
                        '云玺印产品推广 三折页，设计色调以科技蓝为主，以产品介绍、产品优势、产品价值展开设计，能让客户用最快的时间了解到云玺印产品，并为之感兴趣从而达到宣传效果，设计风格紧凑有规律。对个人 海报的设计，人、景相结合表现手法，分割特殊，展现人物性格。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            }
        }
    },
    {
        name: '手绘',
        routerName: 'hand',
        color1: '#a4dfb9',
        color2: '#cdf1da',
        deg: '-52deg',
        bgcolor: 'rgb(14, 56, 81)',
        head: {
            h2: '大鱼海棠主题图标',
            p:
                '所有活着的人类，都是海里的一条巨大的鱼；出生的时候他们从海的此岸出发······他们的生命就像横越大海，有时相遇，有时分开······死的时候，他们便到了岸，各去各的世界。',
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
                zhName: '云玺印LOGO',
                bgcolor: 'rgb(0, 161, 236)',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '云玺印LOGO',
                    // 描述
                    p:
                        '根据公司产品需求，以为印刷行业服务的软件为前提，设计结合印刷元素，所以提出印刷四原色CMYK为LOGO颜色，为让LOGO的辨识度更高，LOGO以字体形式设计，以软件名称“云玺印”简化和结合来设计，为体现出科技软件的高效，快捷和科技感，LOGO风格简单、干练。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            },
            // tab1对应图片路径assets/web/tab1
            tab2: {
                // tab1的中文名
                zhName: '铲屎官LOGO',
                bgcolor: 'rgb(204, 204, 204)',
                // tab1的对应的头部数据
                head: {
                    // 标题
                    h2: '铲屎官LOGO',
                    // 描述
                    p:
                        '宠物店LOGO设计，铲屎官COOC是一家专为宠物服务的店铺，所以LOGO以宠物中最有代表的猫和狗展开设计，结合店铺名称“COOC”形态让猫和狗的形态以名称展现。整个LOGO设计以布尔运算和黄金比例分割法来设计，切割严谨、细致，LOGO形态趣味十足。',
                    // 图片名称-该图片名称是指放在sec/assets/web/tab1下的表示头部的图片名称
                    img: 'img0'
                }
            }
        }
    }
]
export default routerData
