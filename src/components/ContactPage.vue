<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleContact">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleContact() {
      // Add contact form submission logic here
      console.log(`Contacting us: ${this.name}, ${this.email}`);
    }
  }
}
</script>

<style scoped>
.contact-page {
  text-align: center;
}
</style>
