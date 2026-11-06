import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1; 
    },
    decrement: (state, action) => {
      state.count -= action.payload || 1; 
    },
  }
});

export const { increment, decrement } = Counterslice.actions;
export default Counterslice.reducer;
