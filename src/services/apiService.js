import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getInventory() {
    return apiClient.get('/inventory');
  },
  getInventoryItem(id) {
    return apiClient.get(`/inventory/${id}`);
  },
  addInventory(item) {
    return apiClient.post('/inventory', item);
  },
  updateInventory(item) {
    return apiClient.put(`/inventory/${item.id}`, item);
  },
  deleteInventory(id) {
    return apiClient.delete(`/inventory/${id}`);
  },
  login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },
  register(user) {
    return apiClient.post('/auth/register', user);
  }
}
