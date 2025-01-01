<template>
  <div>
    <h2>Car Inventory</h2>
    <button @click="addCar">Add New Car</button>
    <ul>
      <li v-for="car in cars" :key="car._id">
        {{ car.make }} {{ car.model }} - {{ car.price }} 
        <button @click="editCar(car)">Edit</button>
        <button @click="deleteCar(car._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    fetchCars() {
      axios.get('/api/cars')
        .then(response => {
          this.cars = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addCar() {
      // Redirect to the add car form
      this..push('/cardealer/add');
    },
    editCar(car) {
      // Redirect to the edit car form
      this..push();
    },
    deleteCar(id) {
      axios.delete()
        .then(() => {
          this.fetchCars();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
