const express = require('express');
const Transaction = require('../../models/Accounting/Transaction');
const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// Create a new transaction
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  await newTransaction.save();
  res.status(201).json(newTransaction);
});

module.exports = router;
