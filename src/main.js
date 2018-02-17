// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

// CSS Libraries
import 'normalize.css'


// Feather Icons
import {VueFeatherIconsSsr as icon} from 'vue-feather-icons-ssr'
//import {VueFeatherIconsSsrJsx as icon} from 'vue-feather-icons-ssr'
Vue.component('icon', icon)

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
