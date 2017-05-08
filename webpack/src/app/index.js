// imports modules || importación de modulos
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// register components || registro de componentes
import registerComponents from './config/registerComponents'
registerComponents(Vue)

// import libraries || importacion de bibliotecas
import router from './config/vue-router'
import store from 'store'
import Root from 'App/components/root'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export { app, router, store }
