const Product = require('../models/product');

async function buy(req, res, next) {
    const { _id, payment } = req.body;

    // Ensure the bid amount is a valid float
    if (isNaN(payment) || payment <= 0) {
        return res.status(400).json({ error: 'Invalid payment.' });
    }

    try {
        const product = await Product.findById(_id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        if (product.sold) {
            return res
                .status(400)
                .json({ error: 'This item has already been sold.' });
        }

        if (payment < product.current_bid) {
            return res
                .status(400)
                .json({ error: 'Your payment is lower than the current bid.' });
        }

        // Update the product as sold and record the final bid
        product.sold = true;
        product.current_bid = payment;

        await product.save();

        return res.status(200).json({
            message: 'Purchase successful.',
            product,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    buy,
};
