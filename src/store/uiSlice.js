import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false, notify: false },
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },

    showNotification(state, action) {
      state.notify = action.payload;
    },
  },
});

export const { toggleShowCart, showNotification } = uiSlice.actions;
export default uiSlice.reducer;
