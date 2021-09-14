import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.loading = false;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { login, loginSuccess, loginFailure } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
