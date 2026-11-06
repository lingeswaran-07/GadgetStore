const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// Add or Update Cart Item
exports.createOrUpdateCart = async (req, res) => {
    const { user_id } = req.user;
    const { product_id, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            cart = new Cart({
                user_id,
                products: [{ product_id, quantity }]
            });
        } else {
            const productIndex = cart.products.findIndex(pro => pro.product_id.toString() === product_id);
            if (productIndex === -1) {
                cart.products.push({ product_id, quantity });
            } else {
                cart.products[productIndex].quantity = quantity;
            }
        }

        await cart.save();
        const updatedCart = await Cart.findOne({ user_id }).populate('products.product_id');
        res.status(201).json({ message: "Cart updated successfully", cart: updatedCart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

// Get Cart
exports.getCart = async (req, res) => {
    const { user_id } = req.user;

    try {
        const cart = await Cart.findOne({ user_id }).populate('products.product_id');
        if (!cart) {
            return res.status(404).json({ message: "Cart is empty" });
        }

        const cartItems = cart.products.map(item => ({
            product_id: item.product_id._id,
            title: item.product_id.title,
            description: item.product_id.description,
            price: item.product_id.price,
            image: item.product_id.image,
            quantity: item.quantity
        }));

        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        res.status(200).json({ cartItems, subtotal });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

// Remove Item from Cart
exports.deleteCartItem = async (req, res) => {
    const { user_id } = req.user;
    const { product_id } = req.params;

    try {
        const cart = await Cart.findOne({ user_id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex(pro => pro.product_id.toString() === product_id);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        cart.products.splice(productIndex, 1);

        if (cart.products.length === 0) {
            await Cart.deleteOne({ user_id });
            return res.status(200).json({ message: "Cart is empty" });
        }

        await cart.save();
        const updatedCart = await Cart.findOne({ user_id }).populate('products.product_id');
        res.status(200).json({ message: "Product removed successfully", cart: updatedCart });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting product from cart", err });
    }
};
