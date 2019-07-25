import Vue from 'vue'
import Router from 'vue-router'
import designAllRouterData from './data/design-all-router'
import handImg from './tool/hand-img'

Vue.use(Router)

// 当前可用的路由，从所有路由里面根据designCurrRouterName筛选出来的
// 它的数据结构还是与designAllRouterData相同
const _designCurrRouterData = designAllRouterData.filter(d => {
    return handImg.designCurrRouterName.includes(d.routerName)
})

// 设计相关的页面路由配置生成
const designRoutes = _designCurrRouterData.map(d => {
    const designRouter = {
        path: '/' + d.routerName,
        name: d.routerName,
        component: () => import('./views/design.vue')
    }

    return designRouter
})

const _router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                import(/* webpackChunkName: "home" */ './views/home.vue')
        },
        {
            path: '/design',
            name: 'design',
            component: () =>
                import(/* webpackChunkName: "design" */ './views/design.vue')
        },
        ...designRoutes
    ]
})

export const router = _router
// 导出当前可用的路由数据
export const designCurrRouterData = _designCurrRouterData
