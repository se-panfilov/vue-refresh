import {BasketItem, Item} from '@/models/Item';
import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(Vuex);

const availableItems: ReadonlyArray<Item> = [
  {id: 1, title: 'Super Item 1', price: 20, desc: 'qqqqqq'},
  {id: 2, title: 'Awesome Item 2', price: 30, desc: 'wwwwww'},
  {id: 3, title: 'Just another handsome Item 3', price: 40, desc: 'eeeee'}
];

const storeOptions: StoreOptions<State> = {
  state: {
    availableItems,
    basketItems: []
  },
  getters: {
    basketItemsCount: state => state.basketItems.reduce((acc, cur) => acc += cur.quantity, 0)
  },
  mutations: {
    addItem(state: State, item: Item): void {
      const existedItemIndex = state.basketItems.findIndex(i => i.id === item.id);
      let updatedItem: BasketItem | undefined;
      let basketItems = [];

      if (existedItemIndex === -1) {
        updatedItem = {...item, quantity: 1};
        basketItems = [...state.basketItems, updatedItem];
      } else {
        updatedItem = {
          ...state.basketItems[existedItemIndex],
          quantity: state.basketItems[existedItemIndex].quantity + 1
        };
        basketItems = [...state.basketItems.slice(0, existedItemIndex), updatedItem, ...state.basketItems.slice(existedItemIndex+1)];
      }

      Vue.set(state, 'basketItems', basketItems);
    }
  },
  actions: {
    addItem(context, item: Item): void {
      context.commit('addItem', item);
    }
  },
  modules: {}
};

export default new Vuex.Store(storeOptions);

export interface State {
  availableItems: ReadonlyArray<Item>,
  basketItems: ReadonlyArray<BasketItem>
}
