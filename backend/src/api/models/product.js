const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_price: { type: Number, required: true },
    sold: { type: Boolean, default: false },
    current_bid: { type: Number },
});

const Product = mongoose.model('TrademeItem', productSchema);
module.exports = Product;
