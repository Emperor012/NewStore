import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient, { BASE_URL } from '../../api/axiosClient';

export default createSlice({
  name: 'cart',

  initialState: { status: 'idle', cart: [] },

  reducers: {},

  extraReducers: (builder) => {
    // Trường hợp pending
    builder
      .addCase(fetchCart.pending, (state, action) => {
        //update lại status
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        // trường hợp fullfilled - đã request xong , đang rảnh dỗi
        state.cart = action.payload;
        state.status = 'idle';
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export const fetchCart = createAsyncThunk('cart/fetchCart', async (productId) => {
  // const { productId } = useParams();

  try {
    //gọi tới API 'api//products
    const res = await axiosClient.get(`/cart`);
    if (res.status === 200) {
      console.log(res);
      return res.data; //trả về response
    }
  } catch (err) {
    console.log(err);
  }
});

export const deleteCart = createAsyncThunk('cart/deleteCart', async (product) => {
  try {
    console.log(product);

    const res = await axios({
      method: 'delete',

      url: `${BASE_URL}/cart/${product.id}`,
    });

    const newCart = await res.data;

    console.log(`cartDelete`, newCart);
    return newCart;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});
