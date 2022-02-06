import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Trying to import the common store
import store from "./store"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {messages} from './messages'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
