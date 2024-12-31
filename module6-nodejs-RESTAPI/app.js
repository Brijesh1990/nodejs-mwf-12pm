const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item');
const app = express();
// Middleware to parse incoming JSON data
app.use(express.json());
// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/restApiApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// POST API to add a user to the database
app.post('/addusers', async (req, res) => {
  console.log('Request Body:', req.body);  // Log the incoming request body
  const { name, email, phone, pin, age, address } = req.body;

  // Validation: Ensure all required fields are provided
  if (!name || !email || !phone || !pin || !age || !address) {
    return res.status(400).json({
      message: 'Missing required fields: name, email, phone, pin, age, and address are required.'
    });
  }

  try {
    // Create a new item with the provided data
    const item = new Item(req.body);
    await item.save();
    // Respond with the saved item
    res.status(201).json(item);
  } catch (err) {
    console.error('Error while creating user:', err);
    res.status(400).json({
      message: 'Error creating user.',
      error: err.message
    });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
