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
      </div>
      <!-- Hiding Search Bar for now
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      -->
    </nav>
    
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
            <div class="card-header">University of Cincinnati</div>
            <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>      

        <div class="card border-success mb-3" style="max-width: 50rem;">
            <div class="card-header">University of Cincinnati</div>
            <div class="card-body">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>        
    </div>


    </div>
    
    
</div>
    
    
</template>

<script>
export default {
    
}
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
