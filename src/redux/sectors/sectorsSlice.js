import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectors: [],
};

const sectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {}
});

export default sectorsSlice.reducer;