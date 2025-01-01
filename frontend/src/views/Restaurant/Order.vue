<template>
  <div>
    <h2>Order Summary</h2>
    <ul>
      <li v-for="(item, index) in orderItems" :key="index">
        {{ item.name }} - {{ item.quantity }} x {{ item.price }} = {{ item.quantity * item.price }}
      </li>
    </ul>
    <p>Total: {{ totalAmount }}</p>
    <button @click="submitOrder">Place Order</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['orderItems'],
  computed: {
    totalAmount() {
      return this.orderItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  },
  methods: {
    submitOrder() {
      axios.post('/api/orders', { items: this.orderItems })
        .then(() => {
          alert("Order placed successfully!");
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
