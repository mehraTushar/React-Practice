import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.Id === action.payload.Id
      );
      if (!item) {
        state.cartItems.push(action.payload);
      } else {
        item.Quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.Id === action.payload.Id
      );
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].Quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex].Quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
