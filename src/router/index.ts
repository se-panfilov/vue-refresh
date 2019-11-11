import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cart from '../views/Cart.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: ReadonlyArray<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes: [...routes]
})

export default router
