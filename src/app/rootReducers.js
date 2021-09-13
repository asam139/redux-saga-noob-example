import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '../features/OnBoarding/authenticationSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
})
