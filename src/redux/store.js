import { configureStore } from '@reduxjs/toolkit';
import cartModalSlice from '../pages/cartModal/cartModalSlice';
import newProductListSlice from '../pages/newProductList/newProductListSlice';
import productDetailSlice from '../pages/productDetail/productDetailSlice';
import roomListSlice from '../pages/roomList/roomListSlice';
import filterSlice from '../pages/sofaList/sofaListSlice';

const store = configureStore({
  reducer: {
    productListReducer: newProductListSlice.reducer,
    roomListReducer: roomListSlice.reducer,
    productDetailReducer: productDetailSlice.reducer,
    filters: filterSlice.reducer,
    cartReducer: cartModalSlice.reducer,
  },
});

export default store;
