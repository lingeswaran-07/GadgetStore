import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const { products, total_price } = location.state || { products: [], total_price: 0 };

  const [order, setOrder] = useState({
    customer_name: '',
    customer_address: '',
    customer_Phone: '',
    customer_products: products.map(product => ({
      product_id: product.product_id || '',
      quantity: product.quantity || 1,
      title: product.title || '', 
    })),
    user_emailaddress: '',
    total_price: total_price,
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductChange = (index, e) => {
    const updatedProducts = order.customer_products.map((product, i) =>
      i === index ? { ...product, [e.target.name]: e.target.value } : product
    );
    setOrder({ ...order, customer_products: updatedProducts });
  };

  const handleAddProduct = () => {
    setOrder({
      ...order,
      customer_products: [...order.customer_products, { product_id: '', quantity: 1, title: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/orders', order, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Order submitted:', response.data);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Place Your Order</h2>
      <label>
        Name:
        <input
          type="text"
          name="customer_name"
          value={order.customer_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="customer_address"
          value={order.customer_address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="customer_Phone"
          value={order.customer_Phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="user_emailaddress"
          value={order.user_emailaddress}
          onChange={handleChange}
          required
        />
      </label>
      <h3>Products</h3>
      {order.customer_products.map((product, index) => (
        <div key={index} className="product-group">
          <h4>Product {index + 1}</h4>
          <label>
            Product Name:
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => handleProductChange(index, e)}
              required
            />
          </label>
          <label>
            Product ID:
            <input
              type="text"
              name="product_id"
              value={product.product_id}
              onChange={(e) => handleProductChange(index, e)}
              required
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, e)}
              min="1"
              required
            />
          </label>
        </div>
      ))}
      <button type="button" className="add-product-btn" onClick={handleAddProduct}>
        Add Another Product
      </button>
      <label className="total-price-label">
        Total Price:
        <input
          type="number"
          name="total_price"
          value={order.total_price}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Order;
