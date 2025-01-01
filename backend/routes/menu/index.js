const express = require('express');
const MenuItem = require('../../models/Restaurant/MenuItem');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Add a menu item
router.post('/', async (req, res) => {
  const newItem = new MenuItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
