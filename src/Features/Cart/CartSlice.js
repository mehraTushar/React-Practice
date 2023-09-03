import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value += 1;
    },
    removeItem: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
