const express = require('express');
const router = express.Router();

const restaurant_controller = require('../controllers/restaurantController');

router.get('/', restaurant_controller.restaurant_list);

router.get('/grade', restaurant_controller.restaurant_list_by_grade);

router.get('/:id', restaurant_controller.restaurant_get_detail);

router.get('/cuisine/:cuisine', restaurant_controller.restaurant_get_restaurants_with_cuisine);

router.post('/', restaurant_controller.restaurant_create);

router.put('/:id', restaurant_controller.restaurant_update);

router.delete('/:id', restaurant_controller.restaurant_delete);

module.exports = router;
