import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterAction = counterSlice.actions;

export default store;
