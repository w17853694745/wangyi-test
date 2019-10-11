import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './vuex/store'

import 'lib-flexible/flexible'
//模拟数据
import './mockServer'
import lazy from './common/image/lazy2.gif'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: lazy
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App), // <App/>
  router, // 配置路由器
  store, // 配置vuex
})
