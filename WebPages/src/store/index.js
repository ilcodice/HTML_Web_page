import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import workspaceReducer from './slices/workspaceSlice'
export const mystore = configureStore({
  reducer: {
    auth: authReducer,
    workspace: workspaceReducer,
  },
});
