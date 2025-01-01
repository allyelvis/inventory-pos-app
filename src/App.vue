<script setup>
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'
import POS from './components/POS.vue'
import SaleTransaction from './components/SaleTransaction.vue'
</script>

<template>
  <div>
    <h1>POS and Inventory System</h1>
    <ProductList />
    <AddProduct />
    <POS />
    <SaleTransaction />
  </div>
</template>

<style scoped>
h1 {
  color: #42b883;
  text-align: center;
}
</style>