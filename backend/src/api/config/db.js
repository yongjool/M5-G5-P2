const mongoose = require('mongoose');

let isConnected = false; // Track connection status

// Connect to MongoDB
const connectDB = async (uri) => {
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(uri);

        isConnected = true;
        console.log(`MongoDB connected - ${process.env.MONGO_URI}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
