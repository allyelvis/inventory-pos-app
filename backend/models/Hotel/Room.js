const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  type: { type: String, required: true },
  status: { type: String, default: 'Available' },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Room', RoomSchema);
