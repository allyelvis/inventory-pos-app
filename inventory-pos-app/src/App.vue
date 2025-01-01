<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/orders">Orders</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app nav {
  padding: 1em;
  background-color: #333;
  color: white;
}
#app nav a {
  color: white;
  margin: 0 10px;
}
</style>
