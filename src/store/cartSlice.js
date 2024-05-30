import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], showCart: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {},
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
