import Vue from 'vue'
import Router from 'vue-router'
import Phone from '@/pages/phone/Phone'
import Login from '@/pages/login/Login'

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
    }
  ]
})
