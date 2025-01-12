const Listing = require('./listingModel');

async function getAll(req, res, next) {
    

    try {
    
        const listings = await Listing.find();

        // Return the search results
        res.status(200).json(listings);
    } catch (err) {
        res.status(500).json({
            error: 'An error occurred while getting all listings.',
        });
    }
}

module.exports = {listingController: { getAll }};
