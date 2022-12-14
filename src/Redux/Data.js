import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: { value: { hotelName: '', locationName: '' } },
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
    setImageLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addData, setImageLocation } = dataSlice.actions;

export default dataSlice.reducer;
