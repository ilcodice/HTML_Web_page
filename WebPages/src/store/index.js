import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';

export const mystore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
