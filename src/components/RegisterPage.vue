<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login here</router-link>.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      // Add registration logic here
      console.log(`Registering user: ${this.username}`);
    }
  }
}
</script>

<style scoped>
.register-page {
  text-align: center;
}
</style>
