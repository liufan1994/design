import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        // 当前路由的数据
        currDesignRouter: {},
        // 当前路由下的当前tab数据
        currRouterTab: {}
    },
    mutations: {
        save(state, [key, data, local = false]) {
            if (!key) throw new Error('mutations save need key！')
            const keyPath = key.split('.')
            const len = keyPath.length
            const lastKey = keyPath.pop()
            let needSave = state
            for (let i = 0; i < len - 1; i++) {
                needSave = needSave[keyPath[i]]
            }
            if (!needSave.hasOwnProperty(lastKey)) {
                throw new Error(`【${key}】 Error Key: ${lastKey}`)
            }
            needSave[lastKey] = data
            if (local) {
                window.sessionStorage.setItem(key, JSON.stringify(data))
            }
        }
    },
    plugins: [createPersistedState({ storage: window.sessionStorage })]
})
