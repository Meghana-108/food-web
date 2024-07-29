const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // For handling cross-origin requests

// Connect to MongoDB
const mongoURI = 'mongodb+srv://meghana:megh108@cluster0.opopwm4.mongodb.net/your_db_name'; // Replace with your actual database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Import and use routes
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
