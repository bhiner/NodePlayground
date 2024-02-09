const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

//* Removed for github
const uri = 'redacted';
mongoose.connect(`${uri}sample_restaurants`); //* Using sample data generated from MongoDB Atlas

app.get('/', (req, res) => {
    res.send('<h1>Hello World! from Express</h1>');
});

const restaurants = require('./routes/restaurants');
app.use('/restaurants', restaurants);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
