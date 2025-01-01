<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      apiService.login({ username: this.username, password: this.password })
        .then(response => {
          // Handle successful login (e.g., store token, redirect)
          console.log(response.data);
          this..push('/inventory');
        })
        .catch(error => {
          console.error("Login failed:", error);
        });
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
}
</style>
