const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
});

const LaptopModel = mongoose.model('Laptop', laptopSchema);
module.exports = LaptopModel;
