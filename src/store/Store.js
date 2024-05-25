import { configureStore } from '@reduxjs/toolkit';
import ResturantSlice from '../Features/Cart/ResturantSlice';

export const store = configureStore({
  reducer: {
    Resturant: ResturantSlice,
  },
});
