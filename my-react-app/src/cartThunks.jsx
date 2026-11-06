import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define API endpoint
const API_URL = 'http://localhost:3001/cart';

// Add or Update Cart Item
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (item, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, item, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Get Cart Items
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Remove Cart Item
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${productId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
