import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { isLogin } = authSlice.actions;
export default authSlice.reducer;
