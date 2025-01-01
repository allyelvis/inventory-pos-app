<template>
  <div class="inventory-list">
    <h1>Inventory</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inventory" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/add-inventory">Add Inventory Item</router-link>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      inventory: []
    };
  },
  created() {
    this.fetchInventory();
  },
  methods: {
    fetchInventory() {
      apiService.getInventory().then(response => {
        this.inventory = response.data;
      });
    },
    editItem(item) {
      // Navigate to edit page with item ID
      this..push(`/edit-inventory/${item.id}`);
    },
    deleteItem(id) {
      apiService.deleteInventory(id).then(() => {
        this.fetchInventory(); // Refresh inventory list
      });
    }
  }
}
</script>

<style scoped>
.inventory-list {
  text-align: center;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
