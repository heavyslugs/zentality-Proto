<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img alt="Vue logo" src="@/assets/logo.png">
      <a class="navbar-brand" href="#">Zentality</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#/home">Home</a>
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
      </div>
      <!-- Hiding Search Bar for now
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      -->
    </nav>    
    


    <p>Claire James - Team Manager and Front-end Developer</p><br>
    <p>Patrick Khuu - Business Analyst and Back-end Developer</p>
    <p>Kris Perkins - Infrastructure Analyst</p>
    
  </div>
</template>

<script>
import PostComponent from '@/components/PostComponent.vue';

export default {
  name: 'app',
  components: {
    'postComponent':PostComponent
  },

  data() {
    return {
      component: 'postComponent'
    }
  }
};
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.container.marketing {
  padding-top: 1.5em;

}
</style>