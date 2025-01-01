const express = require('express');
const Order = require('../../models/Restaurant/Order');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Create a new order
router.post('/', async (req, res) => {
  const orderData = req.body;
  const totalAmount = orderData.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const newOrder = new Order({ ...orderData, totalAmount });
  await newOrder.save();
  res.status(201).json(newOrder);
});

module.exports = router;
