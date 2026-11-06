// const express = require('express');
// const OrderController = require('../controllers/OrderController');
// const auth = require('../Middleware/auth');
// const router = express.Router();

// router.post('/', auth, OrderController.createorder);  // Endpoint to create an order
// router.get('/', auth, OrderController.getorder);      // Endpoint to fetch all orders

// module.exports = router;


const express = require('express');
const { createOrder, getOrders } = require('../controllers/OrderController');
const authMiddleware = require('../Middleware/auth');

const router = express.Router();

router.post('/create', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);

module.exports = router;
