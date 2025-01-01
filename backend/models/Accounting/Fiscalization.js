const mongoose = require('mongoose');

const FiscalizationSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Fiscalization', FiscalizationSchema);
