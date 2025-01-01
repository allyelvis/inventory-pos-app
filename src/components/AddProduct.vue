<template>
  <div class="add-product">
    <h1 class="title">Add New Product</h1>
    
    <form @submit.prevent="submitForm" class="product-form">
      <!-- Product Name -->
      <div class="form-group">
        <label for="name">Product Name</label>
        <input 
          id="name" 
          v-model="product.name" 
          type="text" 
          required 
          class="form-control"
        />
      </div>

      <!-- Description -->
      <div class="form-group">
        <label for="description">Description</label>
        <textarea 
          id="description" 
          v-model="product.description" 
          required 
          class="form-control"
        ></textarea>
      </div>

      <!-- Price -->
      <div class="form-group">
        <label for="price">Price</label>
        <input 
          id="price" 
          v-model.number="product.price" 
          type="number" 
          min="0" 
          step="0.01" 
          required 
          class="form-control"
        />
      </div>

      <!-- Image Upload -->
      <div class="form-group">
        <label for="image">Product Image</label>
        <input 
          id="image" 
          type="file" 
          @change="handleFileUpload" 
          required 
          class="form-control"
        />
      </div>

      <!-- Submit Button -->
      <button type="submit" class="submit-button">
        Add Product
      </button>
    </form>

    <!-- Success Message -->
    <p v-if="successMessage" class="success-message">
      Product added successfully!
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AddProduct',
  setup() {
    const product = ref({
      name: '',
      description: '',
      price: null,
      image: null
    });

    const successMessage = ref('');

    // Handle file upload
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        product.value.image = file;
      }
    };

    // Form submission
    const submitForm = async () => {
      const formData = new FormData();
      formData.append('name', product.value.name);
      formData.append('description', product.value.description);
      formData.append('price', product.value.price);
      formData.append('image', product.value.image);

      try {
        const response = await fetch('/api/products', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          successMessage.value = 'Product added successfully!';
          product.value = { name: '', description: '', price: null, image: null };
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    return {
      product,
      handleFileUpload,
      submitForm,
      successMessage
    };
  }
};
</script>

<style scoped>
.add-product {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.product-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-control {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  padding: 12px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}

.success-message {
  text-align: center;
  margin-top: 20px;
  color: #4caf50;
  font-weight: bold;
}
</style>