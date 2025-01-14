const { Router } = require('express');
const { listingController } = require('./listingController');

const router = Router();

router.get('/', listingController.getAll);
router.get('/:id', listingController.getOne);
router.get('/seller/:sellerId', listingController.getAllUsersListings);

module.exports = router;