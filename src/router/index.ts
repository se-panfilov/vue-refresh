import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: ReadonlyArray<any> = [
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
  routes
})

export default router
