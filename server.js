// Required dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express app setup
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/tailor_orders', {
  
});
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define order schema
const orderSchema = new mongoose.Schema({
  username: String,
  address: String,
  phone: String,
  email: String,
  tailor: String,
  clothType: String,
  shirtSize: String,
  shoulderSize: String,
  handSize: String,
  bodySize: String,
  fullOrHalfHand: String,
  pantLength: String,
  hipSize: String,
  idea: String
});

// Create Order model based on schema
const Order = mongoose.model('Order', orderSchema);

// Route to handle POST requests to save orders
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    const savedOrder = await order.save();
    console.log('Order saved successfully:', savedOrder);
    res.status(201).send(savedOrder);
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).send(err); // Handle server error
  }
});

// Route to handle GET requests to fetch all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).send(err); // Handle server error
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
