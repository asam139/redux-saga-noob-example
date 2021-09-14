import { createSlice } from '@reduxjs/toolkit';
import { loginSuccess, loginFailure } from './loginSlice';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginSuccess]: (state, action) => {
      const { payload } = action;
      const { token } = payload;
      state.isAuthenticated = !!token;
      state.token = token;
    },
    [loginFailure]: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

// export const { } = authSlice.actions;

export const authReducer = authSlice.reducer;
