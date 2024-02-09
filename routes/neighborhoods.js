const express = require('express');
const router = express.Router();

const neighborhood_controller = require('../controllers/neighborhoodController');

router.get('/', neighborhood_controller.neighborhood_list);

router.get('/:id', neighborhood_controller.neighborhood_get_detail);

router.post('/within', neighborhood_controller.neighborhood_get_within);

module.exports = router;
