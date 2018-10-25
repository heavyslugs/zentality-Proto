import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
