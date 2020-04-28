import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import BodyFlagsView from '@/views/BodyFlagsView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/bodyflags',
    name: 'BodyFlags',
    component: BodyFlagsView,
  },
]

const router = new VueRouter({
  routes,
})

export default router
