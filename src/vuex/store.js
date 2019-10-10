import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import category from "./modules/category/index"
import things from './modules/things/index'


Vue.use(Vuex)
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    category,
    things
  }
})

