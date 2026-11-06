import { createSlice } from '@reduxjs/toolkit';

const Searchslice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    items: [],        // All items that can be searched
    filteredItems: [] // Items filtered based on the search query
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
      // Filter items based on the query
      state.filteredItems = state.items.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.filteredItems = [];
    }
  }
});

export const { setSearchQuery, setItems, clearSearch } = Searchslice.actions;
export default Searchslice.reducer;
