import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incre } from '../Redux/Cartslice'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LaptopsCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Access the list of added items from the Redux store
  const addedItems = useSelector((state) => state.carts.addedItems);

  // Check if the current item is in the cart
  useEffect(() => {
    setIsAddedToCart(addedItems[props.item._id] || false);
  }, [addedItems, props.item._id]);

  const add = () => {
    dispatch(incre(props.item));
    toast.success("Item added to the cart");
    setIsAddedToCart(true); // Update local state to reflect item added
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="laptop-card">
      <img src={props.item.image} alt={props.item.title} />
      <p>{props.item.title}</p>
      <p className='price'>${props.item.price}</p>
      <p>{props.item.description}</p>
      <p>Rating: {props.item.rating.rate} ({props.item.rating.count} reviews)</p>

      {isAddedToCart ? (
        <button className="btn2" onClick={goToCart}>Go to cart</button>
      ) : (
        <button className="btn2" onClick={add}>Add to cart</button>
      )}
    </div>
  );
};

export default LaptopsCard;
