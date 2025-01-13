const { Router } = require('express');
const { listingController } = require('./listingController');

const router = Router();

router.get('/', listingController.getAll);
router.get('/:id', listingController.getOne);
router.get('/userId/:userId', listingController.getAllUsersListings);


module.exports = router;