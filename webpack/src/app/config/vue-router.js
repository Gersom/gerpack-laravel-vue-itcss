import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// const debug = process.env.NODE_ENV !== 'production'

Vue.use(Router)

const router = new Router({
  // mode: debug ? 'hash' : 'history',
  mode: 'history',
  routes
})

export default router
