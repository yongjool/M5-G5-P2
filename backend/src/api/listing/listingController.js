const Listing = require('./listingModel');

async function getAll(req, res, next) {
    

    try {
        console.log('try to getAll');
        const listings = await Listing.find();

        // Return the search results
        console.log('listings:', listings);
        res.status(200).json(listings);
    } catch (err) {
        res.status(500).json({
            error: 'An error occurred while getting all listings.',
        });
    }
}

async function getOne(req, res, next) {
    try {
        console.log(req.params);
        const listing = await Listing.findOne({ listingId: req.params.id });
        console.log(listing);
        res.status(200).json(listing);
    } catch (err) {
        res.status(500).json({
            error: 'An error occurred while getting a listing.',
        });
    }
}

module.exports = {listingController: { getAll, getOne }};
