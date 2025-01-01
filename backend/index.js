const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/aenzbi_inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const productRoutes = require('./routes/pos/products');
const saleRoutes = require('./routes/pos/sales');

// Use POS routes
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
const transactionRoutes = require('./routes/accounting/transactions');
const fiscalizationRoutes = require('./routes/accounting/fiscalization');

// Use accounting routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/fiscalization', fiscalizationRoutes);
const carRoutes = require('./routes/cars/index');

// Use car routes
app.use('/api/cars', carRoutes);
const menuRoutes = require('./routes/menu/index');
const orderRoutes = require('./routes/orders/index');

// Use restaurant routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
const roomRoutes = require('./routes/rooms/index');
const reservationRoutes = require('./routes/reservations/index');

// Use hotel routes
app.use('/api/rooms', roomRoutes);
app.use('/api/reservations', reservationRoutes);
