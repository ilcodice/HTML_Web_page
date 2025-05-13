import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
  }

export const userSlice = createSlice({
    name: 'null',
    initialState,
    reducers: { 
        Login: (state, action) => { 
            state.user = action.payload; // email and pass will be sent from component
        },
        logout: (state, action) => { state.user == null;},
        changePassword: (state, action) => {}

    }
});
export const { login, logout, changePassword} = userSlice.actions

export default userSlice.reducer