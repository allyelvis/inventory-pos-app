<template>
  <div>
    <h2>Reservation Management</h2>
    <ul>
      <li v-for="reservation in reservations" :key="reservation._id">
        {{ reservation.guest.name }} - Room {{ reservation.room.number }} - From {{ reservation.checkInDate }} to {{ reservation.checkOutDate }}
        <button @click="cancelReservation(reservation)">Cancel</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservations: [],
    };
  },
  created() {
    this.fetchReservations();
  },
  methods: {
    fetchReservations() {
      axios.get('/api/reservations')
        .then(response => {
          this.reservations = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    cancelReservation(reservation) {
      axios.delete(`/api/reservations/${reservation._id}`)
        .then(() => {
          this.fetchReservations();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
