<template>
  <div class="pos">
    <h1 class="title">Point of Sale</h1>

    <!-- Product List -->
    <div class="products">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>${{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)" class="add-button">
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Cart Section -->
    <div class="cart">
      <h2>Shopping Cart</h2>
      <div v-if="cart.length" class="cart-items">
        <div 
          v-for="item in cart" 
          :key="item.id" 
          class="cart-item"
        >
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
          </div>
          <div class="item-actions">
            <button @click="increaseQty(item)">+</button>
            <button @click="decreaseQty(item)">-</button>
            <button @click="removeItem(item)" class="remove-btn">Remove</button>
          </div>
        </div>
        <div class="cart-total">
          <h3>Total: ${{ totalAmount.toFixed(2) }}</h3>
          <button @click="checkout" class="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
      <p v-else class="empty-cart">Cart is empty.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'Pos',
  setup() {
    const products = ref([]);
    const cart = ref([]);

    // Fetch products on mount
    onMounted(async () => {
      try {
        const response = await fetch('/api/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    });

    // Add product to cart
    const addToCart = (product) => {
      const item = cart.value.find(i => i.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    // Increase quantity
    const increaseQty = (item) => {
      item.quantity += 1;
    };

    // Decrease quantity
    const decreaseQty = (item) => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        removeItem(item);
      }
    };

    // Remove item from cart
    const removeItem = (item) => {
      cart.value = cart.value.filter(i => i.id !== item.id);
    };

    // Calculate total amount
    const totalAmount = computed(() => {
      return cart.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });

    // Simulate checkout
    const checkout = () => {
      alert(`Total amount: $${totalAmount.value.toFixed(2)}\nThank you for your purchase!`);
      cart.value = [];
    };

    return {
      products,
      cart,
      addToCart,
      increaseQty,
      decreaseQty,
      removeItem,
      totalAmount,
      checkout
    };
  }
}
</script>

<style scoped>
.pos {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.products {
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

.add-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-button:hover {
  background-color: #0056b3;
}

.cart {
  margin-top: 40px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.item-info h3 {
  margin: 0;
}

.item-actions button {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.remove-btn {
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
}

.checkout-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

.empty-cart {
  text-align: center;
  margin-top: 20px;
}
</style>