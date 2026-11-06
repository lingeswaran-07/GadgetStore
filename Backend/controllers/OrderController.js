// const Order = require('../models/orderModel');
// const Product = require('../models/productModel');
// const { v4: uuidv4 } = require('uuid');

// exports.createorder = async (req, res) => {
//     const { customer_name, customer_address, customer_Phone, customer_products, order_date, estimate_delivery, user_emailaddress } = req.body;

//     try {
//         let total_price = 0;
//         for (const item of customer_products) {
//             const product = await Product.findOne({ id: item.product_id });
            
//             if (!product) {
//                 return res.status(404).json({ message: `Product with ID ${item.product_id} not found` });
//             }
//             total_price += product.price * item.quantity;
//         }

//         const order_id = uuidv4();

//         const newOrder = new Order({
//             order_id,
//             customer_name,
//             customer_address,
//             customer_Phone,
//             customer_products,
//             order_date,
//             estimate_delivery,
//             user_emailaddress,
//             total_price
//         });

//         await newOrder.save();

//         res.status(201).json({ message: "Order placed", order: newOrder });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error creating order", error: error.message });
//     }
// };

// exports.getorder = async (req, res) => {
//     try {
//         const orders = await Order.find();
//         res.status(200).json(orders);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json("Server error");
//     }
// };

const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const { v4: uuidv4 } = require('uuid');

exports.createOrder = async (req, res) => {
    const { customer_name, customer_address, customer_Phone, customer_products, order_date, estimate_delivery, user_emailaddress } = req.body;

    try {
        let total_price = 0;
        for (const item of customer_products) {
            const product = await Product.findOne({ id: item.product_id });

            if (!product) {
                return res.status(404).json({ message: `Product with ID ${item.product_id} not found` });
            }
            total_price += product.price * item.quantity;
        }

        const order_id = uuidv4();

        const newOrder = new Order({
            order_id,
            customer_name,
            customer_address,
            customer_Phone,
            customer_products,
            order_date: order_date || new Date(),
            estimate_delivery: estimate_delivery || new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            user_emailaddress,
            total_price
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully", order: newOrder });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating order", error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
