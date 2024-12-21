const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_price: { type: Number, required: true },
    reserve_price: { type: Number, required: true },
});

const Product = mongoose.model('TrademeItem', productSchema);
module.exports = Product;
