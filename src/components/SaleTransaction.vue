<template>
  <div class="sale-transaction">
    <h1 class="title">Sales Transaction</h1>

    <!-- Transaction Details -->
    <div class="transaction-form">
      <label for="customer">Customer Name</label>
      <input 
        id="customer" 
        v-model="transaction.customer" 
        type="text" 
        placeholder="Enter customer name" 
        class="form-control"
      />

      <label for="product">Select Product</label>
      <select 
        id="product" 
        v-model="selectedProduct" 
        class="form-control"
      >
        <option 
          v-for="product in products" 
          :key="product.id" 
          :value="product"
        >
          {{ product.name }} - ${{ product.price.toFixed(2) }}
        </option>
      </select>

      <button 
        @click="addProductToTransaction" 
        class="add-product-btn"
      >
        Add Product
      </button>
    </div>

    <!-- Items in Transaction -->
    <div v-if="transaction.items.length" class="transaction-summary">
      <h2>Items in Transaction</h2>
      <div 
        v-for="(item, index) in transaction.items" 
        :key="index" 
        class="transaction-item"
      >
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
        </div>
        <div class="item-actions">
          <button @click="increaseQty(item)">+</button>
          <button @click="decreaseQty(item)">-</button>
          <button @click="removeItem(item)">Remove</button>
        </div>
      </div>

      <!-- Total Section -->
      <div class="total-section">
        <h3>Total Amount: ${{ totalAmount.toFixed(2) }}</h3>
        <button 
          @click="finalizeTransaction" 
          class="finalize-btn"
        >
          Finalize Sale
        </button>
      </div>
    </div>

    <p v-else class="empty-message">
      No products added to transaction.
    </p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'SaleTransaction',
  setup() {
    const products = ref([]);
    const selectedProduct = ref(null);
    const transaction = ref({
      customer: '',
      items: [],
    });

    // Fetch product list from API
    onMounted(async () => {
      try {
        const response = await fetch('/api/products');
        products.value = await response.json();
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    });

    // Add product to transaction
    const addProductToTransaction = () => {
      if (selectedProduct.value) {
        const item = transaction.value.items.find(
          i => i.id === selectedProduct.value.id
        );
        if (item) {
          item.quantity += 1;
        } else {
          transaction.value.items.push({ 
            ...selectedProduct.value, 
            quantity: 1 
          });
        }
      }
    };

    // Increase item quantity
    const increaseQty = (item) => {
      item.quantity += 1;
    };

    // Decrease item quantity
    const decreaseQty = (item) => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        removeItem(item);
      }
    };

    // Remove item from transaction
    const removeItem = (item) => {
      transaction.value.items = transaction.value.items.filter(
        i => i.id !== item.id
      );
    };

    // Calculate total transaction amount
    const totalAmount = computed(() => {
      return transaction.value.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });

    // Finalize and submit transaction
    const finalizeTransaction = async () => {
      if (!transaction.value.customer || transaction.value.items.length === 0) {
        alert('Please add products and enter customer details.');
        return;
      }

      const payload = {
        customer: transaction.value.customer,
        items: transaction.value.items,
        total: totalAmount.value,
      };

      try {
        const response = await fetch('/api/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert('Sale completed successfully!');
          transaction.value = { customer: '', items: [] };
        } else {
          console.error('Transaction failed.');
        }
      } catch (error) {
        console.error('Error finalizing transaction:', error);
      }
    };

    return {
      products,
      selectedProduct,
      transaction,
      addProductToTransaction,
      increaseQty,
      decreaseQty,
      removeItem,
      totalAmount,
      finalizeTransaction,
    };
  },
};
</script>

<style scoped>
.sale-transaction {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.transaction-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-control {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product-btn {
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-product-btn:hover {
  background-color: #0056b3;
}

.transaction-summary {
  margin-top: 30px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.item-actions button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.total-section {
  text-align: right;
  margin-top: 20px;
}

.finalize-btn {
  background-color: #28a745;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.empty-message {
  text-align: center;
  margin-top: 30px;
  color: #888;
}
</style>