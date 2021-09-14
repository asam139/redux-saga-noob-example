import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../features/authSlice';
import { loginReducer } from '../features/loginSlice';
import { usersReducer } from '../features/usersSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  users: usersReducer,
});
