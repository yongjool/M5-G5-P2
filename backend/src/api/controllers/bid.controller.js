const Product = require('../models/product');
async function bid(req, res, next) {
    try {
        const { _id, new_bid } = req.body;

        // Check if productId or new_bid is missing
        if (!_id || new_bid === undefined) {
            return res
                .status(400)
                .json({ error: 'Product ID and bid amount are required.' });
        }

        // Ensure new_bid is a valid float
        const bidValue = parseFloat(new_bid);
        if (isNaN(bidValue) || bidValue <= 0) {
            return res.status(400).json({ error: 'Invalid bid amount.' });
        }

        // Find the product by ID
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        // Check if the item is already sold
        if (product.sold) {
            return res.status(400).json({ error: 'Product is already sold.' });
        }

        // Check if the bid is below the current bid or start price
        const currentPrice = product.new_bid || product.start_price;
        if (bidValue <= currentPrice) {
            return res.status(400).json({
                error: 'Bid amount must be higher than the current price.',
            });
        }

        // Update the product with the new bid
        product.current_bid = bidValue;
        await product.save();

        res.status(200).json({
            message: 'Bid placed successfully.',
            product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = {
    bid,
};
