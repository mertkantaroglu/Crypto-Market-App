import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const url = 'https://api.coinstats.app/public/v1/coins';

  const response = await axios.get(url);
  return response.data.coins;
});

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

export const selectCoins = (state) => {
  const { coins } = state.coins;
  return coins;
};

export const selectCoinsStatus = (state) => {
  const { status } = state.coins;
  return status === 'idle' ? 'Loading...' : status;
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.status = 'loading';
    })

      .addCase(getCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })

      .addCase(getCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coinsSlice.reducer;
