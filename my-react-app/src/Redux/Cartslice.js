import { createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchCart, removeFromCart } from '../cartThunks';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    CART: [],
    addedItems: {},
    status: 'idle',
    error: null
  },
  reducers: {
    incre: (state, action) => {
      const item = state.CART.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        // Dispatch an API call to update the quantity
        addToCart(item);
      } else {
        state.CART.push({ ...action.payload, quantity: 1 });
        state.addedItems[action.payload.id] = true;
        // Dispatch an API call to add the item
        addToCart(action.payload);
      }
    },
    decre: (state, action) => {
      const item = state.CART.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          // Dispatch an API call to update the quantity
          addToCart(item);
        } else {
          state.CART = state.CART.filter(i => i.id !== action.payload.id);
          delete state.addedItems[action.payload.id];
          // Dispatch an API call to remove the item
          removeFromCart(action.payload.id);
        }
      }
    },
    remove: (state, action) => {
      state.CART = state.CART.filter(i => i.id !== action.payload.id);
      delete state.addedItems[action.payload.id];
      // Dispatch an API call to remove the item
      removeFromCart(action.payload.id);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.CART = action.payload.cartItems;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        // Update state with the response from the server
        state.CART = action.payload.cartItems;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        // Update state with the response from the server
        state.CART = action.payload.cartItems;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { incre, decre, remove } = cartSlice.actions;
export default cartSlice.reducer;
