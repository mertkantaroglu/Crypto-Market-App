import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coin/coinsSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    details: detailsReducer,
  },
});

export default store;
