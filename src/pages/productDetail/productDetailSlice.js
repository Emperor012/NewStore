import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import axiosClient, { BASE_URL } from '../../api/axiosClient';

export default createSlice({
  name: 'productDetail',

  initialState: { status: 'idle', productDetail: {}, cartAr: [], loadingPage: false },

  reducers: {},

  extraReducers: (builder) => {
    // Trường hợp pending
    builder
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.status = 'idle';
      })

      .addCase(updateDetailProduct.pending, (state, action) => {
        //update lại status
        state.status = 'loading';
      })
      .addCase(updateDetailProduct.fulfilled, (state, action) => {
        let currentDetail = action.payload;

        console.log('action.payload - currentDetail', currentDetail);

        state.productDetail = currentDetail;
        console.log(`state.productDetail.after`, state.productDetail);

        state.status = 'idle';
      })

      .addCase(addNewCart.fulfilled, (state, action) => {
        state.cart = action.payload;

        console.log(`state.cart.after`, state.cartAr);
      })
      .addCase(addCartSecond.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export const fetchProductDetail = createAsyncThunk('productDetail/fetchProductDetail', async (productId) => {
  // const { productId } = useParams();

  try {
    //gọi tới API 'api//products
    const res = await axiosClient.get(`/products/${productId}`);
    if (res.status === 200) {
      // console.log(res.data);
      return res.data; //trả về response
    }
  } catch (err) {
    console.log(err);
  }
});

export const updateDetailProduct = createAsyncThunk('productDetail/updateProductDetail', async (productId) => {
  try {
    // Gửi một POST request
    const res = await axios({
      method: 'patch',
      url: `${BASE_URL}/products/${productId}`,
      data: {
        isViewed: true,
      },
    });

    const updateData = await res.data;
    console.log(`updateData`, updateData);
    return updateData;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});

export const addNewCart = createAsyncThunk('cart/addNewCart', async (newCartProduct) => {
  // thunk function / thunk action
  try {
    // Gửi một POST request
    const res = await axios({
      method: 'post',
      url: `${BASE_URL}/cart`,
      data: {
        id: newCartProduct.id,
        title: newCartProduct.title,
        price: newCartProduct.price,
        image: newCartProduct.image,
        alterImage: newCartProduct.alterImage,
      },
    });

    const newCart = await res.data;

    console.log(`cart`, newCart);
    return newCart;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});
export const addCartSecond = createAsyncThunk('cart/addCartSecond', async (productId) => {
  try {
    const res = await axios({
      method: 'patch',

      url: `${BASE_URL}/cart/${productId}`,
      data: {
        quantity: 2,
      },
    });

    const newCart = await res.data;

    console.log(`cartUpdate`, newCart);
    return newCart;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});
export const AddMoreCart = createAsyncThunk('cart/updateCart', async (productId) => {
  try {
    const resCart = await axiosClient.get(`/cart/${productId}`);

    const res = await axios({
      method: 'patch',

      url: `${BASE_URL}/cart/${productId}`,
      data: {
        quantity: resCart.data.quantity + 1,
      },
    });

    const newCart = await res.data;

    console.log(`cartUpdate`, newCart);
    return newCart;
  } catch (err) {
    console.log(err);
    return err.message;
  }
});
