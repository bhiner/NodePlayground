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

exports.restaurant_list_by_grade = asyncHandler(async (req, res) => {  
    const allRestaurants = await Restaurant.find({ 'grades.grade': 'A' }, 'name cuisine grades')
        .limit(50)
        .sort({name: 1})
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

exports.restaurant_create = asyncHandler(async (req, res) => {
    console.log(req.body);
    const restaurant = new Restaurant({
        name: req.body.name,
        cuisine: req.body.cuisine
    });
    await restaurant.save();

    res.send('Successfully created a restaurant with id: ' + restaurant._id);
});

exports.restaurant_update = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    restaurant.name = req.body.name;
    restaurant.cuisine = req.body.cuisine;
    await restaurant.save();

    res.send('Successfully updated restaurant with id: ' + restaurant._id);
});

exports.restaurant_delete = asyncHandler(async (req, res) => {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.send('Successfully deleted restaurant with id: ' + req.params.id);
});
