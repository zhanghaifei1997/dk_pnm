import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { // 默认进入登陆页面
      path: '/',
      name: 'login',
      component: () => import("@/views/login")
    }
  ]
})
