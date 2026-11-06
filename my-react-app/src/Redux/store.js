import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counterslice';
import cartsReducer from './Cartslice';
import SearchReducer from './Searchslice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    carts: cartsReducer,
    search: SearchReducer
  },
});

export default store;
