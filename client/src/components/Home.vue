<template>
    <div>
        <h1>Home</h1>
            <component v-bind:is="component"> </component>        
    </div>

</template>

<script>
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "app",
  components: {
    postComponent: PostComponent
  },

  data() {
    return {
      component: "postComponent"
    };
  }
};
</script>

<style>

</style>
