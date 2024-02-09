const Neighborhood = require('../models/Neighborhood');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res) => {
    res.send('Not implemented');
});

exports.neighborhood_list = asyncHandler(async (req, res) => {
    const allNeighborhoods = await Neighborhood.find({}, 'name')
        .limit(50)
        .sort({name: 1})
        .exec();
    
    res.json(allNeighborhoods);
});

exports.neighborhood_get_detail = asyncHandler(async (req, res) => {
    const neighborhood = await Neighborhood.findById(req.params.id, 'name');
    res.json(neighborhood);
});

exports.neighborhood_get_within = asyncHandler(async (req, res) => {
    const neighborhoods = await Neighborhood.find({
        geometry: {
            $geoWithin: {
                $geometry: {
                    type: "Polygon",
                    coordinates: req.body.coordinates
                }
            }
        }
    }, 'name').exec();
    res.json(neighborhoods);
});
