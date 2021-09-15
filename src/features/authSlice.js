import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      const { payload } = action;
      const { token } = payload;
      state.isAuthenticated = !!token;
      state.token = token;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: {

  },
});

export const { login, loginSuccess, loginFailure } = authSlice.actions;

// export const { } = authSlice.actions;

export const authReducer = authSlice.reducer;
