<template>
  <div class="add-inventory">
    <h1>Add Inventory Item</h1>
    <form @submit.prevent="addItem">
      <input type="text" v-model="name" placeholder="Item Name" required />
      <input type="number" v-model="quantity" placeholder="Quantity" required />
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      name: '',
      quantity: ''
    };
  },
  methods: {
    addItem() {
      const newItem = { name: this.name, quantity: this.quantity };
      apiService.addInventory(newItem).then(() => {
        this..push('/inventory'); // Redirect to inventory list
      });
    }
  }
}
</script>

<style scoped>
.add-inventory {
  text-align: center;
}
</style>
