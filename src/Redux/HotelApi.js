import { createSlice } from '@reduxjs/toolkit';
export const hotelSlice = createSlice({
  name: 'hotelApi',
  initialState: {
    hoteldata: [],
  },
  reducers: {
    addHotelApi: (state, action) => {
      state.hoteldata = action.payload;
    },
  },
});
export const { addHotelApi } = hotelSlice.actions;

export default hotelSlice.reducer;
