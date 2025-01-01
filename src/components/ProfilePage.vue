<template>
  <div class="profile-page">
    <h1>User Profile</h1>
    <p>Username: {{ username }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'User' // Replace with dynamic data
    };
  },
  methods: {
    logout() {
      // Add logout logic here
      console.log(`Logging out ${this.username}`);
    }
  }
}
</script>

<style scoped>
.profile-page {
  text-align: center;
}
</style>
