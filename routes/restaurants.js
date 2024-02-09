const express = require('express');
const router = express.Router();

const restaurant_controller = require('../controllers/restaurantController');

router.get('/', restaurant_controller.restaurant_list);

router.get('/:id', restaurant_controller.restaurant_get_detail);

router.get('/cuisine/:cuisine', restaurant_controller.restaurant_get_restaurants_with_cuisine);

module.exports = router;
