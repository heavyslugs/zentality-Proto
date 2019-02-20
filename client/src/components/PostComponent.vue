<template>

  <div class="container-fluid">

    <td class="journal">

      <div class="row">

        <div class="col-lg-5">
          <div class="modal-dialog modal-lg modal-right modal-notify modal-info" role="document">
            <div class="modal-content">
              <!--Header-->
              <div class="modal-header">
                <p class="heading lead">Journal Entry</p>
              </div>

              <div class="row">
                <div class="col-lg-5" style="padding-left:35px; padding-top:20px">
                  <tr>
                    <h5>How are you feeling today?</h5>
                      <div>
                      <tr class="mood-bar-buttons">
                        <td class="button">
                          <input type="radio" class="buttonVerySad" :name="buttonVerySad" v-model="button1" v-on:click="createPostForButtonInputVerySad">
                          <font-awesome-icon icon="sad-tear" size="3x" :style="{ color: '#ff968f'}"/>
                        </td>
                        <td class="button-two">
                          <input type="radio" class="buttonSad" :name="buttonSad" v-model="button2" v-on:click="createPostForButtonInputSad">
                          <font-awesome-icon icon="frown" size="3x" :style="{ color: '#faaf68'}"/>
                        </td>
                        <td class="button-three">
                          <input type="radio" class="buttonNeutral" :name="buttonNeutral" v-model="button3" v-on:click="createPostForButtonInputNeutral">
                          <font-awesome-icon icon="meh" size="3x" :style="{ color: '#ffed6b'}"/>
                        </td>
                        <td class="button-four">
                          <input type="radio" class="buttonHappy" :name="buttonHappy" v-model="button4" v-on:click="createPostForButtonInputHappy">
                          <font-awesome-icon icon="smile" size="3x" :style="{ color: '#afdb68'}"/>
                        </td>
                        <td class="button-five">
                          <input type="radio" class="buttonVeryHappy" :name="buttonVeryHappy" v-model="button5" v-on:click="createPostForButtonInputVeryHappy">
                          <font-awesome-icon icon="smile-beam" size="3x" :style="{ color: '#90ff8a'}"/>
                        </td>                                                                                  
                      </tr>
                      </div>
                  </tr>
                </div>

                <div class="col-lg-5" style="margin-left:75px; padding-top:18px">
                  <h5>How many hours did you sleep last night?</h5>
                  <br>
                  <textarea class="md-textarea form-control" v-model="hoursSlept" placeholder="Hours Slept?" rows="1"></textarea>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-5" style="padding-left:35px; padding-top:20px">
                  <h5>How active have you been?</h5>
                  <tr class="activity-buttons">
                    <td class="button-active">
                      <input type="radio" class="buttonOneActive" :name="buttonOneActive" v-model="buttonActive1" v-on:click="createPostForLevelOneActiveRating">
                      <font-awesome-icon icon="bed" size="3x" :style="{ color: '#ff968f'}"/>
                    </td>
                    <td class="button-active-two">
                      <input type="radio" class="buttonTwoActive" :name="buttonTwoActive" v-model="buttonActive2" v-on:click="createPostForLevelTwoActiveRating">
                      <font-awesome-icon icon="male" size="3x" :style="{ color: '#faaf68'}"/>
                    </td>
                    <td class="button-active-three">
                      <input type="radio" class="buttonThreeActive" :name="buttonThreeActive" v-model="buttonActive3" v-on:click="createPostForLevelThreeActiveRating">
                      <font-awesome-icon icon="hiking" size="3x" :style="{ color: '#ffed6b'}"/>
                    </td>
                    <td class="button-active-four">
                      <input type="radio" class="buttonFourActive" :name="buttonFourActive" v-model="buttonActive4" v-on:click="createPostForLevelFourActiveRating">
                      <font-awesome-icon icon="walking" size="3x" :style="{ color: '#afdb68'}"/>
                    </td>    
                    <td class="button-active-five">
                      <input type="radio" class="buttonFourActive" :name="buttonFourActive" v-model="buttonActive5" v-on:click="createPostForLevelFiveActiveRating">
                      <font-awesome-icon icon="running" size="3x" :style="{ color: '#90ff8a'}"/>
                    </td>                                                                                        
                  </tr>
                </div>
              </div>

              <!--Body-->
              <div class="modal-body">
                <!--Basic textarea-->
                <div class="md-form">
                  <h5>Create Your Journal Entry Here</h5>
                  <textarea type="text" id="create-post" class="md-textarea form-control" v-model="text" placeholder="Create a post" rows="5"></textarea>
                </div>

              </div>

              <!--Footer-->
              <div class="modal-footer justify-content-center">
                <a type="button" v-on:click="createPost(); createPostForHoursSlept()" class="btn btn-primary">Post</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <h1>Latest Journal Entries</h1>
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
        </div>

      </div>
      
    </td>

  </div>

</template>

<script>
import PostService from "../PostService";
import PostMoodService from "../PostMoodService";
import PostSleepService from "../PostSleepService";
import PostActiveService from "../PostActiveService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      button1: 1,
      button2: 2,
      button3: 3,
      button4: 4,
      button5: 5,
      buttonActive1: 1,
      buttonActive2: 2,
      buttonActive3: 3,
      buttonActive4: 4,
      buttonActive5: 5,
      hoursSlept: ""
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
    async createPostForButtonInputVerySad() {
      await PostMoodService.insertButtonInput(this.button1);
    },
    async createPostForButtonInputSad() {
      await PostMoodService.insertButtonInput(this.button2);
    },
    async createPostForButtonInputNeutral() {
      await PostMoodService.insertButtonInput(this.button3);
    },
    async createPostForButtonInputHappy() {
      await PostMoodService.insertButtonInput(this.button4);
    },
    async createPostForButtonInputVeryHappy() {
      await PostMoodService.insertButtonInput(this.button5);
    },
    async createPostForHoursSlept() {
      await PostSleepService.insertHoursSlept(this.hoursSlept);
      this.hoursSlept = "";
    },
    async createPostForLevelOneActiveRating() {
      await PostActiveService.insertActiveRating(this.button1);
    },
    async createPostForLevelTwoActiveRating() {
      await PostActiveService.insertActiveRating(this.button2);
    }, 
    async createPostForLevelThreeActiveRating() {
      await PostActiveService.insertActiveRating(this.button3);
    },
    async createPostForLevelFourActiveRating() {
      await PostActiveService.insertActiveRating(this.button4);
    },
    async createPostForLevelFiveActiveRating() {
      await PostActiveService.insertActiveRating(this.button5);
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
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  max-width: 1500px;
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

input.buttonVerySad {
  float: left;
  margin: 20px;
}

input.buttonSad {
  float: left;
  margin: 20px;
}
input.buttonNeutral {
  float: left;
  margin: 20px;
}

input.buttonHappy {
  float: left;
  margin: 20px;
}

input.buttonVeryHappy {
  float: left;
  margin: 20px;
}

td.button {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-two {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-three {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-four {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-five {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-active {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-active-two {
  float: fixed;
  padding: 10px;
  padding-left:10px;
  margin: 5px;
}
td.button-active-three {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-active-four {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
td.button-active-five {
  float: fixed;
  padding: 5px;
  padding-left:10px;
  margin: 10px;
}
</style>