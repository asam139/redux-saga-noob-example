import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    usersSuccess: (state, action) => {
      const { payload } = action;
      const users = payload.data;
      state.loading = false;
      state.list = users;
      state.filteredList = users;
    },
    usersFailure: (state) => {
      state.loading = false;
      state.list = [];
    },
    filterUsersBy: () => {},
    setFilteredUsers: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const {
  getUsers, usersSuccess, usersFailure, filterUsersBy, setFilteredUsers,
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
