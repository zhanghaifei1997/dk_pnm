// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './assets/css/reset'
import './assets/css/common'

// 引入store
import store from './store'

// 引入公用组件
import Breadcrumb from '@/components/Breadcrumb'

Vue.config.productionTip = false

Vue.use(Antd)

// 组件使用区域
Vue.component(Breadcrumb.name, Breadcrumb)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
