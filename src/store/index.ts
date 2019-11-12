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
    //   return state.items.filter(v => v.done)
    // }
  },
  mutations: {
    addItem(state, item: Item): void {
      const items = {...state.items, item};
      state = {...state, items }
    }
  },
  actions: {
    addItem(context, item: Item): void {
      context.commit('addItem', item)
    }
  },
  modules: {}
})
