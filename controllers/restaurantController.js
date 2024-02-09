const Restaurant = require('../models/Restaurant');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res) => {
    res.send('Not implemented');
});

exports.restaurant_list = asyncHandler(async (req, res) => {  
    const allRestaurants = await Restaurant.find({}, 'name cuisine')
        .limit(50)
        .sort({name: -1})
        .exec();
    
    res.json(allRestaurants);
});

exports.restaurant_get_detail = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id, 'name cuisine');
    res.json(restaurant);
});

exports.restaurant_get_restaurants_with_cuisine = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({cuisine: req.params.cuisine}, 'name cuisine');
    res.json(restaurants);
});
