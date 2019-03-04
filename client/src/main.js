import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

library.add(faCoffee)
library.add(faSadTear)
library.add(faFrown)
library.add(faMeh)
library.add(faSmile)
library.add(faSmileBeam)
library.add(faBed)
library.add(faMale)
library.add(faWalking)
library.add(faHiking)
library.add(faRunning) 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
