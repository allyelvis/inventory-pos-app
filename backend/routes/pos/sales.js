const express = require('express');
const Sale = require('../../models/Pos/Sale');
const router = express.Router();

// Get all sales
router.get('/', async (req, res) => {
  const sales = await Sale.find().populate('product');
  res.json(sales);
});

// Create a new sale
router.post('/', async (req, res) => {
  const newSale = new Sale(req.body);
  await newSale.save();
  res.status(201).json(newSale);
});

module.exports = router;
