import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
