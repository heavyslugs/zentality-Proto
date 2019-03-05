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
    <div v-if="signedIn">
    <div class="content">
        <h2>Resources</h2>
        <p class="lead">Zentality acknowledges the power of multiple sources of assistance. While the purpose of the program is to allow students to journal their thoughts and essentially empower each individual user, sometimes that alone is not enough to find peace. As a result, the team wants to provide a list of resources available to UC students for those seeking additional help.</p>
    
    <div class="cards">
        <h4>University of Cincinnati affiliated resources:</h4>
        <div class="card border-danger mb-3" style="max-width: 50rem;">
            <div class="card-header">Counseling & Psychological Services</div>
            <div class="card-body">
                <h5 class="card-title">Group Services</h5>
                <p class="card-text">Group counseling is often the treatment of choice for many of students' concerns. CAPS offers a wide variety of groups each semester based on students needs.</p>
                <a href="https://uc.edu/campus-life/caps/student-services/treatment-services-options/group-counseling.html" target="_blank" class="card-link">Group services</a>
            </div>
        </div>

        <div class="card border-danger mb-3" style="max-width: 50rem;">
            <div class="card-header">Counseling & Psychological Services</div>
            <div class="card-body">
                <h5 class="card-title">One-on-One Services</h5>
                <p class="card-text">Many students use individual therapy to address personal concerns. Students typically seek services for help with adjusting to new situations, managing stress, difficulties in relationships, anxiety, depression, anger, grief, family problems and personal identity. <strong>Call 513-556-0648 between 8a-5pm to schedule an appointment</strong>.</p>
            </div>
        </div>

        <div class="card border-danger mb-3" style="max-width: 50rem;">
            <div class="card-header">Counseling & Psychological Services</div>
            <div class="card-body">
                <h5 class="card-title">Let's Talk!</h5>
                <p class="card-text">Let's Talk! is a free, confidential program which allows UC students to have brief 15-20 minute sessions with clinicians from CAPS. This service is available for all UC students who may not need traditional counseling, but could still benefit from one-on-one support. Walk-ins are available at the following times and locations:</p>
                <table class="table table-hover">
                    <tr class="table-danger">
                        <th scope="col">Location</th>
                        <th scope="col">Time</th>
                    </tr>
                    <tr>
                        <th scope="col">College of Law Room 208</th>
                        <th scope="col">Mondays @ 12:00 - 2:00pm</th>
                    </tr>
                    <tr>
                        <th scope="col">DAAP Library 6480A Aronoff</th>
                        <th scope="col">Tuesdays @ 11:30am - 1:30pm</th>
                    </tr>
                    <tr>
                        <th scope="col">Engineering and Research Center (CEAS) 535</th>
                        <th scope="col">Tuesdays @ 2:30 - 4:30pm</th>
                    </tr>
                    <tr>
                        <th scope="col">LGBTQ Center, 565 Steger</th>
                        <th scope="col">Wednesdays @ 1:00 - 3:00pm</th>
                    </tr>
                    <tr>
                        <th scope="col">Women's Center 571 Steger Student Life Center</th>
                        <th scope="col">Thursdays @ 10:00am - 12:00pm</th>
                    </tr>
                    <tr>
                        <th scope="col">MSBE501 (Student Wellness Room E501)</th>
                        <th scope="col">Thursdays @ 1:30 - 3:30pm</th>
                    </tr>                    
                    <tr>
                        <th scope="col">CCM 4230 MEH (3217)</th>
                        <th scope="col">Thursdays @ 2:00 - 4:00pm</th>
                    </tr>

                </table>
            </div>
        </div>      

        <h4>External resources:</h4>
        <div class="card border-success mb-3" style="max-width: 50rem;">
            <div class="card-header">TAO: Therapy Assistance Online</div>
            <div class="card-body">
                <h5 class="card-title">What is TAO?</h5>
                <p class="card-text">TAO is a cross-platform, online library full of interactive programs designed to teach life skills and to help you learn resilience to tackle life's hurdles.</p>
                <a href="https://thepath.taoconnect.org/local/self_help/signup.php" target="_blank" class="card-link">Sign up here</a>
            </div>
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
.content {
    padding: 35px;
    margin: auto;
}
.cards {
    width: 60%;
    padding: 10px;
    margin: auto;
}
</style>
