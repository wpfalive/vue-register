import Vue from 'vue'
import Router from 'vue-router'
import Phone from '@/pages/phone/Phone'
import Login from '@/pages/login/Login'
import Thirdparty from '@/pages/thirdparty/Thirdparty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Phone',
      component: Phone
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/thridparty',
      name: 'Thirdpary',
      component: Thirdparty
    }
  ]
})
