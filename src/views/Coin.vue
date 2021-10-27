<template>
  <div class="coin">
    <div class="coin__header">
      <div class="coin__header-title">
        <h1>{{ coin.name }}</h1>
      </div>
      <div class="coin__header-price">
        <h2>{{ coin.price }}</h2>
      </div>
    </div>
    <div class="coin__body">
      <div class="coin__body-description">
        <p>{{ coin.description }}</p>
      </div>
      <div class="coin__body-image">
        <img :src="coin.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object,
      required: true
    }
  },
//   data() {
//     return {
//       coin: {
//         name: "",
//         price: "",
//         description: "",
//         image: "",
//       },
//     };
//   },
//   created() {
//     this.coin = this.$route.params.coin;
//   },
};
</script>

<style>
</style>