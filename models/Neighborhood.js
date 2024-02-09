const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const neighborhoodSchema = new Schema({
    name: String,
    geometry: {
        type: { type: String },
        coordinates: [
            [Number, Number]
        ]
    }
});

module.exports = model('Neighborhood', neighborhoodSchema);