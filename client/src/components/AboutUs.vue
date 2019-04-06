<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">

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
            <a class="nav-link" href="#/aboutus">About Us<span class="sr-only">(current)</span></a>
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
    <div v-if="signedIn">
      <div class="jumbotron">
        <h3>The Problem:</h3>
        <p>The University of Michigan conducted a study that revealed that anywhere between <strong>37% to 84% of students who screened positive for depression or anxiety did not receive any counseling or psychological services</strong>, depending on their disorder (Eisenberg, Golberstein, & Gollust, 2007). University students are in a highly transitional period of their lives. In addition to taking a full course load, many students are also working full-time jobs, taking care of families, and learning how to be independent. Since mental health is often a taboo subject, the team saw a need to offer University of Cincinnati (UC) students an anonymous way of journaling their daily mental health and perform data analysis on it so they can visualize patterns in their mental behavior. </p>
        <br>
        <h3>Our Solution:</h3>
        <p>Zentality allows students to securely keep a log of their thoughts and feelings, and see patterns in their entries over time. In addition to this, students will also have access to a page of common mental health disorders, symptoms, and a list of resources with which they can follow up in order to take action on seeking additional help, should they choose to do so. The long-term, overarching goals of the application are to help break down the barriers and stigmas associated with mental health, promote a platform where UC students can each <strong>individually empower themselves to take control of their own respective mental health.</strong> Hopefully, more and more students will normalize the discussion of their mental health and take it into serious consideration as they do their physical health.</p>
      </div>

      <div class="container aboutus">
        <h1>About Us</h1>
        <p class="lead">The team at Zentality is devoted to empowering students to be in charge of their own mental healths. Each member of the team suffers from their own mental health issues and wants to end the stigma associated with it.</p>
          <br/>
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded" src="@/assets/claire.jpg" alt="Claire James" height="250">
              <h2 class="member-name">Claire James</h2>
              <p>Claire is the team manager and a full-stack developer for Zentality. She is a 5th-year at the University of Cincinnati, and plans to work for GE Aviation upon graduation.</p>
              <p><a class="btn btn-secondary" href="https://www.linkedin.com/in/claire-james-157661b3/" target="_blank" role="button">View LinkedIn »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded" src="@/assets/patrick.jpg" alt="Patrick Khuu" height="250" >
              <h2 class="member-name">Patrick Khuu</h2>
              <p>Patrick is the business analyst and a full-stack developer for Zentality. He is a 5th-year at the University of Cincinnati in the IT Accelerated Master of Business Administration Program and plans to work for PCMS upon graduation.</p>
              <p><a class="btn btn-secondary" href="https://www.linkedin.com/in/patrick-khuu-340340a4/" target="_blank" role="button">View LinkedIn »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="rounded" src="@/assets/kris.jpg" alt="Kris Perkins" height="250">
              <h2 class="member-name">Kris Perkins</h2>
              <p>Kris Perkins is the infrastructure analyst and AWS Director for Zentality. He is a 5th-year at the University of Cincinnati and plans on working at Cincinnati Insurance Company upon graduation.</p>
              <p><a class="btn btn-secondary" href="https://www.linkedin.com/in/kristian-perkins-a93135b8/" target="_blank" role="button">View LinkedIn »</a></p>
            </div>
          </div>

        </div>
    </div>
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

.container.aboutus {
  padding-top: 1.5em;

}

.member-name{
  padding-top: 0.25em;
  padding-bottom: 0.25em
}
</style>
