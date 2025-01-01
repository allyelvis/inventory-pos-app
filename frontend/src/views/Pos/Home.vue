<template>
  <div>
    <h2>POS Dashboard</h2>
    <button @click="goToSales">Go to Sales</button>
    <button @click="goToInventory">Go to Inventory</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToSales() {
      this..push('/pos/sales');
    },
    goToInventory() {
      this..push('/pos/inventory');
    }
  }
}
</script>
