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

    <div class="col-lg-5" style="padding-top:25px">
      <tr>
        <h5>How are you feeling today?</h5>
        <div>
          <tr class="mood-bar-buttons">
            <td class="button">
              <button id="button" class="btn-default-1" value="1" v-on:click="createPostForButtonInput()">
                <font-awesome-icon icon="sad-tear" size="2x"/>
              </button>
            </td>
            <td class="button-two">
              <button id="button" class="btn-default-2" value="2" v-on:click="createPostForButtonInput()">
                <font-awesome-icon icon="frown" size="2x"/>
              </button>
            </td>
            <td class="button-three">
              <button id="button" class="btn-default-3" value="3" v-on:click="createPostForButtonInput()">
                <font-awesome-icon icon="meh" size="2x"/>
              </button>
            </td>
            <td class="button-four">
              <button id="button" class="btn-default-4" value="4" v-on:click="createPostForButtonInput()">
                <font-awesome-icon icon="smile" size="2x"/>
              </button>
            </td>
            <td class="button-five">
              <button id="button" class="btn-default-5" value="5" v-on:click="createPostForButtonInput()">
                <font-awesome-icon icon="smile-beam" size="2x"/>
              </button>
            </td>
          </tr>
        </div>
      </tr>
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
