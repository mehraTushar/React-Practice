import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let res = state.cartItems.findIndex(
        (item) => item.Id === action.payload.Id
      );
      if (res == -1) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        state.cartItems[res].Quantity += 1;
      }
    },
    removeItem: (state, action) => {
      let res = state.cartItems.findIndex(
        (item) => item.Id === action.payload.Id
      );
      if (state.cartItems[res].Quantity == 1) {
        state.cartItems = state.cartItems.filter(
          (CurrItem) => CurrItem.Id !== action.payload.Id
        );
      } else {
        state.cartItems[res].Quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
