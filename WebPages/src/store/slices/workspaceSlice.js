import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'javascript',
  fontSize: 12,
};

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
  },
});

export const { setLanguage, setFontSize } = workspaceSlice.actions;
export default workspaceSlice.reducer;
