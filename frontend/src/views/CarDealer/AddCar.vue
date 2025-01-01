<template>
  <div>
    <h2>Add New Car</h2>
    <form @submit.prevent="submitCar">
      <label for="make">Make:</label>
      <input type="text" id="make" v-model="car.make" required>
      <label for="model">Model:</label>
      <input type="text" id="model" v-model="car.model" required>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="car.price" required>
      <button type="submit">Add Car</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      car: {
        make: '',
        model: '',
        price: 0,
      }
    };
  },
  methods: {
    submitCar() {
      axios.post('/api/cars', this.car)
        .then(() => {
          this..push('/cardealer/inventory');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
