const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Ensure this path is correct

// POST route to create a new order
router.post('/', async (req, res) => {
  try {
    const orders = req.body.orders;
    // Ensure orders is an array and has valid data
    if (!Array.isArray(orders) || orders.length === 0) {
      return res.status(400).json({ message: 'No orders provided' });
    }

    // Insert orders into the database
    const newOrders = await Order.insertMany(orders);
    res.status(200).json({ message: 'Orders placed successfully', newOrders });
  } catch (error) {
    console.error('Error creating orders:', error);
    res.status(500).json({ message: 'Error creating orders', error: error.message });
  }
});

module.exports = router;
