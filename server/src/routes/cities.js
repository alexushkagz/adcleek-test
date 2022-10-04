const express = require('express');
router = express.Router();
cities = require('../controllers/cities');

router.get('/', cities.cities);

module.exports = router;