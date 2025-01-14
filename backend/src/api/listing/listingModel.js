const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    listingId: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerId: { type: String, required: true },
    profilePic: { type: String, required: true },
    pageViews: { type: Number, required: true },
    watchlistCount: { type: Number, required: true },
    description: { type: String, required: true },
    start_price: { type: Number, required: true },
    location: { type: String, required: true },
    createdAt: { type: String, required: true },
    images: { type: Array },
    totalRatings: { type: Number, required: true },
    sellerRating: { type: Number, required: true },
    highestBid: { type: Number, required: true },
    reserveMet: { type: Boolean, required: true },
    oneDollarReserve: { type: Boolean, required: true },
    bids: { type: Array },
    breadcrumbs: { type: Array },
});

const Listing = mongoose.model('listing', listingSchema);
module.exports = Listing;
