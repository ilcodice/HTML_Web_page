import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'

export const mystore = configureStore({
  reducer: { 
    user : userReducer },
})