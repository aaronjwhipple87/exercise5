import Vue from 'vue'
import App from './App.vue'

Vue.component('app-header-status', Header);
Vue.component('app-footer-status', Footer);
Vue.component('app-ServerDetails-status', ServerDetails)

new Vue({
  el: '#app',
  render: h => h(App)
})
