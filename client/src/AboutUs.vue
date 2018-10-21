<template>
  <div id="app">
    <img alt="Zentality" src="./assets/logo.png">
    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">
    <button type="button" class="btn btn-success">Success</button>
    <p>Claire James - Team Manager and Front-end Developer</p><br>
    <p>Patrick Khuu - Business Analyst and Back-end Developer</p>
    <p>Kris Perkins - Infrastructure Analyst</p>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue';

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


<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->