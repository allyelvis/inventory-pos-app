const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phoneNumber: String,
  checkInDate: Date,
  checkOutDate: Date,
});

module.exports = mongoose.model('Guest', GuestSchema);
