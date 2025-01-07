const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_price: { type: Number, required: true },
    sold: { type: Boolean },
    current_bid: { type: Number },
    location: { type: String, required: true },
    date: { type: String, required: true },
    closing: { type: Boolean },
    reserve: { type: Boolean },
    onedollar: { type: Boolean },
    favourite: { type: Boolean },
    price_detail: { type: String, required: true },
    image: { type: String },
});

const Product = mongoose.model('TrademeItem', productSchema);
module.exports = Product;
