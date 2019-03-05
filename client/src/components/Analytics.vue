<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img alt="Vue logo" src="@/assets/logo.png" height="100px">
        <a class="navbar-brand" href="#">Zentality</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/analytics">Analytics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/resources">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/aboutus">About Us</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <div v-if="signedIn">
              <amplify-sign-out></amplify-sign-out>
            </div>
          </ul>
        </div>
        <!-- Hiding Search Bar for now
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        -->
      </nav>
      <div v-if="!signedIn">
        <amplify-authenticator></amplify-authenticator>
      </div>
      <div v-if="signedIn" class="visualizations">
        <iframe class="embed-responsive-item" src="https://public.tableau.com/views/MoodTimeline/Sheet1?:showVizHome=no&embed=yes&:display_count=yes&publish=yes&:tabs=no&:toolbar=no" width="900" height="600" frameBorder="0"></iframe>
      </div>

    <!--TODO: Change tabs & toolbar parameters to "yes" once we add more visualizations-->
    </div>

</template>

<script>
import { Auth } from 'aws-amplify'
import {AmplifyEventBus} from 'aws-amplify-vue'

export default {
  name: "app",
  props: {
    msg: String,
  },
  created(){
    this.findUser();
    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        this.findUser();
      } else {
        this.$store.state.signedIn = false;
        //this.signedIn = false;
        this.$store.state.user = null;
      }
    });
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn; 
    }
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        //this.signedIn = true;
        this.$store.state.signedIn = true;
        this.$store.state.user = user;
        //console.log(user);

      }
      catch(err) {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
        //this.signedIn = false;
      }

    }

  },

  data() {
    return {
    };
  }
};
</script>

<style>
.visualizations{
  padding-left: 25%;
  padding-right: 25%;
  align-content: center;
}
</style>


