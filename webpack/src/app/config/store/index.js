import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import ajax from './modules/ajax'
import oauth from './modules/oauth'

import {sessionStoragePlugin} from './plugins/sessionStorage'
import {notificationPlugin} from './plugins/notification'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ajax,
    oauth
  },
  strict: debug,
  plugins: debug ? [createLogger(), sessionStoragePlugin, notificationPlugin] : [sessionStoragePlugin, notificationPlugin]
})
