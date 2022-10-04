const express = require('express');
router = express.Router();
meteo = require('../controllers/meteo');

router.get('/', meteo.meteo);
router.get('/:insee', meteo.insee);

module.exports = router;