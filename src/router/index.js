import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login/Login"
import Regist from "@/components/regist/Regist"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }
  ]
})
