<template>
  <div class="home">
    <h1>Welcome to the Inventory POS App</h1>
    <p>Manage your inventory with ease!</p>
    <router-link to="/inventory">View Inventory</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
