<template>
  <div>
    <h1>Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">
        Order #{{ order.id }} - Total: ${{ order.total }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ordersStore } from '../store';

export default {
  name: "Orders",
  setup() {
    const { orders } = ordersStore;
    return { orders };
  },
};
</script>
