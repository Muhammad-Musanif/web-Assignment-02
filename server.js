const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URI (replace <db_password> with your actual password)
const dbURI = 'mongodb+srv://muhammadmusanif7292:<Pz9XUbn5e6We3V3I>@cluster0.yqffu.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Example route for adding items to the cart
app.post('/cart', (req, res) => {
    console.log('Request body:', req.body); // Log incoming request
    res.status(200).json({ message: 'Item added to cart', data: req.body });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});