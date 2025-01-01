<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    register() {
      apiService.register({ username: this.username, password: this.password, email: this.email })
        .then(() => {
          this..push('/login'); // Redirect to login page
        })
        .catch(error => {
          console.error("Registration failed:", error);
        });
    }
  }
}
</script>

<style scoped>
.register {
  text-align: center;
}
</style>
