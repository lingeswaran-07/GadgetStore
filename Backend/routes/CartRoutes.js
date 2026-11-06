const express = require('express');
const cartController = require('../controllers/CartController');
const auth = require('../Middleware/auth');

const router = express.Router();

// Define routes using `router` instead of `app`
router.post('/', auth, cartController.createOrUpdateCart);
router.get('/', auth, cartController.getCart);
router.delete('/:product_id', auth, cartController.deleteCartItem);

module.exports = router;
