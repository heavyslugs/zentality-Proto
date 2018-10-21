<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">
    <component v-bind:is="component"> </component>
    <button type="button" class="btn btn-success">Success</button>
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