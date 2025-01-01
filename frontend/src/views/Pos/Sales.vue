<template>
  <div>
    <h2>Sales Page</h2>
    <form @submit.prevent="submitSale">
      <label for="product">Product:</label>
      <input type="text" id="product" v-model="product" required>
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="quantity" required>
      <button type="submit">Complete Sale</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: '',
      quantity: 1,
    };
  },
  methods: {
    submitSale() {
      // Implement sale submission logic (e.g., API call)
      console.log();
    }
  }
}
</script>
