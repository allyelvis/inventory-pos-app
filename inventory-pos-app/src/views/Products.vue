<template>
  <div>
    <h1>Products</h1>
    <button @click="addProduct">Add Product</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="editProduct(product.id)">Edit</button>
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { productsStore } from '../store';

export default {
  name: "Products",
  setup() {
    const { products, addProduct, editProduct, deleteProduct } = productsStore;
    return { products, addProduct, editProduct, deleteProduct };
  },
};
</script>
