const Product = require('../models/product');

async function search(req, res, next) {
    const { query } = req.query;

    // If no query is provided, return all auction items
    if (query === '') {
        const products = await Product.find();
        return res.status(200).json({ products });
    }

    if (!query) {
        return res.status(400).json({ error: 'Invalid search query' });
    }

    // Build a dynamic search filter
    let filter = {};

    // Search query filter (partial match on title and description)
    if (query) {
        filter = {
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Case-insensitive search on title
                { description: { $regex: query, $options: 'i' } }, // Case-insensitive search on description
            ],
        };
    }

    try {
        // Perform the search
        const products = await Product.find(filter);

        // Return the search results
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({
            error: 'An error occurred while searching for products.',
        });
    }
}

module.exports = {
    search,
};
