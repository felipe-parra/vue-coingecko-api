<template>
  <div class="container">
    <div class="row">
      <h1>{{ this.title }}</h1>
      <input
        type="text"
        name="search"
        id="search"
        class="form-control text-light bg-dark rounded border-0 my-4"
        placeholder="Search"
        @keyup="searchCoin()"
        v-model="querySearch"
        autofocus
      />
    </div>
    <table class="table table-hover table-dark text-light">
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coin, index) in searchResults" :key="coin.id">
          <td class="text-muted">{{ index }}</td>
          <td>
            <img
              :src="coin.image"
              :alt="coin.name"
              style="width: 2rem"
              class="me-2"
            />
            <span>
              {{ coin.name }}
            </span>
            <span class="ms-2 text-muted text-uppercase">
              {{ coin.symbol }}
            </span>
          </td>
          <td>{{ coin.current_price.toLocaleString() }}</td>
          <td
            :class="[
              coin.price_change_percentage_24h > 0
                ? 'text-success'
                : 'text-danger',
            ]"
          >
            {{ coin.price_change_percentage_24h }}
          </td>
          <td>{{ coin.total_volume.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAllCoins } from "@/services/data.service";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      title: "Crypto Market",
      coins: [],
      loading: true,
      querySearch: "",
      titles: ["#", "Coin", "Price", "Change", "24 Volume"],
      searchResults: [],
    };
  },
  async mounted() {
    this.loading = true;
    const res = await getAllCoins();

    this.coins = res;
    this.searchResults = res;
    console.log(res);
    this.loading = false;
  },
  methods: {
    searchCoin() {
      console.log(this.querySearch);
      console.log(this.searchResults.length);
      this.searchResults = this.coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(this.querySearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.querySearch.toLowerCase())
        );
      });
    },
  },
};
</script>

<style>
</style>