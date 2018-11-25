//https://router.vuejs.org/guide/#html

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faSadTear)
library.add(faFrown)
library.add(faMeh)
library.add(faSmile)
library.add(faSmileBeam)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('modal', {
  template: `

  <div class="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
  <div class="modal-content" ref="modalRef">
    <!--Header-->
    <div class="modal-header">
      <p class="heading lead">Journal Entry
      </p>

      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" class="white-text">×</span>
      </button>
    </div>

    <!--Body-->
    <div class="modal-body">
      <!--Basic textarea-->
      <div class="md-form">
        <textarea type="text" id="create-post" class="md-textarea form-control" v-model="text" placeholder="Create a post" rows="5"></textarea>
      </div>

    </div>

    <!--Footer-->
    <div class="modal-footer justify-content-center">
      <a type="button" v-on:click="createPost" class="btn btn-primary waves-effect waves-light">Send
        <i class="fa fa-paper-plane ml-1"></i>
      </a>
      <a type="button" class="btn btn-outline-primary waves-effect" @click="hideModal">Cancel</a>
    </div>
  </div>
</div>
  
  `
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  render: h => h(App),
  showModal: false
}).$mount('#app')
