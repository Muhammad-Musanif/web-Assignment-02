const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{ productId: String, quantity: Number }],
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;