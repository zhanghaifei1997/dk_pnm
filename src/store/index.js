/**
 * Editor by duya
 * Date by 2019/5/1
 * desc 全局管理状态
 */

import Vuex from "vuex";
import Vue from 'vue'

import CommonStatus from './modules/CommonStatus'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    CommonStatus
  },
  getters
})

export default store
