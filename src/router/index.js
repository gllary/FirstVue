import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior:() => ({y:0}),
  base:'/ibms/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
