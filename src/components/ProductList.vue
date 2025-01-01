<template>
  <div class="product-list">
    <h1 class="title">Product List</h1>
    
    <!-- Filters -->
    <div class="filters">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search products..." 
        class="search-input"
      />
      <select v-model="sortOrder" class="sort-select">
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>

    <!-- Product Grid -->
    <div v-if="filteredProducts.length" class="grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="product-card"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <span class="price">${{ product.price.toFixed(2) }}</span>
        <button @click="addToCart(product)" class="add-button">
          Add to Cart
        </button>
      </div>
    </div>

    <p v-else class="no-products">No products found.</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'ProductList',
  setup() {
    const products = ref([]);
    const searchQuery = ref('');
    const sortOrder = ref('asc');

    // Fetch products on mount
    onMounted(async () => {
      try {
        const response = await fetch('/api/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    });

    // Filter and sort products
    const filteredProducts = computed(() => {
      let filtered = products.value.filter(product => 
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

      return filtered.sort((a, b) => {
        return sortOrder.value === 'asc' 
          ? a.price - b.price 
          : b.price - a.price;
      });
    });

    const addToCart = (product) => {
      console.log('Added to cart:', product);
      // Implement cart logic here
    };

    return {
      products,
      searchQuery,
      sortOrder,
      filteredProducts,
      addToCart
    };
  }
}
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input, .sort-select {
  padding: 10px;
  font-size: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.price {
  display: block;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.add-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.add-button:hover {
  background-color: #45a049;
}

.no-products {
  text-align: center;
  margin-top: 20px;
}
</style>