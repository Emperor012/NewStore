import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

export default createSlice({
  name: 'newProductList',

  //        đổi initialState từ array
  // 		  =>
  // 		  1 object có 2 field
  // 		  { status : 'trang thai của request api/todos' , todo : []}

  initialState: { status: 'idle', productList: [] },

  reducers: {},

  extraReducers: (builder) => {
    // Trường hợp pending
    builder
      .addCase(fetchProductList.pending, (state, action) => {
        //update lại status
        state.status = 'loading';
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        // trường hợp fullfilled - đã request xong , đang rảnh dỗi
        state.productList = action.payload;
        state.status = 'idle';
      });
  },
});

// action (JS object) và action creator () => { return action }
// thunk action (function) và thunk action creator () => { return thunk action }
// thunk action creator trả về 1 thunk action

// Mỗi createAsyncThunk tạo ra 3 action tương ứng giống 3 trạng thái của promise :

// 	- todos/fetchTodos/pending : action khi ta vừa gửi request

// 	- todos/fetchTodos/fullfilled

// 	- todos/fetchTodos/rejected

export const fetchProductList = createAsyncThunk('productList/fetchProductList', async () => {
  try {
    //gọi tới API 'api//products
    const res = await getProducts();
    if (res.status === 200 && res.data) {
      return res.data; //trả về response
    }
  } catch (err) {
    console.log(err);
  }
});

// export const fetchProductList = createAsyncThunk()
