<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <component v-bind:is="component"> </component>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
