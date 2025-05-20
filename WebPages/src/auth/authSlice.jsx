// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate signup API call (returns user data after delay)
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulate success
        resolve(userData);
      }, 2000);
    });
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Signup failed';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
