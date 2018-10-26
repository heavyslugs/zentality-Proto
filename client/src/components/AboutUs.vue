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
      </div>
      <!-- Hiding Search Bar for now
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      -->
    </nav>    
    
    <div class="container marketing">

        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded" src="@/assets/claire.jpg" alt="Generic placeholder image" height="250">
            <h2 class="member-name">Claire James</h2>
            <p>Claire is the team manager and a full-stack developer for Zentality. She is a 5th-year at the University of Cincinnati, and plans to work for GE Aviation upon graduation.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
            <h2 class="member-name">Patrick Khuu</h2>
            <p>Patrick is the business analyst and a full-stack developer for Zentality. He is a 5th-year at the University of Cincinnati in the IT Accelerated Master of Business Administration Program and plans to work for PCMS upon graduation.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
            <h2 class="member-name">Kris Perkins</h2>
            <p>Kris Perkins is the infrastructure analyst and AWS Director for Zentality. He is a 5th-year at the Univesity of Cincinntai and plans on working at ____ upon graduation.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->

      </div>
    
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

.container.marketing {
  padding-top: 1.5em;

}

.member-name{
  padding-top: 0.25em;
  padding-bottom: 0.25em
}
</style>
