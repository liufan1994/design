import Vue from 'vue'
import App from './App.vue'
import { router, designCurrRouterData } from './router'
import store from './store'
import handImg from './tool/hand-img'
import vueMethods from './tool/methods'
import componentsGlobal from './components/global'
import './icons'

Vue.use(handImg)
Vue.use(vueMethods, router)
Vue.use(componentsGlobal)

Vue.prototype.$designCurrRouterData = designCurrRouterData

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
