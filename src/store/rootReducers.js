import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../features/authSlice';
import { loginReducer } from '../features/loginSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
});
