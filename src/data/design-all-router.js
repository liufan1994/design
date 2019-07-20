const routerData = [
    {
        // 路由中文名
        name: 'Web',
        // 路由名称、path
        routerName: 'web',
        // 渐变色1
        color1: '#8adedd',
        // 渐变色2
        color2: '#6cf3da',
        // 渐变角度
        deg: '-52deg',
        bgcolor: '#AAC2DE',
        children: {
            tab1: {
                zhName: '熊来疯设计大赛官网',
                head: {
                    h2: '熊来疯设计大赛官网',
                    p:
                        '熊来疯设计大赛报名官网，设计围绕熊来疯主题进行设计，风格不限。由于需求比较抽象化，整个官网由名称“熊来疯”展开设计。',
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
            }
        }
    },
    {
        name: '手机端',
        routerName: 'phone',
        color1: '#87d6ca',
        color2: '#90eccd',
        deg: '-52deg'
    },
    {
        name: '平面',
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
        deg: '-52deg'
    },
    {
        name: 'LOGO',
        routerName: 'logo',
        color1: '#ecb1bd',
        color2: '#f5d3d8',
        deg: '-52deg'
    }
]
export default routerData
