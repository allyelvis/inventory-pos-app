<template>
  <div>
    <h2>Restaurant Menu</h2>
    <ul>
      <li v-for="item in menuItems" :key="item._id">
        {{ item.name }} - {{ item.price }} 
        <button @click="addToOrder(item)">Add to Order</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuItems: [],
    };
  },
  created() {
    this.fetchMenuItems();
  },
  methods: {
    fetchMenuItems() {
      axios.get('/api/menu')
        .then(response => {
          this.menuItems = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addToOrder(item) {
      this.('add-to-order', item);
    }
  }
}
</script>
