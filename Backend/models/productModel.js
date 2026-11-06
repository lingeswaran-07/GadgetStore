const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: String,
    description: String,
    price: Number,
    category: String,
    rating: {
        rate: Number,
        count: Number
    },
    image: String
});

module.exports = mongoose.model('Product', productSchema);
