import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/activeWelfare',
      name: 'activeWelfare',
      component: ()=>import("@/page/ActiveWelfare")
    },
    {
      path: '/rulePage',
      name: '/rulePage',
      component: ()=>import("@/components/RulePage")
    },
    {
      path: '/',
      name: '/vipWelfare',
      component: ()=>import("@/page/VipWelfare")
    },
    
  ]
})
