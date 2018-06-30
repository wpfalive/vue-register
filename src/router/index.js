import Vue from 'vue'
import Router from 'vue-router'
import Phone from '@/pages/phoneNumber/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Phone',
      component: Phone
    }
  ]
})
