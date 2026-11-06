const Product = require('../models/productModel');
const { v4: uuidv4 } = require('uuid');

// Get Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

// Create Product
exports.createProduct = async (req, res) => {
    const { title, description, price, category, rating, image } = req.body;
    try {
        const product = new Product({
            id: uuidv4(),
            title,
            description,
            price,
            category,
            rating,
            image
        });
        await product.save();
        res.status(201).json("Product created successfully");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", err });
    }
};
