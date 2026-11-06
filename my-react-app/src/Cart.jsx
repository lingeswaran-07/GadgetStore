import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decre, incre, remove } from './Redux/Cartslice';
import { fetchCart } from './cartThunks';
import './Cart.css';

const Cart = () => {
  const CART = useSelector((state) => state.carts.CART);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);  // Ensure the dispatch dependency is correctly handled

  const totalCost = CART.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrderNow = () => {
    navigate('/order', {
      state: {
        products: CART.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          title: item.title,
        })),
        total_price: totalCost
      }
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <div className="cart-container">
      <h1>Cart Items</h1>
      {CART.length > 0 ? (
        <>
          <ul>
            {CART.map((item, index) => (
              <li
                key={item.id}  // Use item.id as key to ensure uniqueness
                onClick={() => handleItemClick(item)}
                className={selectedItem === item ? 'selected' : ''}
              >
                <div className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => dispatch(decre(item))}>-</button>
                    <button onClick={() => dispatch(incre(item))}>+</button>
                    <button onClick={() => dispatch(remove(item))}>Remove</button>
                  </div>
                </div>
                {selectedItem === item && (
                  <div className="cart-item-description">
                    <h2>{selectedItem.title}</h2>
                    <p>{selectedItem.description}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
          </div>
          <button className="order-now-btn" onClick={handleOrderNow}>
            Order Now
          </button>
        </>
      ) : (
        <p className="empty-cart-message">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
