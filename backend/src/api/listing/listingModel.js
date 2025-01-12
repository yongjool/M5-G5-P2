const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    seller: { type: String, required: true },
    pageViews: { type: Number, required: true },
    watchlistCount: { type: Number, required: true },
    viewCount: { type: Number, required: true },
    // description: { type: String, required: true },
    // start_price: { type: Number, required: true },
    // location: { type: String, required: true },
    createdAt: { type: String, required: true },
    images: { type: Array },
});

const Listing = mongoose.model('listing', listingSchema);
module.exports = Listing;
