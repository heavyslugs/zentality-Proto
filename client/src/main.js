import Vue from 'vue'
import App from './App.vue'
import router from 'server/routes/api/posts.js';

Vue.config.productionTip = false

new Vue({
  //Added these 3 lines 
  el: '#app',
  router,
  template: '<App/>',
  
  
  render: h => h(App)
}).$mount('#app')
