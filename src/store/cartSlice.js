import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], showCart: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const updatedCartIems = state.cartItems.map((ci) => {
        if (ci.id === action.payload.id) {
          return {
            ...action.payload,
            quantity: ci.quantity + action.payload.quantity,
            total: ci.total + action.payload.price,
          };
        }
        return ci;
      });

      if (!updatedCartIems.find((ci) => ci.id === action.payload.id)) {
        updatedCartIems.push(action.payload);
      }

      state.cartItems = updatedCartIems;
    },

    removeItem(state, action) {
      let updatedCartIems = state.cartItems.map((ci) => {
        if (ci.id === action.payload.id) {
          return {
            ...ci,
            quantity: ci.quantity - 1,
            total: ci.total - action.payload.price,
          };
        }
        return ci;
      });
      updatedCartIems = updatedCartIems.filter((ci) => ci.quantity !== 0);

      state.cartItems = updatedCartIems;
    },

    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addItem, removeItem, toggleShowCart } = cartSlice.actions;
export default cartSlice.reducer;
