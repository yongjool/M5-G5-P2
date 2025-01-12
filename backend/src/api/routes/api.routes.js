const { Router } = require('express');
const { search } = require('../controllers/search.controller.js');
const { bid } = require('../controllers/bid.controller.js');
const { buy } = require('../controllers/buy.controller.js');

const {
    validateGetQuery,
    validatePostQuery,
} = require('../middleware/sanitizeQuery.js');
const router = Router();

router.get('/search', validateGetQuery, search);
router.post('/bid', validatePostQuery, bid);
router.post('/buy', validatePostQuery, buy);

module.exports = router;
