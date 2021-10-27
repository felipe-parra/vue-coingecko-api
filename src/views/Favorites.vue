<template>
  <div class="container">
    <h3>{{ this.name }}</h3>
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Favorites",
  data() {
    return {
      name: "Favorites",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>