const { Router } = require('express');
const { searchByKeyword } = require('../controllers/search.controller.js');
const router = Router();

router.get('/search', searchByKeyword);

module.exports = router;
