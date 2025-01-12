const { Router } = require('express');
const { listingController } = require('./listingController');

const router = Router();

router.get('/', listingController.getAll);


module.exports = router;