<template>
  <div class="edit-inventory">
    <h1>Edit Inventory Item</h1>
    <form @submit.prevent="updateItem">
      <input type="text" v-model="item.name" placeholder="Item Name" required />
      <input type="number" v-model="item.quantity" placeholder="Quantity" required />
      <button type="submit">Update Item</button>
    </form>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      item: {
        id: null,
        name: '',
        quantity: ''
      }
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      const id = this..params.id;
      apiService.getInventoryItem(id).then(response => {
        this.item = response.data;
      });
    },
    updateItem() {
      apiService.updateInventory(this.item).then(() => {
        this..push('/inventory'); // Redirect to inventory list
      });
    }
  }
}
</script>

<style scoped>
.edit-inventory {
  text-align: center;
}
</style>
