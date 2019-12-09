import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development'

const app: any = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app') as any

// After you create app
(window as any).__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
