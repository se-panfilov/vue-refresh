import { Item } from '@/models/Item'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const items: ReadonlyArray<Item> = [
  { id: 1, title: 'Super Item 1', price: 20, desc: 'qqqqqq' },
  { id: 2, title: 'Awesome Item 2', price: 30, desc: 'wwwwww' },
  { id: 3, title: 'Just another handsome Item 3', price: 40, desc: 'eeeee' }
]

export default new Vuex.Store({
  state: {
    items
  },
  getters: {
    // getItems: state => {
    //   return state.items.filter(todo => todo.done)
    // }
  },
  mutations: {
    addItem(item: Item): void {
      state = {...state.items, item }
    }
  },
  actions: {
    addItem(item: Item): void {
      commit('addItem', item)
    }
  },
  modules: {}
})
