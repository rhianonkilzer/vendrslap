import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Slap from './views/Slap.vue'
// @ts-ignore
import Vendr from './views/Vendr.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slap',
      component: Slap
    },
    {
      path: '/vendr',
      name: 'vendr',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Vendr

    }
  ]
})
