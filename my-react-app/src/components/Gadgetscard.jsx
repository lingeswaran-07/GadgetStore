import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incre } from '../Redux/Cartslice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Gadgetscard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addedItems = useSelector((state) => state.carts.addedItems);

  const add = () => {
    dispatch(incre(props.item));
    toast.success("Item added to the cart")
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const isAddedToCart = addedItems[props.item.id];

  return (
    <div className="gadget-card">
      <img src={props.item.image} alt={props.item.title} />
      <p>{props.item.title}</p>
      <p>${props.item.price}</p>
      <p>{props.item.description}</p>
      <p>{props.item.category}</p>

      {isAddedToCart ? (
        <button className="btn2" onClick={goToCart}>Go to cart</button>
      ) : (
        <button className="btn2" onClick={add}>Add to cart</button>
      )}
    </div>
  );
};

export default Gadgetscard;
