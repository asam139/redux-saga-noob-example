import { createSlice } from '@reduxjs/toolkit';
import { login, loginSuccess, loginFailure } from './authSlice';

const initialState = {
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

  },
  extraReducers: {
    [login]: (state) => {
      state.loading = true;
    },
    [loginSuccess]: (state) => {
      state.loading = false;
    },
    [loginFailure]: (state) => {
      state.loading = false;
    },
  },
});

// export const { } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
