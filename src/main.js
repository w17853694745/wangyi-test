import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './vuex/store'

import 'lib-flexible/flexible'
//模拟数据
import './mockServer'
//vuex

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App), // <App/>
  router, // 配置路由器
  store, // 配置vuex
})
