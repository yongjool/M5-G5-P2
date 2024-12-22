const { Router } = require('express');
const { search } = require('../controllers/search.controller.js');

const sanitizeQuery = require('../middleware/sanitizeQuery');
const router = Router();

router.get('/search', sanitizeQuery, search);

module.exports = router;
