import { createSlice } from '@reduxjs/toolkit';
const initialStateValue = false;
export const adminAuthenticationSlice = createSlice({
  name: 'adminAuthentication',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setAuthenticationStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAuthenticationStatus } = adminAuthenticationSlice.actions;

export default adminAuthenticationSlice.reducer;
