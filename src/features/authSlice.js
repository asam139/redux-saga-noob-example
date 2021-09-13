import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loader: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.loader = true;
    },
    loginSuccess(state, action) {
      state.loader = false;
      state.isAuthenticated = !!action.payload.token;
    },
    loginFailure(state) {
      state.loader = false;
      state.isAuthenticated = false;
    },
  },
});

export const { login, loginSuccess, loginFailure } = authSlice.actions;

export const authReducer = authSlice.reducer;
