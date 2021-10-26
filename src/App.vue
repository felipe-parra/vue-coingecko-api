<template>
  <div class="container">
    <div class="row">
      <h1>{{ this.title }}</h1>
      <input
        type="text"
        name="search"
        id="search"
        class="form-control text-light bg-dark-rounded border-0 my-4"
        placeholder="Search"
        v-model="querySearch"
        @keyup="searchCoin()"
        autofocus
      />
    </div>
  </div>
</template>

<script>
import { getAllCoins } from "./services/data.service";
export default {
  name:"",
  components: {},
  data() {
    return {
      title: "Crypto Market",
      coins: [],
      loading: true,
      querySearch: "",
      titles: ["#", "Coin", "Price", "Change", "24 Volume"],
      searchResult: [],
    };
  },
  async mounted() {
    this.loading = true;
    const res = await getAllCoins();

    this.coins = res;
    this.searchResult = res;

    this.loading = false;
  },
  methods: {
    searchCoin() {
      this.searchResult = this.coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(this.querySearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.querySearch.toLowerCase())
        );
      });
    },
  },
};
</script>

<style></style>
