import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterInitialState = {
  count: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.count += 5;
    },
    decrement(state) {
      state.count -= 5;
    },
    increase(state, action) {
      state.count += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
