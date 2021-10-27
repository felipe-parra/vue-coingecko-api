<template>
  <form class="container col-12 col-md-6 col-4">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" class="form-control" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="passwordCheck">Check Password</label>
      <input
        type="password"
        name="passwordCheck"
        id="passwordCheck"
        class="form-control"
      />
    </div>
    <button type="submit" class="btn btn-primary btn-block">Register</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>