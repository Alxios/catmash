
import firebase from 'firebase'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'

Vue.use(VueRouter)
Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyBqYItTRaXs-IJK9Dn93V6ZgmE0o1q6hU4",
  databaseURL: "https://catmash-1c701.firebaseio.com"
}

firebase.initializeApp(config)
