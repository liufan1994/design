// import Vue from 'vue'
// import SvgIcon from './h-svg' // svg组件

// // register globally
// Vue.component('h-svg', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(req.keys())
