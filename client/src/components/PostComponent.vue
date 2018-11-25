<template>

  <div class="container">

    <td class="journal">

    <modal v-if="showModal"></modal>
    <button type="button" class="btn btn-primary" @click="showModal = true">Create a Journal Entry</button>

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
      <hr>
      <h1>Latest Posts</h1>
      <p class="error" v-if="error">{{ error }}</p>
        <div class="post-container">
          <div class="post"
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post._id"
            >
          {{ `${post.createdAt.getMonth()+1}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}` }}
          <p class="text">{{ post.text }}</p>
          </div>
        </div>
    </td>

  </div>

</template>

<script>
import PostService from "../PostService";
import PostMoodService from "../PostMoodService";

function getWhichButtonWasSelected() {
  var x = document.getElementById("button").value;
  return x;
}

/*function getWhichButtonWasSelected() {
  var buttonElement = document.getElementById("button");
  var buttonValue = buttonElement.getAttribute("value");
  return buttonValue;
}*/

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
      this.text = "";
    },
    async createPostForButtonInput() {
      await PostMoodService.insertButtonInput(getWhichButtonWasSelected());
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    showModal() {
      this.$refs.modalRef.show();
    },
    hideModal() {
      this.$refs.modalRef.hide();
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.post {
  align-content: center;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  max-width: 750px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

td.journal {
  padding-top: 2rem;
}

td.mood-bar {
  display: flex;
  flex-direction: row;
  padding-bottom: 900px;
  padding-left: 200px;
}

td.button-five {
  padding-right: 450px;
}

button.btn-default-1 {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff5b5f;
  background-color: #ffbdb8;
  padding: 15px;
  margin: 15px;
  outline: 0;
}

button.btn-default-1:hover {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff5b5f;
  background-color: #fccbc7;
  padding: 15px;
  margin: 15px;
}

button.btn-default-1:active {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff5b5f;
  background-color: #ff968f;
  padding: 15px;
  margin: 15px;
  transform: translateY(4px);
  outline: 0;
}

button.btn-default-2 {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff9d5b;
  background-color: #ffc895;
  padding: 15px;
  margin: 15px;
  outline: 0;
}

button.btn-default-2:hover {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff9d5b;
  background-color: #ffb570;
  padding: 15px;
  margin: 15px;
}

button.btn-default-2:active {
  float: left;
  border-radius: 60%;
  border: 1px solid #ff9d5b;
  background-color: #faaf68;
  padding: 15px;
  margin: 15px;
  transform: translateY(4px);
  outline: 0;
}

button.btn-default-3 {
  float: left;
  border-radius: 60%;
  border: 1px solid #ffef5b;
  background-color: #fffd95;
  padding: 15px;
  margin: 15px;
  outline: 0;
}

button.btn-default-3:hover {
  float: left;
  border-radius: 60%;
  border: 1px solid #ffef5b;
  background-color: #f7f5a0;
  padding: 15px;
  margin: 15px;
}

button.btn-default-3:active {
  float: left;
  border-radius: 60%;
  border: 1px solid #ffef5b;
  background-color: #fffd6b;
  padding: 15px;
  margin: 15px;
  transform: translateY(4px);
  outline: 0;
}

button.btn-default-4 {
  float: left;
  border-radius: 60%;
  border: 1px solid #7cff5b;
  background-color: #d0fd87;
  padding: 15px;
  margin: 15px;
  outline: 0;
}

button.btn-default-4:hover {
  float: left;
  border-radius: 60%;
  border: 1px solid #7cff5b;
  background-color: #bcfc56;
  padding: 15px;
  margin: 15px;
}

button.btn-default-4:active {
  float: left;
  border-radius: 60%;
  border: 1px solid #7cff5b;
  background-color: #afdb68;
  padding: 15px;
  margin: 15px;
  transform: translateY(4px);
  outline: 0;
}

button.btn-default-5 {
  float: left;
  border-radius: 60%;
  border: 1px solid #5bd658;
  background-color: #a2ff9e;
  padding: 15px;
  margin: 15px;
  outline: 0;
}

button.btn-default-5:hover {
  float: left;
  border-radius: 60%;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 15px;
  margin: 15px;
}

button.btn-default-5:active {
  float: left;
  border-radius: 60%;
  border: 1px solid #5bd658;
  background-color: #90ff8a;
  padding: 15px;
  margin: 15px;
  transform: translateY(4px);
  outline: 0;
}
</style>