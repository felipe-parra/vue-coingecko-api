<template>
  <form class="container col-12 col-md-6 col-lg-4" @submit.prevent="Login">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="form-control"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary btn-block rounded">
      Login
    </button>
    <p>
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>