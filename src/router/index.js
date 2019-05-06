import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { // 默认进入登陆页面
      path: '/',
      name: 'login',
      component: () => import("@/views/login"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/dk",
      name: "dk",
      component: () => import("@/components/Layout"),
      meta: {
        title: "首页"
      },
      redirect: "/basicInfo",
      children: [
        { // 个人信息页面
          path: "/basicInfo",
          name: "basicInfo",
          component: () => import("@/views/basicInfo"),
          meta: {
            title: "个人中心"
          }
        }
      ]
    }
  ]
})
