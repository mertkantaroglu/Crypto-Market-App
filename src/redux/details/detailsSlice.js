import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetails = createAsyncThunk(
  'detail/getDetails', async (id) => {
    const url = `https://api.coinstats.app/public/v1/coins/${id}`;

    const result = await axios(url);
    return result.data;
  },
);

const initialState = {
  detail: [],
  status: 'idle',
  error: '',
};

export const selectDetails = (state) => {
  const { detail } = state.details;
  return detail;
};

export const selectDetailsStatus = (state) => {
  const { status } = state.details;
  return status === 'idle' ? 'Loading...' : status;
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.detail = action.payload.coin;
      })

      .addCase(getDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
