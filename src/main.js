
import './bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.config.productionTip = false

import Battle from './components/pages/Battle'
import Ranking from './components/pages/Ranking'

const routes = [
  {
    path: '/',
    name: 'battle',
    component: Battle
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
]

const router = new VueRouter({
  mode : 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
