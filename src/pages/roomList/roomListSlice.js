import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRooms } from '../../api/rooms';

export default createSlice({
  name: 'roomList',

  initialState: { status: 'idle', roomList: [] },

  reducers: {},

  extraReducers: (builder) => {
    // Trường hợp pending
    builder
      .addCase(fetchRoomList.pending, (state, action) => {
        //update lại status
        state.status = 'loading';
      })
      .addCase(fetchRoomList.fulfilled, (state, action) => {
        // trường hợp fullfilled - đã request xong , đang rảnh dỗi
        state.roomList = action.payload;
        state.status = 'idle';
      });
  },
});

export const fetchRoomList = createAsyncThunk('roomList/fetchRoomList', async () => {
  try {
    //gọi tới API 'api//products
    const res = await getRooms();
    if (res.status === 200 && res.data) {
      return res.data; //trả về response
    }
  } catch (err) {
    console.log(err);
  }
});
