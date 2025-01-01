const express = require('express');
const Fiscalization = require('../../models/Accounting/Fiscalization');
const router = express.Router();

// Get all fiscalization transactions
router.get('/', async (req, res) => {
  const fiscalizations = await Fiscalization.find();
  res.json(fiscalizations);
});

// Create a new fiscalization
router.post('/', async (req, res) => {
  const newFiscalization = new Fiscalization(req.body);
  await newFiscalization.save();
  res.status(201).json(newFiscalization);
});

module.exports = router;
