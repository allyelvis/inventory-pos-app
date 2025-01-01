const express = require('express');
const Room = require('../../models/Hotel/Room');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Update room status
router.put('/:id', async (req, res) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(room);
});

module.exports = router;
