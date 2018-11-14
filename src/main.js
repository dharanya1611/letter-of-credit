import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import Vuelidate from 'vuelidate'
import VueFormWizard from 'vue-form-wizard'
Vue.use(VueFormWizard)
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(Vuelidate)
Vue.use(VeeValidate);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
