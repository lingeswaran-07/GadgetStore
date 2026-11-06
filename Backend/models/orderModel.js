// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     order_id: {
//         type: String,
//         required: true
//     },
//     customer_name: {
//         type: String,
//         required: true
//     },
//     customer_address: {
//         type: String,
//         required: true
//     },
//     customer_Phone: {
//         type: String,  // String to match frontend input
//         required: true
//     },
//     customer_products: [{
//         product_id: {
//             type: String,
//             required: true
//         },
//         quantity: {
//             type: Number,
//             required: true
//         },
//         title: {
//             type: String,  // Added title to match frontend structure
//             required: true
//         }
//     }],
//     order_date: {
//         type: Date,
//         default: Date.now
//     },
//     estimate_delivery: {
//         type: Date,
//         default: () => Date.now() + 10 * 24 * 60 * 60 * 1000  // 10 days later
//     },
//     user_emailaddress: {
//         type: String,
//         required: true
//     },
//     total_price: {
//         type: Number,
//         required: true
//     }
// });

// const Order = mongoose.model('Order', orderSchema);
// module.exports = Order;



const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true, unique: true },
    customer_name: { type: String, required: true },
    customer_address: { type: String, required: true },
    customer_Phone: { type: String, required: true },
    customer_products: [{
        product_id: { type: String, required: true },
        quantity: { type: Number, required: true },
        title: { type: String, required: true }
    }],
    order_date: { type: Date, default: Date.now },
    estimate_delivery: { type: Date, default: () => Date.now() + 10 * 24 * 60 * 60 * 1000 },
    user_emailaddress: { type: String, required: true },
    total_price: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
