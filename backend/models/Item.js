const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    enum: ['Electronics', 'clothing', 'food', 'other']
  },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
