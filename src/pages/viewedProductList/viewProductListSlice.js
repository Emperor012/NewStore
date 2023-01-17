export default createSlice({
  name: 'viewedProductList',

  initialState: { status: 'idle', productDetail: {}, cartAr: [] },

  reducers: {},

  extraReducers: (builder) => {
    // Trường hợp pending
    builder.addCase(addNewCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
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
