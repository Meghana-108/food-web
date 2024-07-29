const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: String,
  name: String,
  quantity: Number,
  price: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
