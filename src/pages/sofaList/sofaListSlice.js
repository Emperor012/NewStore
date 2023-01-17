import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

export default createSlice({
  name: 'sofaList',

  initialState: {
    price: 'Từ thấp đến cao',
    material: 'All',
    size: 'All',
  },

  reducers: {
    priceFilterChange: (state, action) => {
      //mutation || IMMER
      state.price = action.payload;
      console.log(`state.price ${state.price}`);
    },

    materialFilterChange: (state, action) => {
      state.material = action.payload;
    },

    sizeFilterChange: (state, action) => {
      state.size = action.payload;
    },
  },

  extraReducers: (builder) => {},
});
