<template>
  <div>
    <h2>Room Management</h2>
    <ul>
      <li v-for="room in rooms" :key="room._id">
        Room {{ room.number }} - {{ room.type }} - {{ room.status }}
        <button @click="toggleRoomStatus(room)">Toggle Status</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    fetchRooms() {
      axios.get('/api/rooms')
        .then(response => {
          this.rooms = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    toggleRoomStatus(room) {
      room.status = room.status === 'Available' ? 'Occupied' : 'Available';
      axios.put(`/api/rooms/${room._id}`, room)
        .then(() => {
          this.fetchRooms();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
