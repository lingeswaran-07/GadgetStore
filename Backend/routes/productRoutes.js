const express = require('express');
const productController = require('../controllers/ProductController');
const auth = require('../Middleware/auth');

const router = express.Router();

// Define routes
router.get('/get', auth, productController.getProducts);
router.post('/create', auth, productController.createProduct);

module.exports = router;
