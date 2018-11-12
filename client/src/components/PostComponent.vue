<template>
  <table class="journal">
    <tr class="container">
      <!-- CREATE POST HERE -->
      <td class="left">
        <div class="create-post">
          <!-- label for="create-post">Say Something... </label> -->
          <textarea type="text" id="create-post" cols="94" rows="5" v-model="text" placeholder="Create a post"></textarea>
          <button v-on:click="createPost">Post</button>
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
            {{ `${post.createdAt.getMonth()}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}` }}
            <p class="text">{{ post.text }}</p>
          </div>
        </div>
      </td>
      <td class="mood-bar">
        <div>
          <tr>
            How are you feeling today?
          </tr>
          <tr>
            <td>
              <input type="button" id="chkOne" name="experience"/>
              <p>1 - Very Poor</p>
            </td>
            <td>
              <input type="button" id="chkTwo" name="experience"/>
              <p>2 - Poor</p>
            </td>
            <td>
              <input type="button" id="chkTwo" name="experience"/>
              <p>3 - Neutral</p>
            </td>
            <td>
              <input type="button" id="chkTwo" name="experience"/>
              <p>4 - Good</p>
            </td>
            <td>
              <input type="button" id="chkFive" name="experience"/>
              <p>5 - Very Good</p>
            </td>
          </tr>
        </div>
        <hr>
      </td>
    </tr>
  </table>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
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
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.create-post {
  display: flex;
  flex-direction: row;
  padding-top: 50px;
}

div.post {
  position: relative;
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

td.mood-bar {
  position: relative;
  padding-bottom: 900px;
  padding-left: 100px;
}
</style>