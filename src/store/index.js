import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, cart: cartReducer },
});

export default store;
