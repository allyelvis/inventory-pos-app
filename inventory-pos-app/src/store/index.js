import { reactive } from 'vue';

export const productsStore = reactive({
  products: [],
  addProduct() {
    const newProduct = { id: Date.now(), name: "New Product", price: 0 };
    this.products.push(newProduct);
  },
  editProduct(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.name = prompt("Enter new product name:", product.name) || product.name;
      product.price = prompt("Enter new product price:", product.price) || product.price;
    }
  },
  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
  },
});

export const ordersStore = reactive({
  orders: [],
  addOrder(order) {
    this.orders.push(order);
  },
});
